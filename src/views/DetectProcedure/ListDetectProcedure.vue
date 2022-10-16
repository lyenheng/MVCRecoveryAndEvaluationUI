<template>
  <div class="list-detect-procedure">
    <Header>
      <h3>检测任务</h3>
      <template #right>
        <div class="search">
          <el-input
            v-model="searchProcedureVO.keyword"
            placeholder="请输入内容"
            size="mini"
          ></el-input>
          <el-button
            slot="append"
            icon="el-icon-search"
            type="mini"
          ></el-button>
          <!-- <el-button
            type="primary"
            icon="el-icon-search"
            @click="listDetectData"
          ></el-button> -->
        </div>
      </template>
    </Header>

    <div class="detect-procedure-content">
      <Card>
        <div class="p-15">
          <el-table
            :data="detectListData"
            stripe
            style="width: 100%"
            max-height="350"
          >
            <el-table-column label="检测开始时间" width="140">
              <template slot-scope="scope">
                <span>{{
                  scope.row.beginTime | dateformat("YYYY-MM-DD HH:mm")
                }}</span>
              </template>
            </el-table-column>
            <el-table-column prop="name" label="检测名称" width="80">
            </el-table-column>
            <el-table-column prop="description" label="检测描述" width="180">
            </el-table-column>
            <el-table-column prop="fileName" label="检测文件">
            </el-table-column>
            <el-table-column prop="status" label="检测状态" width="80">
            </el-table-column>
            <el-table-column label="操作">
              <template slot-scope="scope">
                <el-button
                  type="text"
                  size="small"
                  @click="routeToRecovery(scope.row.id)"
                  >检测报告</el-button
                ><el-button type="text" size="small">评估报告</el-button>
              </template>
            </el-table-column>
          </el-table>
          <div class="data-pagination">
            <el-pagination
              @size-change="handleSizeChange"
              @current-change="handleCurrentChange"
              :current-page="searchProcedureVO.pageNo + 1"
              :page-sizes="[5, 10, 15, 20]"
              :page-size="searchProcedureVO.pageSize"
              layout="total, sizes, prev, pager, next, jumper"
              :total="totalElements"
            >
            </el-pagination>
          </div>
        </div>
      </Card>
    </div>
  </div>
</template>

<script>
import Header from "../../components/Header.vue";
import Card from "../../components/Card.vue";
import { listDetectProcedure } from "../../network/detectProcedure";

export default {
  name: "ListDetectProcedure",
  components: { Header, Card },
  data() {
    return {
      searchProcedureVO: {
        keyword: "",
        pageSize: 10,
        pageNo: 0,
      },
      detectListData: [
        {
          id: "",
          beginTime: "",
          name: "",
          description: "",
          fileName: "",
          status: "",
        },
      ],
      totalPages: 0,
      totalElements: 0,
    };
  },
  mounted() {
    this.listDetectData();
  },
  methods: {
    /**
     * 查询检测流程列表数据
     */
    listDetectData() {
      listDetectProcedure(this.searchProcedureVO).then((res) => {
        this.detectListData = res.data;
        this.totalElements = res.totalElements;
        this.handleStatus();
      });
    },
    /**
     * 每页数据变化重新查询
     * @param {每页数据} val
     */
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
      this.searchProcedureVO.pageSize = val;
      this.searchProcedureVO.pageNo = 0;
      this.listDetectData();
    },
    /**
     * 页码变化重新查询
     * @param {页码} val
     */
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
      this.searchProcedureVO.pageNo = val - 1;
      this.listDetectData();
    },
    /**
     * 如果检测状态是检测中，设置定时器
     * 轮询检测状态
     */
    handleStatus() {
      let isDetecting =
        this.detectListData.filter((data) => {
          return data.status === "检测中";
        }).length > 0;
      if (isDetecting) {
        let tm = setInterval(() => {
          if (!isDetecting) {
            clearInterval(tm);
          }
          listDetectProcedure(this.searchProcedureVO).then((res) => {
            this.detectListData = res.data;
            this.totalElements = res.totalElements;
            isDetecting =
              res.data.filter((data) => {
                return data.status === "检测中";
              }).length > 0;
          });
        }, 1000);
      }
    },

    /**
     * 路由跳转到架构恢复结果页面
     */
    routeToRecovery(id) {
      this.$router.push({
        path: `detectProcedure/recovery/${id}`,
      });
    },
  },
};
</script>
<style scoped>
.search {
  display: flex;
}
.data-pagination {
  margin-top: 10px;
}
</style>
