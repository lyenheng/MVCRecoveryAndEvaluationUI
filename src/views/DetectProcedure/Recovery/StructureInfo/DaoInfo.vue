<template>
  <div class="dao-info">
    <el-table
      :data="daoInfoList"
      style="width: 100%"
      :row-class-name="tableRowClassName"
      :max-height="160"
      size="mini"
    >
      <el-table-column
        prop="name"
        label="类名"
        width="60"
        show-overflow-tooltip
      >
      </el-table-column>
      <el-table-column
        prop="fullyQualifiedName"
        label="全限定类名"
        show-overflow-tooltip
      >
      </el-table-column>
      <el-table-column prop="moduleName" label="所属模块" show-overflow-tooltip>
      </el-table-column>
      <el-table-column prop="annotations" label="类注解" show-overflow-tooltip>
      </el-table-column>
      <el-table-column
        prop="methodNum"
        label="所含方法数"
        width="60"
        show-overflow-tooltip
      >
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  props: ["daoInfoList"],

  methods: {
    tableRowClassName({ rowIndex }) {
      if (rowIndex % 4 === 0) {
        return "warning-row";
      } else if (rowIndex % 4 === 2) {
        return "success-row";
      } else {
        return "";
      }
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

.dao-info {
  width: 100%;
  overflow: hidden;
}
.dao-info .el-table--mini .cell {
  transform: scale(0.8);
  padding-right: 0;
  padding-left: 0;
  line-height: 20px;
}
.dao-info .el-table--mini thead .cell {
  text-overflow: unset;
  white-space: nowrap;
  padding-right: 0 !important;
  padding-left: 0 !important;
}
</style>
