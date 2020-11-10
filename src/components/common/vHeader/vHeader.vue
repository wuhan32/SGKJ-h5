<template>
  <div>
    <header>
      <van-nav-bar
        :left-text="meta"
        left-arrow
        @click-left="onClickLeft"
        :right-text="$store.state.userInfo.TrueUserName"
        @click-right="onClickRight"
      />
      <section>
        <slot name="body"></slot>
      </section>
    </header>
  </div>
</template>

<script>
import { Toast, Dialog } from "vant";
export default {
  data() {
    return {
      meta: this.$route.meta[0].title,
    };
  },
  created() {},
  methods: {
    onClickLeft() {
      if (this.$route.path != "/patientList") {
        this.$router.go(-1);
      }
    },

    onClickRight() {
      let _that = this;
      Dialog.confirm({
        title: "是否退出登录",
        beforeClose(action, done) {
          if (action === "confirm") {
            done();
            _that.$router.push({
              path: "/login",
            });
          } else {
            done();
          }
        },
      });
    },
  },
  watch: {},
};
</script>

<style lang="less" scoped>
header {
  height: 133px;
  .van-nav-bar {
    background-color: @blue;
  }
  .van-hairline--bottom::after {
    border-bottom-width: 0;
  }
  section {
    height: 60px;
    background-color: @blue;
    border-radius: 10px 10px 180px 180px;
    box-shadow: 0 0 5px 5px rgba(44, 43, 43, 0.5);
  }
}
</style>