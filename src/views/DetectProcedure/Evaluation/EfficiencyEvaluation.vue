<template>
  <div class="efficiency-evaluation">
    <div class="title">效率评估</div>
    <div style="margin-bottom: 60px">
      <el-descriptions :column="1" border>
        <el-descriptions-item label="服务名">{{
          microServiceModuleName
        }}</el-descriptions-item>
        <el-descriptions-item label="业务层平均圈复杂度">{{
          efficiencyResult && efficiencyResult.cyclomaticComplexityAverage
        }}</el-descriptions-item>
        <el-descriptions-item label="圈复杂度在7~10之间的方法">{{
          middleCyclomaticComplexity
        }}</el-descriptions-item>
        <el-descriptions-item label="圈复杂度在10以上的方法">{{
          highCyclomaticComplexity
        }}</el-descriptions-item>
      </el-descriptions>
    </div>
    <div>
      <div style="display: flex; justify-content: space-around">
        <div>
          <el-statistic title="复杂度7~10">
            <template slot="prefix">
              <i class="el-icon-s-flag" style="color: red"></i>
            </template>
            <template slot="formatter">
              {{
                (efficiencyResult &&
                  efficiencyResult.middleCyclomaticComplexity &&
                  efficiencyResult.middleCyclomaticComplexity.length) ||
                0
              }}
            </template>
          </el-statistic>
        </div>
        <div>
          <el-statistic title="复杂度10以上">
            <template slot="prefix">
              <i class="el-icon-s-flag" style="color: red"></i>
            </template>
            <template slot="formatter">
              {{
                (efficiencyResult &&
                  efficiencyResult.middleCyclomaticComplexity &&
                  efficiencyResult.middleCyclomaticComplexity.length) ||
                0
              }}
            </template>
          </el-statistic>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["microServiceModuleName", "efficiencyResult"],
  computed: {
    middleCyclomaticComplexity() {
      if (undefined === this.efficiencyResult?.middleCyclomaticComplexity) {
        return "";
      }
      return this.efficiencyResult?.middleCyclomaticComplexity.join("、");
    },
    highCyclomaticComplexity() {
      if (undefined === this.efficiencyResult?.highCyclomaticComplexity) {
        return "";
      }
      return this.efficiencyResult?.highCyclomaticComplexity.join("、");
    },
  },
};
</script>

<style scoped>
.efficiency-evaluation > .title {
  font-size: 16px;
  font-weight: 700;
  margin-bottom: 20px;
}
.efficiency-evaluation /deep/ .el-descriptions-item__label {
  width: 200px;
}
.efficiency-evaluation /deep/ .el-statistic .head {
  font-size: 14px;
  font-weight: 700;
}
</style>
