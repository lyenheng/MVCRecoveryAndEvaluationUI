<template>
  <div class="service-info">
    <el-table
      :data="serviceInfoList"
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
  props: ["serviceInfoList"],

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

.service-info {
  overflow: hidden;
}
.service-info .el-table--mini .cell {
  transform: scale(0.8);
  padding-right: 0;
  padding-left: 0;
  line-height: 20px;
}
.service-info .el-table--mini thead .cell {
  text-overflow: unset;
  white-space: nowrap;
  padding-right: 0 !important;
  padding-left: 0 !important;
}
</style>
