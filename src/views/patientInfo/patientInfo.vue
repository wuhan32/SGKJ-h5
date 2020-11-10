<template>
  <div class="patientInfo">
    <v-header></v-header>
    <section>
      <p>患者信息</p>
      <van-grid>
        <van-grid-item to="/seeDoctorList">
          <i class="iconfont icon-jiuzhenjilux" style="color: #d57416"></i>
          <p>就诊记录</p>
        </van-grid-item>
      </van-grid>
      <p>初诊</p>
      <van-grid>
        <van-grid-item to="/firstExamine">
          <i class="iconfont icon-diannao"></i>
          <p>电脑验光</p>
        </van-grid-item>
        <van-grid-item to="/synthesizeExamine">
          <i class="iconfont icon-yisheng1" style="color: #df5082"></i>
          <p>综合验光</p>
        </van-grid-item>
        <van-grid-item to="/intraocular">
          <van-icon name="eye-o" />
          <p>眼压检测</p>
        </van-grid-item>
        <!-- <van-grid-item to="/repeatedExamine">
          <i class="iconfont icon-yisheng" style="color:#41DD4E"></i>
          <p>复光</p>
        </van-grid-item> -->
      </van-grid>
      <p>复查</p>
      <van-grid>
        <van-grid-item
          icon="iconfont icon-yisheng1"
          text="综合验光"
          to="/optometry"
        >
          <i class="iconfont icon-yisheng1" style="color: #df5082"></i>
          <p>综合验光</p>
        </van-grid-item>
      </van-grid>
    </section>
  </div>
</template>

<script>
import vHeader from "../../components/common/vHeader/vHeader";
import { setCookie, getCookie } from "../../utils/vCookie";

export default {
  data() {
    return {
      clickList: [],
    };
  },
  created() {
    this.clickList = getCookie("clickList");
  },
  components: {
    vHeader,
  },
};
</script>

<style lang="less" scoped>
.patientInfo {
  height: 100vh-20;
  section {
    padding: 0 4px;
    > p {
      font-size: 16px;
      padding-left: 5px;
      background-color: #fff;
      color: #aaa;
      line-height: 26px;
      border-top-left-radius: 0.5rem;
      border-top-right-radius: 0.5rem;
    }
    .van-grid {
      background-color: #fff;
      margin-bottom: 10px;
      .van-grid-item {
        i {
          margin-bottom: 8px;
          color: @blue;
          font-size: 20px;
          font-weight: 700;
        }
        p {
          font-size: 14px;
          color: #678;
        }
      }
    }
  }
}
</style>