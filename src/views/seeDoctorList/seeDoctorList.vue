<template>
  <div class="height: 100vh-20;">
    <v-header>
      <div slot="body" class="header-body">
        <p @click="cutleft">
          <van-icon name="arrow-left" />
        </p>
        <p>
          <span>姓名:{{ clickList[clickListtag].name }}</span>
          <span>性别:{{ sex[clickList[clickListtag].sex] }}</span>
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
              v-for="item in list"
              :key="item.emaKeyId"
              @click="gopatientInfo(item)"
            >
              <p>{{ item.examTypeName }}({{ item.number }})</p>
              <span>
                <i>时间:{{ item.gmtCreate }}</i>
                <i>就诊医生:{{ item.doctorName }}</i>
                <i>机构:{{ item.equipmentName }}</i>
              </span>
            </li>
          </ul>
        </van-list>
      </van-pull-refresh>
    </main>
  </div>
</template>

<script>
import { Toast } from "vant";
import vHeader from "../../components/common/vHeader/vHeader";
import { setCookie, getCookie } from "../../utils/vCookie"

import { SearchExamRecord } from "@/http/api/patientList";
export default {
  data() {
    return {
      sex: {
        F: "女",
        M: "男",
      },
      listpage: {
        cusKeyId: "",
        examType: 0,
        pageSize: 10,
        pageIndex: 1,
      },
      totalCount: 0,
      loading: false,
      finished: false,
      refreshing: false,
      list: [],
      clickList: [],
      clickListtag: 0,
    };
  },
  created() {
    this.clickList =  (getCookie("clickList"));
    this.listpage.cusKeyId = this.clickList[this.clickListtag].cusKeyId;
    this.searchExamRecord();
  },
  mounted() {
    this.searchExamRecord();
  },
  methods: {
    gopatientInfo(item) {
      this.$router.push({
        name: "SeeDoctorInfo",
        params: {
          item: item,
          clickList: this.clickList[this.clickListtag],
        },
      });
    },
    cutleft() {
      if (this.clickListtag == 0) {
        return Toast("第一个");
      }
      this.clickListtag--;
      this.listpage.cusKeyId = this.clickList[this.clickListtag].cusKeyId;
      this.searchExamRecord();
    },
    cutright() {
      if (this.clickListtag == this.clickList.length - 1) {
        return Toast("最后一个");
      }
      this.clickListtag++;
      this.listpage.cusKeyId = this.clickList[this.clickListtag].cusKeyId;
      this.searchExamRecord();
    },
    onLoad() {
      this.listpage.pageSize += 1;
      setTimeout(() => {
        if (this.refreshing) {
          this.refreshing = false;
        }

        this.searchExamRecord();
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
    //列表详情
    async searchExamRecord() {
      const { data: res } = await SearchExamRecord(this.listpage).then();
      this.list = res.data.dataList.filter(res => res.examTypeName);
      console.log(this.list)
      this.totalCount = res.data.totalCount;
    },
  },
  components: {
    vHeader,
  },
  watch: {},
};
</script>

<style lang="less" scoped>
main {
  height: 400px;
  overflow: scroll;
}
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
.patient-list {
  li {
    height: 50px;
    margin-top: 5px;
    border-left: 4px solid rgb(111, 223, 198);
    border-radius: 5px;
    background-color: #fff;
    box-shadow: 0 1px 5px 0 rgba(85, 83, 83, 0.5);
    padding-left: 5px;
    &:hover {
      background-color: #ccc;
      border-left: 4px solid rgb(137, 223, 111);
    }
    > p {
      color: #555;
    }
    span {
      white-space: nowrap;
    }
    i {
      font-size: 9px;
      margin-right: 8px;
      font-style: normal;
      color: #555;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
}
</style>