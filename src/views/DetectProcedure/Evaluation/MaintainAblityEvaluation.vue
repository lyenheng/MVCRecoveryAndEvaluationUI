<template>
  <div class="maintain-evaluation">
    <div class="title">可维护性评估</div>
    <div style="margin-bottom: 60px">
      <el-table :data="maintainabilityTableData" style="width: 100%">
        <el-table-column
          prop="microServiceName"
          label="服务名"
          width="150"
          align="center"
        >
        </el-table-column>
        <el-table-column label="模块化评估" align="center">
          <el-table-column
            prop="controllerNum"
            label="Controller 类"
            align="center"
          >
          </el-table-column>
          <el-table-column prop="serviceNum" label="Service 类" align="center">
          </el-table-column>
          <el-table-column prop="daoNum" label="Dao 类" align="center">
          </el-table-column>
          <el-table-column
            prop="totalPercent"
            label="层内类占比"
            align="center"
          >
          </el-table-column>
        </el-table-column>
        <el-table-column label="易分析性评估" align="center">
          <el-table-column
            prop="controllerLayerComplexity"
            label="Controller 层复杂度"
            width="150"
            align="center"
          >
          </el-table-column>
          <el-table-column
            prop="crossLayerCallVisibility"
            label="跨层调用可见性"
            align="center"
          >
          </el-table-column>
          <el-table-column
            prop="selfCallProportion"
            label="自调用占比"
            align="center"
          >
          </el-table-column>
        </el-table-column>
      </el-table>
    </div>
    <div>
      <div
        style="
          line-height: 23px;
          color: #909399;
          font-weight: bold;
          font-size: 14px;
          margin-bottom: 10px;
        "
      >
        易修改性评估（{{ modifiabilityTableData.length }}个）
      </div>
      <el-table
        :data="modifiabilityTableData"
        style="width: 100%"
        height="250"
        border
      >
        <el-table-column prop="className" label="类名" align="center">
        </el-table-column>
        <el-table-column
          prop="fullyQualifiedName"
          label="全限定类名"
          width="350"
        >
        </el-table-column>
        <el-table-column label="所属层次" align="center">
          <template slot-scope="scope">
            <el-tag
              :type="
                scope.row.classType === 'Controller'
                  ? 'primary'
                  : scope.row.classType === 'Service'
                  ? 'danger'
                  : 'success'
              "
              disable-transitions
              >{{ scope.row.classType }}</el-tag
            >
          </template>
        </el-table-column>
        <el-table-column
          prop="modifiability"
          label="易修改性度量"
          align="center"
        >
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
export default {
  props: ["microServiceModuleName", "maintainabilityResult"],
  computed: {
    maintainabilityTableData() {
      if (
        !(
          this.maintainabilityResult &&
          this.maintainabilityResult.moduleEvaluateResult
        )
      )
        return [];
      const { controllerNum, serviceNum, daoNum, totalPercent } =
        this.maintainabilityResult.moduleEvaluateResult;
      const {
        controllerLayerComplexity,
        crossLayerCallVisibility,
        selfCallProportion,
      } = this.maintainabilityResult.analyzabilityResult;

      return [
        {
          microServiceName: this.microServiceModuleName,
          controllerNum,
          serviceNum,
          daoNum,
          totalPercent,
          controllerLayerComplexity,
          crossLayerCallVisibility,
          selfCallProportion,
        },
      ];
    },
    modifiabilityTableData() {
      if (
        !(
          this.maintainabilityResult &&
          this.maintainabilityResult.modifiabilityResults
        )
      )
        return [];
      return this.maintainabilityResult.modifiabilityResults;
    },
  },
};
</script>

<style scoped>
.maintain-evaluation > .title {
  font-size: 16px;
  font-weight: 700;
  margin-bottom: 20px;
}
</style>
