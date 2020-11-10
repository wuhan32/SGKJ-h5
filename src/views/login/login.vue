<template>
  <div class="login">
    <section class="login-img">
      <img src="./img/logo1.png" alt srcset />
      <h3>视光科技</h3>
    </section>
    <van-form @submit="onSubmit">
      <van-field
        required
        v-model="loginForm.userName"
        name="用户名"
        label="用户名"
        placeholder="用户名"
        :rules="[{ required: true, message: '请填写用户名' }]"
      />
      <van-field
        v-model="loginForm.password"
        required
        type="password"
        name="密码"
        label="密码"
        placeholder="密码"
        :rules="[{ required: true, message: '请填写密码' }]"
      />
      <!-- <section class="validateimage">
        <van-field
          required
          v-model="loginForm.verificationValue"
          placeholder="验证码"
          name="验证码"
          :rules="[{ required: true, message: '请填写验证码' }]"
        />
        <img
          :src="'data:image/bmp;base64,' + validateimage"
          alt
          class="verification-img"
          @click="randomValidateimage"
        />
      </section> -->
      <div style="margin: 16px">
        <van-button round block type="info" native-type="submit"
          >提交</van-button
        >
      </div>
    </van-form>
  </div>
</template>

<script>
import { login, GetValidateCode } from "@/http/api/login";
import { setCookie, getCookie } from "../../utils/vCookie";

import jwtDecode from "jwt-decode";
export default {
  data() {
    return {
      validateimage: "",
      loginForm: {
        userName: "",
        password: "",
        // verificationCode: "",
        // verificationValue: "",
        saveDays: 0,
      },
    };
  },
  created() {
    this.GetValidateCode();
    this.$store.commit("$_removeStorage", "");
    if (getCookie("loginForm")) {
      this.loginForm = getCookie("loginForm");
    }
  },
  methods: {
    onSubmit(values) {
      console.log("submit", values);
      this.login();
    },
    //随机验证码
    randomValidateimage() {
      this.GetValidateCode();
    },
    //获取验证码
    async GetValidateCode() {
      const { data: res } = await GetValidateCode().then();
      //this.loginForm.verificationCode = res.data.imageCode;
      this.validateimage = res.data.imageData;
    },
    //登入请求
    async login() {
      const { data: res } = await login(this.loginForm).then();
      console.log(res);
      switch (res.code) {
        case 0:
          this.$notify({
            message: "登录成功",
            type: "success",
            duration: 800,
          });
          setCookie("loginForm", this.loginForm, 365);
          break;
        case 1:
          this.GetValidateCode();
          this.$notify({
            message: "验证码已过期",
            type: "warning",
            duration: 800,
          });
          break;
        case 2:
          this.GetValidateCode();
          this.$notify({
            message: "验证码输入不正确",
            type: "warning",
            duration: 800,
          });
          break;
        case 3:
          this.$notify({
            message: "用户名不存在",
            type: "warning",
            duration: 800,
          });
          break;
        case 4:
          this.$notify({
            message: "该用户已被禁用",
            type: "warning",
            duration: 800,
          });
          break;
        case 5:
          this.$notify({
            message: "密码不正确",
            type: "warning",
            duration: 800,
          });
          break;
      }
      const decode = jwtDecode(res.token);
      this.$store.commit("$_setUserInfo", decode);
      this.$store.commit("$_setToken", res.token);
      this.$router.push({ path: "/patientList" });
    },
  },
};
</script>

<style lang="less" scoped>
.login {
  .login-img {
    display: flex;
    align-items: center;
    margin: 50px 0;
    margin-left: 70px;
  }
  img {
    width: 70px;
    height: 70px;
  }
  h3 {
    margin-left: 10px;
    background: linear-gradient(to right, rgb(119, 72, 72), rgb(49, 51, 51));
    -webkit-background-clip: text;
    color: transparent;
    font-family: Times, TimesNR, "New Century Schoolbook", Georgia, "New York",
      serif;
  }
  .validateimage {
    display: flex;
    img {
      height: 50px;
      width: 200px;
    }
  }
}
</style>