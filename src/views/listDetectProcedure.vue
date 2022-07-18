<template>
  <div class="list-detect-procedure">
    <Header>
      <div>
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item :to="{ path: '/listDetectProcedure' }"
            >检测任务</el-breadcrumb-item
          >
        </el-breadcrumb>
      </div>
      <div class="search">
        <el-input
          v-model="searchProcedureVO.keyword"
          placeholder="请输入内容"
        ></el-input>
        <el-button type="primary" icon="el-icon-search"></el-button>
      </div>
    </Header>

    <div class="content">
      <el-table :data="detectListData" stripe style="width: 100%">
        <el-table-column prop="beginTime" label="检测开始时间">
        </el-table-column>
        <el-table-column prop="name" label="检测名称" width="180">
        </el-table-column>
        <el-table-column prop="description" label="检测描述" width="180">
        </el-table-column>
        <el-table-column prop="fileName" label="检测文件"> </el-table-column>
        <el-table-column prop="status" label="检测状态"> </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
import Header from "../components/Header.vue";
import { listDetectProcedure } from "../network/detectProcedure";

export default {
  name: "ListDetectProcedure",
  components: { Header },
  data() {
    return {
      searchProcedureVO: {
        keyword: "",
        pageSize: 4,
        pageNo: 0,
      },
      detectListData: [],
      totalPages: 0,
      totalElements: 0,
    };
  },
  mounted() {
    this.listDetectData();
  },
  methods: {
    listDetectData() {
      listDetectProcedure(this.searchProcedureVO).then((res) => {
        this.detectListData = res.data;
      });
    },
  },
};
</script>
<style scoped></style>
