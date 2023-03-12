<template>
  <div class="evaluation">
    <Header>
      <h3>架构恢复</h3>
    </Header>
    <div class="service-selector mb-20">
      <el-select
        v-model="currentMicroServiceModuleId"
        size="mini"
        placeholder="请选择子服务"
      >
        <el-option
          v-for="item in microServiceModuleData"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        >
        </el-option>
      </el-select>
    </div>
    <Card>
      <div style="min-height: 500px">
        <el-tabs tab-position="right" style="height: 200px">
          <el-tab-pane label="功能性评估">
            <functionality-evaluation
              :functionalityResult="functionalityResult"
            />
          </el-tab-pane>
          <el-tab-pane label="可维护性评估">
            <maintain-ablity-evaluation
              :maintainabilityResult="maintainabilityResult"
            />
          </el-tab-pane>
          <el-tab-pane label="效率评估">
            <efficiency-evaluation :efficiencyResult="efficiencyResult" />
          </el-tab-pane>
        </el-tabs>
      </div>
    </Card>
  </div>
</template>

<script>
import { getMicroServiceModule } from "../../../network/microServiceModule";
import { getMicroServiceEvaluation } from "../../../network/microServiceModule";
import Card from "../../../components/Card.vue";
import Header from "../../../components/Header.vue";
import MaintainAblityEvaluation from "./MaintainAblityEvaluation.vue";
import FunctionalityEvaluation from "./FunctionalityEvaluation.vue";
import EfficiencyEvaluation from "./EfficiencyEvaluation.vue";

export default {
  data() {
    return {
      microServiceModuleData: [],
      currentMicroServiceModuleId: "",
      maintainabilityResult: {},
      functionalityResult: {},
      efficiencyResult: {},
    };
  },

  components: {
    Header,
    Card,
    MaintainAblityEvaluation,
    FunctionalityEvaluation,
    EfficiencyEvaluation,
  },

  mounted() {
    this.getMicroServiceModule();
  },

  watch: {
    currentMicroServiceModuleId(newValue) {
      this.getMicroServiceEvaluationResult(newValue);
    },
  },

  methods: {
    // 获取项目子服务划分信息
    getMicroServiceModule() {
      getMicroServiceModule(this.$route.params.id).then((res) => {
        this.microServiceModuleData = res.map((item) => {
          return {
            ...item,
            value: item.id,
            label: item.moduleName,
          };
        });
      });
    },

    getMicroServiceEvaluationResult() {
      getMicroServiceEvaluation(this.$route.params.id).then((res) => {
        this.maintainabilityResult = res?.maintainabilityResult || {};
        this.functionalityResult = res?.functionalityResult || {};
        this.efficiencyResult = res?.efficiencyResult || {};
      });
    },
  },
};
</script>

<style scoped>
.service-content > div {
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  margin-bottom: 20px;
}
.content-part1 {
  height: 200px;
}
.content-part1 > div {
  overflow: hidden;
}
.content-part1 > div:nth-child(1) {
  flex: 2 0 0;
}
.content-part1 > div:nth-child(2) {
  flex: 3 0 0;
}
.content-part1 > div:nth-child(3) {
  flex: 2 0 0;
}
.content-part2 > div {
  overflow: hidden;
}
.content-part2 {
  height: 200px;
}
.content-part2 > div {
  flex: 1 0 0;
}
.content-part3 {
  height: 200px;
}
.content-part3 > div {
  overflow: hidden;
}
.content-part3 > div {
  flex: 1 0 0;
}
.content-part4 {
  height: 600px;
}
.content-part4 > div:nth-child(1) {
  flex: 2 0 0;
}
.content-part4 > div:nth-child(2) {
  flex: 3 0 0;
}
</style>
