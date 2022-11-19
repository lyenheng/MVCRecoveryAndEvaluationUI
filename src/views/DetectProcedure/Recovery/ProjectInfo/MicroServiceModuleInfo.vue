<template>
  <el-table
    :data="microServiceModuleData"
    style="width: 100%"
    :row-class-name="tableRowClassName"
  >
    <el-table-column prop="moduleName" label="服务名" width="200">
    </el-table-column>
    <el-table-column prop="groupId" label="groupId" width="200">
    </el-table-column>
    <el-table-column prop="artifactId" label="artifactId" width="200">
    </el-table-column>
    <el-table-column prop="moduleFilePath" label="路径"> </el-table-column>
  </el-table>
</template>

<script>
export default {
  name: "MicroServiceModule",
  props: ["microServiceModuleInfo"],
  data() {
    return {
      microServiceModuleData: [],
    };
  },

  watch: {
    microServiceModuleInfo(newValue) {
      this.microServiceModuleData = newValue.map((item) => {
        return {
          ...item,
          moduleFilePath: item.moduleFilePath.replace(
            "D:\\seu\\code\\temp",
            ""
          ),
        };
      });
    },
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
</style>
