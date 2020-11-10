<template>
  <div class="firstExamine">
    <v-header>
      <div slot="body" class="header-body">
        <p @click="cutleft">
          <van-icon name="arrow-left" />
        </p>
        <p>
          <span>姓名:{{ clickList[clickListtag].name }}</span>
          <span>性别:{{ clickList[clickListtag].sex }}</span>
        </p>
        <p>
          <span>病例号:{{ clickList[clickListtag].patientId }}</span>
          <span>年龄:{{ clickList[clickListtag].age }}</span>
        </p>
        <p @click="cutright">
          <van-icon name="arrow" />
        </p>
      </div>
    </v-header>
    <van-form @submit="onSubmit">
      <main>
        <van-tabs type="card" @click="onClick">
          <van-tab title="右眼">
            <ul>
              <li class="IOP">
                <span>眼压</span>
              </li>
              <li></li>
              <li>
                <van-field
                  v-model="savemessage.inputList.rightIPO1"
                  label="早上"
                />
              </li>
              <li>
                <van-field
                  v-model="savemessage.inputList.rightIPO2"
                  label="上午"
                />
              </li>
              <li>
                <van-field
                  v-model="savemessage.inputList.rightIPO3"
                  label="中午"
                />
              </li>
              <li>
                <van-field
                  v-model="savemessage.inputList.rightIPO4"
                  label="下午"
                />
              </li>
              <li>
                <van-field
                  v-model="savemessage.inputList.rightIPO5"
                  label="晚上"
                />
              </li>
            </ul>
          </van-tab>
          <van-tab title="左眼">
            <ul>
              <li class="IOP">
                <span>眼压</span>
              </li>
              <li></li>
              <li>
                <van-field
                  v-model="savemessage.inputList.leftIPO1"
                  label="早上"
                />
              </li>
              <li>
                <van-field
                  v-model="savemessage.inputList.leftIPO2"
                  label="上午"
                />
              </li>
              <li>
                <van-field
                  v-model="savemessage.inputList.leftIPO3"
                  label="中午"
                />
              </li>
              <li>
                <van-field
                  v-model="savemessage.inputList.leftIPO4"
                  label="下午"
                />
              </li>
              <li>
                <van-field
                  v-model="savemessage.inputList.leftIPO5"
                  label="晚上"
                />
              </li>
            </ul>
          </van-tab>
        </van-tabs>
      </main>

      <footer>
        <!-- <van-button
          round
          size="small"
          class="footerBt-right"
          @click.native="goInfo"
          >继续综合验光</van-button
        > -->
        <van-button
          round
          size="small"
          class="footerBt-left"
          native-type="submit"
          >提交</van-button
        >
      </footer>
    </van-form>
  </div>
</template>

<script>
import { Toast } from "vant";
import vHeader from "../../components/common/vHeader/vHeader";
import { setCookie, getCookie } from "../../utils/vCookie";

import { SaveOptometryFromMobile } from "../../http/api/patientList";
export default {
  data() {
    return {
      clickList: [],
      clickListtag: 0,
      value: "",
      savemessage: {
        inputList: {
          rightIPO: "",
          rightIPO: "",
          rightIPO: "",
          rightIPO: "",
          rightIPO: "",
          leftIPO1: "",
          leftIPO2: "",
          leftIPO3: "",
          leftIPO4: "",
          leftIPO5: "",
        },
      },
      orginCode: "",
      eyeType: "OD",
    };
  },
  created() {
    this.clickList = getCookie("clickList");
    console.log(this.clickList);
    // this.clickList.forEach((element, index) => {
    //   this.savemessage.push({
    //     ...this.inputList,
    //   });
    // });
  },
  mounted() {},
  methods: {
    onClick(name, title) {
      if (name == 0) {
        this.eyeType = "OD";
      } else {
        this.eyeType = "OS";
      }
    },
    onSubmit(values) {
      this.gosubmit(this.eyeType);
    },
    //保存新建档案
    async gosubmit(eyeType) {
      const userInfo = getCookie("userInfo");
      //let prePatientId = this.clickList[this.clickListtag].cusKeyId;
      // let targetIndex = this.savemessage.findIndex(
      //   (p) => p.cusKeyId == prePatientId
      // );
      // this.savemessage[targetIndex] =  (
      //   JSON.stringify(this.inputList)
      // );

      //this.savemessage[targetIndex].cusKeyId = prePatientId;
      let optometryDetailModelViews = [];
      optometryDetailModelViews.push({
        jsonData: JSON.stringify(this.savemessage),
        dataType: 3,
        cusKeyId: this.clickList[this.clickListtag].cusKeyId,
        organCode: userInfo.OrginCode,
        doctorName: userInfo.TrueUserName,
        doctorKeyId: +userInfo.Id,
        examType: 1,
        eyeType,
      });
      console.log("========", optometryDetailModelViews);
      const { data: res } = await SaveOptometryFromMobile(
        optometryDetailModelViews
      ).then();
      console.log(res);
      if (res.data) {
        //this.$router.push({ path: "/patientInfo" });
        Toast("保存成功");
      } else {
        Toast("该患者不在待诊中");
      }
    },
    goInfo() {
      //this.gosubmit(this.eyeType);
      this.$router.push({
        path: "/synthesizeExamine",
      });
    },
    cutleft() {
      if (this.clickListtag == 0) {
        return Toast("第一个");
      }
      this.clickListtag--;
      this.cut(this.clickListtag + 1);
    },
    cutright() {
      if (this.clickListtag == this.clickList.length - 1) {
        return Toast("最后一个");
      }
      this.clickListtag++;
      this.cut(this.clickListtag - 1);
    },
    cut(clickListtag) {
      let prePatientId = this.clickList[clickListtag].cusKeyId;
      let curPatientId = this.clickList[this.clickListtag].cusKeyId;
      //上一条的保存到savemessage.inputList
      // let targetIndex = this.savemessage.findIndex(
      //   (p) => p.cusKeyId == prePatientId
      // );
      // this.savemessage[targetIndex] =  (
      //   JSON.stringify(this.inputList)
      // );
      // this.savemessage[targetIndex].cusKeyId = prePatientId;
      //下一条的从savemessage.inputList拿数据
      // let nextPutList = this.savemessage.find(
      //   (p) => p.cusKeyId == curPatientId
      // );
      // this.inputList =  (JSON.stringify(nextPutList));
      // console.log(this.savemessage);
    },
  },
  components: {
    vHeader,
  },
};
</script>

<style lang="less" scoped>
.header-body {
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  p {
    font-size: 15px;
    color: #fff;
    font-weight: 700;
    span {
      display: block;
    }
  }
}
main {
  height: 60vh;
  background-color: #fff;
  box-shadow: 0 5px 5px 1px rgba(165, 170, 170, 0.5);
  border-bottom-right-radius: 15px;
  border-bottom-left-radius: 15px;
  ul {
    display: flex;
    flex-wrap: wrap;
    padding: 20px 10px;
    li {
      width: 90px;
      margin-bottom: 20px;
      margin-left: 5px;
      span {
        font-size: 15px;
      }
    }
  }
}
footer {
  text-align: right;
}
</style>