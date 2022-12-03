<template>
  <div class="databaseContent">
    <el-table
      :data="dataBaseDataList"
      style="width: 100%"
      :row-class-name="tableRowClassName"
      :max-height="200"
      size="mini"
    >
      <el-table-column
        prop="databaseType"
        width="63"
        label="数据库类型"
        show-overflow-tooltip
      >
      </el-table-column>
      <el-table-column
        prop="databaseName"
        width="50"
        label="数据库名"
        show-overflow-tooltip
      >
      </el-table-column>
      <el-table-column prop="url" label="url" show-overflow-tooltip width="50">
      </el-table-column>
      <el-table-column prop="port" label="端口" show-overflow-tooltip width="40">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  props: ["dataBaseDataList"],
  data() {
    return {};
  },
  methods: {
    tableRowClassName({ rowIndex }) {
      if (rowIndex === 1) {
        return "warning-row";
      } else if (rowIndex === 3) {
        return "success-row";
      }
      return "";
    },
  },
};
</script>

<style>
.el-table .warning-row {
  background: oldlace;
}

.el-table .success-row {
  background: #f0f9eb;
}
.databaseContent {
  width: 100%;
  overflow: hidden;
}
.databaseContent .el-table--mini .cell {
  transform: scale(0.7);
  padding-right: 0;
  padding-left: 0;
  line-height: 20px;
}
.databaseContent .el-table--mini thead .cell {
  text-overflow: unset;
  white-space: nowrap;
  padding-right: 0 !important;
  padding-left: 0 !important;
}
</style>
