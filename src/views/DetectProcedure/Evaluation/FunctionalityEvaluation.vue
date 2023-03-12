<template>
  <div class="function-evaluation">
    <div class="title">功能性评估</div>
    <div style="margin-bottom: 60px">
      <el-descriptions :column="1" border>
        <el-descriptions-item label="服务名">{{
          microServiceModuleName
        }}</el-descriptions-item>
        <el-descriptions-item label="是否存在环依赖">{{
          hasDependencyCircle
        }}</el-descriptions-item>
        <el-descriptions-item label="请求类型错误类">{{
          requestTypeErrorClass
        }}</el-descriptions-item>
        <el-descriptions-item label="请求注解缺失类">{{
          requestParamAnnotationLossClass
        }}</el-descriptions-item>
        <el-descriptions-item label="请求注解误用类">{{
          requestParamAnnotationErrorClass
        }}</el-descriptions-item>
      </el-descriptions>
    </div>
    <div>
      <div style="display: flex; justify-content: space-around">
        <div>
          <el-statistic title="类型错误类">
            <template slot="prefix">
              <i class="el-icon-s-flag" style="color: red"></i>
            </template>
            <template slot="formatter">
              {{
                (functionalityResult &&
                  functionalityResult.requestTypeErrorClass &&
                  functionalityResult.requestTypeErrorClass.length) ||
                0
              }}
            </template>
          </el-statistic>
        </div>
        <div>
          <el-statistic title="注解缺失类">
            <template slot="prefix">
              <i class="el-icon-s-flag" style="color: red"></i>
            </template>
            <template slot="formatter">
              {{
                (functionalityResult &&
                  functionalityResult.requestParamAnnotationLossClass &&
                  functionalityResult.requestParamAnnotationLossClass.length) ||
                0
              }}
            </template>
          </el-statistic>
        </div>
        <div>
          <el-statistic title="注解误用类">
            <template slot="prefix">
              <i class="el-icon-s-flag" style="color: red"></i>
            </template>
            <template slot="formatter">
              {{
                (functionalityResult &&
                  functionalityResult.requestParamAnnotationErrorClass &&
                  functionalityResult.requestParamAnnotationErrorClass
                    .length) ||
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
  props: ["microServiceModuleName", "functionalityResult"],
  computed: {
    hasDependencyCircle() {
      if (undefined === this.functionalityResult?.hasDependencyCircle) {
        return "";
      }
      return this.functionalityResult?.hasDependencyCircle ? "是" : "否";
    },
    requestTypeErrorClass() {
      if (undefined === this.functionalityResult?.requestTypeErrorClass) {
        return "";
      }
      return this.functionalityResult?.requestTypeErrorClass.join("、");
    },
    requestParamAnnotationErrorClass() {
      if (
        undefined === this.functionalityResult?.requestParamAnnotationErrorClass
      ) {
        return "";
      }
      return this.functionalityResult?.requestParamAnnotationErrorClass.join(
        "、"
      );
    },
    requestParamAnnotationLossClass() {
      if (
        undefined === this.functionalityResult?.requestParamAnnotationLossClass
      ) {
        return "";
      }
      return this.functionalityResult?.requestParamAnnotationLossClass.join(
        "、"
      );
    },
  },
};
</script>

<style scoped>
.function-evaluation > .title {
  font-size: 16px;
  font-weight: 700;
  margin-bottom: 20px;
}
.function-evaluation /deep/ .el-descriptions-item__label {
  width: 200px;
}
.function-evaluation /deep/ .el-statistic .head {
  font-weight: 700;
  font-size: 14px;
}
</style>
