<template>
  <div class="patient">
    <v-header>
      <section slot="body">
        <van-search
          shape="round"
          placeholder="请输入搜索关键词"
          v-model="listpage.value"
          clearable
          @clear="clientRecordList"
        />
        <div class="Header-button">
          <van-button
            round
            type="default"
            size="small"
            @click="awaitDiagnose"
            icon="exchange"
            v-show="exchange"
            >待诊</van-button
          >
          <van-button
            round
            type="default"
            size="small"
            @click="awaitDiagnose"
            icon="exchange"
            v-show="!exchange"
            >已诊断</van-button
          >
          <van-button round type="default" size="small" @click="seach"
            >查询</van-button
          >
        </div>
      </section>
    </v-header>
    <main>
      <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
        <van-list
          v-model="loading"
          :finished="finished"
          finished-text="没有更多了"
          @load="onLoad"
        >
          <ul class="patient-list">
            <li
              v-for="(item, index) in list"
              :key="item.cusKeyId"
              @click="patientInfo(item, index)"
              :class="[
                clickList.find((p) => p.cusKeyId == item.cusKeyId)
                  ? 'clicknew'
                  : '',
              ]"
            >
              <p>{{ item.name }}</p>
              <p>
                <span>
                  <i>病历号:{{ item.patientId }}</i>
                  <i>性别:{{ sex[item.sex] }}</i>
                  <i>年龄:{{ item.age }}</i>
                </span>
              </p>
            </li>
          </ul>
        </van-list>
      </van-pull-refresh>
    </main>
    <footer>
      <van-button
        round
        size="small"
        class="footerBt"
        :disabled="gopatientInfo"
        @click.native="goInfo"
        >下一步</van-button
      >
    </footer>
  </div>
</template>

<script>
import vHeader from "../../components/common/vHeader/vHeader";
import { setCookie, getCookie } from "../../utils/vCookie";

import { ClientRecordList } from "@/http/api/patientList";
export default {
  data() {
    return {
      exchange: true,
      sex: {
        F: "女",
        M: "男",
      },
      listpage: {
        currentPage: 1,
        pageSize: 10,
        searchType: 1,
        value: "",
        states: [1, 2, 3, 9, 10],
        organcode: "",
      },
      list: [],
      totalCount: 0,
      loading: false,
      finished: false,
      refreshing: false,
      clickList: [],
      judge: true,
      gopatientInfo: true,
    };
  },
  created() {
    this.listpage.organcode = getCookie("userInfo").OrginCode;
    console.log(this.listpage.organcode);
    this.clientRecordList();
  },
  mounted() {},
  methods: {
    patientInfo(item, index) {
      if (this.clickList.length != 0) {
        this.judge = true;
        this.clickList.forEach((element) => {
          if (element.cusKeyId === item.cusKeyId) {
            this.judge = false;
          }
        });
        if (this.judge) {
          this.clickList.push({
            ...item,
          });
          this.judge = true;
        } else {
          var delItem = this.clickList.findIndex((e) => {
            if (e.cusKeyId == item.cusKeyId) {
              return true;
            }
          });
          this.clickList.splice(delItem, 1);
        }
      } else {
        this.clickList.push({
          ...item,
        });
      }
    },

    onLoad() {
      this.listpage.pageSize += 10;
      setTimeout(() => {
        if (this.refreshing) {
          this.refreshing = false;
        }

        this.clientRecordList();
        this.loading = false;

        if (this.list.length == this.totalCount) {
          this.finished = true;
        }
      }, 500);
    },
    onRefresh() {
      this.finished = false;
      this.loading = true;
      this.onLoad();
    },
    goInfo() {
      setCookie("clickList", this.clickList, 365);
      this.$router.push({ path: "/patientInfo" });
    },

    seach() {
      this.clientRecordList();
    },
    awaitDiagnose() {
      this.exchange = !this.exchange;
      if (this.exchange) {
        this.listpage.states = [];
        this.listpage.states = [1, 2, 3, 9, 10];
      } else {
        this.listpage.states = [];
        this.listpage.states = [4, 5, 6, 7, 8];
      }
      this.clientRecordList();
    },
    //列表详情
    async clientRecordList() {
      const { data: res } = await ClientRecordList(this.listpage).then();
      this.list = res.data.dataList;
      this.totalCount = res.data.totalCount;
      console.log(this.list);
    },
  },
  components: {
    vHeader,
  },
  watch: {
    clickList(newVal) {
      if (newVal.length > 0) {
        this.gopatientInfo = false;
      } else {
        this.gopatientInfo = true;
      }
    },
  },
};
</script>

<style lang="less" scoped>
.patient {
  height: 100vh-35;
  padding-bottom: 50px;
  .van-search {
    width: 60%;
    margin: 0 auto;
    background: @blue;
    height: 40px;
  }
  .Header-button {
    text-align: center;
    margin-top: 7px;
    .van-button {
      margin: 0 10px;
      width: 100px;
    }
  }

  main {
    height: 100%;
    overflow: scroll;
  }
  .patient-list {
    .clicknew {
      background-color: #ccc;
      border-left: 4px solid rgb(137, 223, 111);
    }
    li {
      height: 50px;
      margin-top: 5px;
      border-top: 1px solid rgb(182, 196, 102);
      border-bottom: 1px solid rgb(182, 196, 102);
      border-left: 4px solid rgb(111, 223, 198);
      border-radius: 5px;
      background-color: #fff;
      box-shadow: 0 1px 5px 0 rgba(85, 83, 83, 0.5);
      padding: 0 5px;
      p {
        font-style: 20px;
      }
      i {
        font-size: 12px;
        margin-right: 15px;
        font-style: normal;
      }
    }
  }
  footer {
    text-align: right;
    .footerBt {
      background-color: @blue;
      color: #fff;
      width: 100px;
    }
  }
}
</style>