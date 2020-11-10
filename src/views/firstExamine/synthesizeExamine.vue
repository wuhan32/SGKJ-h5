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
            <ul class="main-top">
              <li class="main-top-one">
                <span class="main-top-tab">视近</span>
                <span class="main-top-tab">视远</span>
                <!-- <select name class="main-top-tab" v-model="savemessage.inputList.rightTeleopsia1">
                  <option value="rightTeleopsia">视远</option>
                  <option value="rightNearVision">视近</option>
                  <option value="rightCheckMirror">镜止</option>
                </select>
                <select name class="main-top-tab" v-model="savemessage.inputList.rightTeleopsia2">
                  <option value="rightTeleopsia1">视远</option>
                  <option value="rightNearVision1">视近</option>
                  <option value="rightNearVision1">镜止</option>
                </select> -->
              </li>
              <li>
                <!-- <select name class="main-top-tab" v-model="savemessage.inputList.rightFrame">
                  <option value="rightFrame">框架</option>
                  <option value="rightSoftLenses ">软镜</option>
                  <option value="rightRGP">RGP</option>
                  <option value="rightCircularCone">圆锥</option>
                  <option value="rightLaser">激光</option>
                  <option value="rightICL">ICL</option>
                </select> -->
                <div>
                  <van-field
                    v-model="savemessage.inputList.rightTeleopsia1"
                    label="矫视"
                  />
                </div>
                <div>
                  <van-field v-model="savemessage.inputList.rightTeleopsia2" />
                </div>
              </li>
              <li>
                <div>
                  <van-field
                    v-model="savemessage.inputList.rightNakedLook"
                    label="裸视"
                  />
                </div>
                <div>
                  <van-field v-model="savemessage.inputList.rightNakedLook1" />
                </div>
              </li>
              <li>
                <div>
                  <van-field
                    v-model="savemessage.inputList.rightSph"
                    label="球镜"
                  />
                </div>
                <div>
                  <van-field v-model="savemessage.inputList.rightSph1" />
                </div>
              </li>
              <li>
                <div>
                  <van-field
                    v-model="savemessage.inputList.rightColumnMirror"
                    label="柱镜"
                  />
                </div>
                <div>
                  <van-field
                    v-model="savemessage.inputList.rightColumnMirror1"
                  />
                </div>
              </li>
              <li>
                <div>
                  <van-field
                    v-model="savemessage.inputList.rightAxialView"
                    label="轴位"
                  />
                </div>
                <div>
                  <van-field v-model="savemessage.inputList.rightAxialView1" />
                </div>
              </li>
              <li>
                <div>
                  <van-field
                    v-model="savemessage.inputList.rightLingMirror"
                    label="棱镜"
                  />
                </div>
                <div>
                  <van-field v-model="savemessage.inputList.rightLingMirror1" />
                </div>
              </li>
              <li>
                <span>底向</span>
                <div>
                  <select name v-model="savemessage.inputList.rightEndThe">
                    <option value="rightBI">BI</option>
                    <option value="rightBO">BO</option>
                    <option value="rightBU">BU</option>
                    <option value="rightBD">BD</option>
                  </select>
                </div>
                <div>
                  <select name v-model="savemessage.inputList.rightEndThe1">
                    <option value="rightBI1">BI</option>
                    <option value="rightBO1">BO</option>
                    <option value="rightBU1">BU</option>
                    <option value="rightBD">BD</option>
                  </select>
                </div>
              </li>
              <li>
                <div>
                  <van-field
                    label="视力"
                    v-model="savemessage.inputList.rightVision"
                  />
                </div>
                <div>
                  <van-field v-model="savemessage.inputList.rightVision1" />
                </div>
              </li>
            </ul>
            <p class="title">诊断</p>
            <ul class="main-buttom">
              <li>
                <span>立体</span>
                <select name v-model="savemessage.inputList.rightStereoscopic">
                  <option value="rightStereoscopic1">正常</option>
                  <option value="rightStereoscopic2">异常</option>
                  <option value="rightStereoscopic3">没有</option>
                </select>
              </li>
              <li>
                <span>融合</span>
                <select name v-model="savemessage.inputList.rightFuse">
                  <option value="rightFuse1">正常</option>
                  <option value="rightFuse2">异常</option>
                  <option value="rightFuse3">参差</option>
                  <option value="rightFuse4">没有</option>
                </select>
              </li>
              <li>
                <span>色觉</span>
                <select name v-model="savemessage.inputList.rightColourVision">
                  <option value="rightColourVision0">正常</option>
                  <option value="rightColourVision1">异常</option>
                  <option value="rightColourVision2">红弱</option>
                  <option value="rightColourVision3">绿弱</option>
                  <option value="rightColourVision4">蓝弱</option>
                  <option value="rightColourVision5">黄弱</option>
                  <option value="rightColourVision6">色弱</option>
                  <option value="rightColourVision7">色盲</option>
                </select>
              </li>
              <li>
                <span>红绿</span>
                <select name v-model="savemessage.inputList.rightRedGreen">
                  <option value="rightRedGreen1">正常</option>
                  <option value="rightRedGreen2">异常</option>
                  <option value="rightRedGreen3">平衡</option>
                  <option value="rightRedGreen4">红强</option>
                  <option value="rightRedGreen5">绿强</option>
                  <option value="rightRedGreen6">其他</option>
                </select>
              </li>
              <li>
                <span>散瞳</span>
                <select name v-model="savemessage.inputList.rightMydriasis">
                  <option value="rightMydriasis1">是</option>
                  <option value="rightMydriasis2">否</option>
                </select>
              </li>
              <li>
                <van-field
                  v-model="savemessage.inputList.rightCentrometer"
                  label="瞳距"
                />
                <p>mm</p>
              </li>
              <li>
                <van-field
                  v-model="savemessage.inputList.rightPupilHigh"
                  label="瞳高"
                />
                <p>mm</p>
              </li>
              <li>
                <van-field
                  v-model="savemessage.inputList.rightADD"
                  label="ADD"
                />
                <p>mm</p>
              </li>
            </ul>
          </van-tab>
          <van-tab title="左眼">
            <ul class="main-top">
              <li class="main-top-one">
                <span class="main-top-tab">视近</span>
                <span class="main-top-tab">视远</span>
              </li>
              <!-- <li class="main-top-one">
                <select name class="main-top-tab" v-model="savemessage.inputList.leftTeleopsia1">
                  <option value="leftTeleopsia">视远</option>
                  <option value="leftNearVision">视近</option>
                  <option value="leftCheckMirror">镜止</option>
                </select>
                <select name class="main-top-tab" v-model="savemessage.inputList.leftTeleopsia2">
                  <option value="leftTeleopsia1">视远</option>
                  <option value="leftNearVision1">视近</option>
                  <option value="leftNearVision1">镜止</option>
                </select>
              </li> -->
              <li>
                <!-- <select name class="main-top-tab" v-model="savemessage.inputList.leftFrame">
                  <option value="leftFrame">框架</option>
                  <option value="leftSoftLenses ">软镜</option>
                  <option value="leftRGP">RGP</option>
                  <option value="leftCircularCone">圆锥</option>
                  <option value="leftLaser">激光</option>
                  <option value="leftICL">ICL</option>
                </select> -->
                <div>
                  <van-field
                    v-model="savemessage.inputList.leftTeleopsia1"
                    label="矫视"
                  />
                </div>
                <div>
                  <van-field v-model="savemessage.inputList.leftTeleopsia2" />
                </div>
              </li>
              <li>
                <div>
                  <van-field
                    v-model="savemessage.inputList.leftNakedLook"
                    label="裸视"
                  />
                </div>
                <div>
                  <van-field v-model="savemessage.inputList.leftNakedLook1" />
                </div>
              </li>
              <li>
                <div>
                  <van-field
                    v-model="savemessage.inputList.leftSph"
                    label="球镜"
                  />
                </div>
                <div>
                  <van-field v-model="savemessage.inputList.leftSph1" />
                </div>
              </li>
              <li>
                <div>
                  <van-field
                    v-model="savemessage.inputList.leftColumnMirror"
                    label="柱镜"
                  />
                </div>
                <div>
                  <van-field
                    v-model="savemessage.inputList.leftColumnMirror1"
                  />
                </div>
              </li>
              <li>
                <div>
                  <van-field
                    v-model="savemessage.inputList.leftAxialView"
                    label="轴位"
                  />
                </div>
                <div>
                  <van-field v-model="savemessage.inputList.leftAxialView1" />
                </div>
              </li>
              <li>
                <div>
                  <van-field
                    v-model="savemessage.inputList.leftLingMirror"
                    label="棱镜"
                  />
                </div>
                <div>
                  <van-field v-model="savemessage.inputList.leftLingMirror1" />
                </div>
              </li>
              <li>
                <span>底向</span>
                <div>
                  <select name v-model="savemessage.inputList.leftEndThe">
                    <option value="leftBI">BI</option>
                    <option value="leftBO">BO</option>
                    <option value="leftBU">BU</option>
                    <option value="leftBD">BD</option>
                  </select>
                </div>
                <div>
                  <select name v-model="savemessage.inputList.leftEndThe1">
                    <option value="leftBI1">BI</option>
                    <option value="leftBO1">BO</option>
                    <option value="leftBU1">BU</option>
                    <option value="leftBD">BD</option>
                  </select>
                </div>
              </li>
              <li>
                <div>
                  <van-field
                    label="视力"
                    v-model="savemessage.inputList.leftVision"
                  />
                </div>
                <div>
                  <van-field v-model="savemessage.inputList.leftVision1" />
                </div>
              </li>
            </ul>
            <p class="title">诊断</p>
            <ul class="main-buttom">
              <li>
                <span>立体</span>
                <select name v-model="savemessage.inputList.leftStereoscopic">
                  <option value="leftStereoscopic1">正常</option>
                  <option value="leftStereoscopic2">异常</option>
                  <option value="leftStereoscopic3">没有</option>
                </select>
              </li>
              <li>
                <span>融合</span>
                <select name v-model="savemessage.inputList.leftFuse">
                  <option value="leftFuse1">正常</option>
                  <option value="leftFuse2">异常</option>
                  <option value="leftFuse3">参差</option>
                  <option value="leftFuse4">没有</option>
                </select>
              </li>
              <li>
                <span>色觉</span>
                <select name v-model="savemessage.inputList.leftColourVision">
                  <option value="leftColourVision0">正常</option>
                  <option value="leftColourVision1">异常</option>
                  <option value="leftColourVision2">红弱</option>
                  <option value="leftColourVision3">绿弱</option>
                  <option value="leftColourVision4">蓝弱</option>
                  <option value="leftColourVision5">黄弱</option>
                  <option value="leftColourVision6">色弱</option>
                  <option value="leftColourVision7">色盲</option>
                </select>
              </li>
              <li>
                <span>红绿</span>
                <select name v-model="savemessage.inputList.leftRedGreen">
                  <option value="leftRedGreen1">正常</option>
                  <option value="leftRedGreen2">异常</option>
                  <option value="leftRedGreen3">平衡</option>
                  <option value="leftRedGreen4">红强</option>
                  <option value="leftRedGreen5">绿强</option>
                  <option value="leftRedGreen6">其他</option>
                </select>
              </li>
              <li>
                <span>散瞳</span>
                <select name v-model="savemessage.inputList.leftMydriasis">
                  <option value="leftMydriasis1">是</option>
                  <option value="leftMydriasis2">否</option>
                </select>
              </li>
              <li>
                <van-field
                  v-model="savemessage.inputList.leftCentrometer"
                  label="瞳距"
                />
                <p>mm</p>
              </li>
              <li>
                <van-field
                  v-model="savemessage.inputList.leftPupilHigh"
                  label="瞳高"
                />
                <p>mm</p>
              </li>
              <li>
                <van-field
                  v-model="savemessage.inputList.leftADD"
                  label="ADD"
                />
                <p>mm</p>
              </li>
            </ul>
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
          cusKeyId: "",
          leftTeleopsia1: "",
          leftTeleopsia2: "",
          leftFrame: "leftFrame",
          leftNakedLook: "",
          leftNakedLook1: "",
          leftSph: "",
          leftSph1: "",
          leftColumnMirror: "",
          leftColumnMirror1: "",
          leftAxialView: "",
          leftAxialView1: "",
          leftLingMirror: "",
          leftLingMirror1: "",
          leftEndThe: "leftBI",
          leftEndThe1: "leftBI1",
          leftVision: "",
          leftVision1: "",
          leftStereoscopic: "leftStereoscopic1",
          leftFuse: "leftFuse1",
          leftColourVision: "leftColourVision1",
          leftRedGreen: "leftRedGreen1",
          leftCentrometer: "",
          leftPupilHigh: "",
          leftADD: "",
          rightMydriasis: "rightMydriasis2",
          leftMydriasis: "leftMydriasis2",
          rightTeleopsia1: "",
          rightTeleopsia2: "",
          rightFrame: "rightFrame",
          rightNakedLook: "",
          rightNakedLook1: "",
          rightSph: "",
          rightSph1: "",
          rightColumnMirror: "",
          rightColumnMirror1: "",
          rightAxialView: "",
          rightAxialView1: "",
          rightLingMirror: "",
          rightLingMirror1: "",
          rightEndThe: "rightBI",
          rightEndThe1: "rightBI1",
          rightVision: "",
          rightVision1: "",
          rightStereoscopic: "rightStereoscopic1",
          rightFuse: "rightFuse1",
          rightColourVision: "rightColourVision1",
          rightRedGreen: "rightRedGreen1",
          rightCentrometer: "",
          rightPupilHigh: "",
          rightADD: "",
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
    //   this.savemessage.savemessage.inputList.push({
    //     ...this.inputList,
    //     cusKeyId: element.cusKeyId,
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
      // let prePatientId = this.clickList[this.clickListtag].cusKeyId;
      // let targetIndex = this.savemessage.savemessage.inputList.findIndex(
      //   (p) => p.cusKeyId == prePatientId
      // );
      // this.savemessage.inputList[targetIndex] =  (
      //   JSON.stringify(this.inputList)
      // );

      // this.savemessage.inputList[targetIndex].cusKeyId = prePatientId;
      let optometryDetailModelViews = [];
      // this.savemessage.savemessage.inputList.forEach((res) => {
      optometryDetailModelViews.push({
        jsonData: JSON.stringify(this.savemessage),
        dataType: 2,
        cusKeyId: this.clickList[this.clickListtag].cusKeyId,
        organCode: userInfo.OrginCode,
        doctorName: userInfo.TrueUserName,
        doctorKeyId: +userInfo.Id,
        examType: 1,
        eyeType,
      });
      // if (this.paramsValidate(res)) {

      // }
      // });
      // if (
      //   optometryDetailModelViews.length == this.savemessage.savemessage.inputList.length
      // ) {
      console.log(optometryDetailModelViews);
      const { data: res } = await SaveOptometryFromMobile(
        optometryDetailModelViews
      ).then();
      console.log(res);
      if (res.data) {
        // this.$router.push({ path: "/patientInfo" });
        Toast("保存成功");
      } else {
        Toast("该患者不在待诊中");
      }
      // }
    },
    goInfo() {
      this.$router.push({
        path: "/patientList",
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
      // let targetIndex = this.savemessage.savemessage.inputList.findIndex(
      //   (p) => p.cusKeyId == prePatientId
      // );
      // this.savemessage.inputList[targetIndex] =  (
      //   JSON.stringify(this.inputList)
      // );
      // this.savemessage.inputList[targetIndex].cusKeyId = prePatientId;
      // //下一条的从savemessage.inputList拿数据
      // let nextPutList = this.savemessage.savemessage.inputList.find(
      //   (p) => p.cusKeyId == curPatientId
      // );
      // this.inputList =  (JSON.stringify(nextPutList));
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
  height: 100vh-35;
  background-color: #fff;
  box-shadow: 0 5px 5px 1px rgba(165, 170, 170, 0.5);
  border-bottom-right-radius: 15px;
  border-bottom-left-radius: 15px;
  overflow: scroll;
  .title {
    font-size: 12px;
    margin-left: 86px;
    color: #888;
  }
  .main-top {
    padding: 0 20px;
    .main-top-one {
      margin-left: 50px;
    }
    .main-top-tab {
      box-shadow: inset 0px 0px 0px 0px rgba(0, 0, 0, 0.1);
      width: 50px;
      border: 0px solid #000;
      color: #646566;
      margin-left: 25px;
    }
    select {
      height: 20px;
      line-height: 20px;
      font-size: 12px;
      box-shadow: inset 0px 0px 2px 1px rgba(0, 0, 0, 0.1);
      width: 70px;
      border-radius: 5px;
      outline: none;
      option {
        font-size: 5px;
      }
    }
    li {
      display: flex;
      margin-top: 5px;
      > span {
        font-size: 12px;
        line-height: 22px;
        color: #646566;
        margin-right: 25px;
      }
      > div {
        margin-right: 10px;
        select {
          height: 20px;
          line-height: 20px;
          font-size: 12px;
          box-shadow: inset 0px 0px 2px 1px rgba(0, 0, 0, 0.1);
          width: 90px;
          border-radius: 5px;
          outline: none;
          option {
            font-size: 5px;
          }
        }
      }
    }
  }
  .main-buttom {
    padding: 0 20px;
    select {
      height: 20px;
      line-height: 20px;
      font-size: 12px;
      box-shadow: inset 0px 0px 2px 1px rgba(0, 0, 0, 0.1);
      width: 90px;
      border-radius: 5px;
      outline: none;
      option {
        font-size: 5px;
      }
    }
    li {
      display: flex;
      margin-top: 5px;
      > span {
        font-size: 12px;
        margin-right: 25px;
        color: #646566;
      }
      > p {
        font-size: 12px;
        margin-right: 115px;
      }
    }
  }
}
footer {
  text-align: right;
}
</style>