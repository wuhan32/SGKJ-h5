<template>
  <div class="work">
    <header>
      <van-image round width="10rem" height="10rem" :src="thumbnail" />
      <p>{{userName}}</p>
    </header>
    <main>
      <van-button color="linear-gradient(to right, #4bb0ff, #6149f6)" round>检查档案</van-button>
      <van-button color="linear-gradient(to right, #4bb0ff, #6149f6)" round>复查档案</van-button>
    </main>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userName: this.$store.state.userInfo.TrueUserName,
      thumbnail: "",
    };
  },
  created() {
    const base = parseInt(Math.random() * 60, 10) + 10;
    this.thumbnail = `https://picsum.photos/id/${base}/200/150`;
  },
  methods: {},
};
</script>

<style lang="less" scoped>
.work {
  header {
    margin-top: 80px;
    text-align: center;
    .van-image {
      width: 80px !important;
      height: 80px !important;
    }
  }
  main {
    margin-top: 10px;
    .van-button {
      display: block;
      width: 80%;
      margin: 20px auto;
    }
  }
  ul {
    width: 200px;
    display: flex;
  }
  ul li {
    width: 100px;
    height: 40px;
    background: #ccc;
    display: inline-flex;
    border-right: 1px solid #ddd;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }
  ul li.active {
    background: #333;
  }
}
</style>