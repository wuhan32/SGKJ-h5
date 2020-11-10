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
    <main class="optometry">
      <van-tabs type="card" @click="onClick">
        <van-tab title="右眼">
          <p>综合验光</p>
          <ul>
            <li>
              <van-field
                v-model="savemessage.inputList.leftNakedEyeVision"
                label="裸眼视力"
              />
            </li>
            <li>
              <van-field
                v-model="savemessage.inputList.leftOnChipVision"
                label="片上视力"
              />
            </li>
          </ul>
          <section>
            <div>
              <span></span>
              <span>电脑</span>
              <span>插片</span>
              <span></span>
            </div>
            <ul>
              <li>
                <van-field
                  v-model="savemessage.inputList.leftOnChipBreadth"
                  label="片上光度"
                />
                <van-field v-model="savemessage.inputList.leftOnChipBreadth1" />
              </li>
              <li>
                <van-field
                  v-model="savemessage.inputList.leftDowChipBreadth"
                  label="片下广度"
                />
                <van-field
                  v-model="savemessage.inputList.leftDowChipBreadth1"
                />
              </li>
            </ul>
          </section>
        </van-tab>
        <van-tab title="左眼">
          <p>综合验光</p>
          <ul>
            <li>
              <van-field
                v-model="savemessage.inputList.rightNakedEyeVision"
                label="裸眼视力"
              />
            </li>
            <li>
              <van-field
                v-model="savemessage.inputList.rightOnChipVision"
                label="片上视力"
              />
            </li>
          </ul>
          <section>
            <div>
              <span></span>
              <span>电脑</span>
              <span>插片</span>
              <span></span>
            </div>
            <ul>
              <li>
                <van-field
                  v-model="savemessage.inputList.rightOnChipBreadth"
                  label="片上光度"
                />
                <van-field
                  v-model="savemessage.inputList.rightOnChipBreadth1"
                />
              </li>
              <li>
                <van-field
                  v-model="savemessage.inputList.rightDowChipBreadth"
                  label="片下广度"
                />
                <van-field
                  v-model="savemessage.inputList.rightDowChipBreadth1"
                />
              </li>
            </ul>
          </section>
        </van-tab>
      </van-tabs>
    </main>

    <footer>
      <van-button
        round
        size="small"
        class="footerBt-right"
        @click.native="goInfo"
        >返回首页</van-button
      >
      <van-button round size="small" class="footerBt-left" native-type="submit"
        >提交</van-button
      >
    </footer>
  </div>
</template>

<script>
import { setCookie, getCookie } from "../../utils/vCookie";

import { Toast } from "vant";
import vHeader from "../../components/common/vHeader/vHeader";
import { SaveOptometryFromMobile } from "../../http/api/patientList";
export default {
  data() {
    return {
      clickList: [],
      clickListtag: 0,
      value: "",
      savemessage: {
        inputList: {
          leftNakedEyeVision: "",
          leftOnChipVision: "",
          leftOnChipBreadth: "",
          leftOnChipBreadth1: "",
          leftDowChipBreadth: "",
          leftDowChipBreadth1: "",
          rightNakedEyeVision: "",
          rightOnChipVision: "",
          rightOnChipBreadth: "",
          rightDowChipBreadth: "",
          rightOnChipBreadth1: "",
          rightDowChipBreadth1: "",
        },
      },
      eyeType: "OD",
      orginCode: "",
    };
  },
  created() {
    this.clickList = getCookie("clickList");
  },
  mounted() {},
  methods: {
    goInfo() {
      this.$router.push({
        path: "/patientList",
      });
    },
    onClick(name, title) {
      if (name == 0) {
        this.eyeType = "OD";
      } else {
        this.eyeType = "OS";
      }
    },
    onSubmit(values) {
      this.gosubmit();
    },
    //保存新建档案
    async gosubmit() {
      const userInfo = getCookie("userInfo");
      let optometryDetailModelViews = [];

      optometryDetailModelViews.push({
        eyeType: this.eyeType,
        jsonData: JSON.stringify(this.savemessage),
        dataType: 2,
        cusKeyId: this.clickList[this.clickListtag].cusKeyId,
        organCode: userInfo.OrginCode,
        doctorName: userInfo.TrueUserName,
        doctorKeyId: +userInfo.Id,
        examType: 2,
      });
      const { data: res } = await SaveOptometryFromMobile(
        optometryDetailModelViews
      ).then();
      console.log(res);
      if (res.data) {
        Toast("保存成功");
      } else {
        Toast("该患者不在待诊中");
      }
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
  background-color: #fff;
  box-shadow: 0 5px 5px 1px rgba(165, 170, 170, 0.5);
  border-bottom-right-radius: 15px;
  border-bottom-left-radius: 15px;
  p {
    margin-top: 5px;
    font-size: 17px;
  }
  ul {
    padding: 10px 10px;

    li {
      width: 140px;
      margin: 5px 0;
    }
  }
  section {
    div {
      display: flex;
      justify-content: space-around;
      span {
        font-size: 12px;
      }
    }
    ul {
      li {
        display: flex;
        width: 300px;
      }
    }
  }
}
footer {
  text-align: right;
  .van-button {
    color: #fff;
    width: 100px;
  }
  .footerBt-left {
    background-color: @blue;
  }
}
</style>