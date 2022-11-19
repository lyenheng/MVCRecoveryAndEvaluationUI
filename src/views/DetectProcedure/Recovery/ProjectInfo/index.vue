<template>
  <div>
    <el-collapse>
      <el-collapse-item title="项目模块依赖图" name="moduleDependencyGraph">
        <div>
          <ModuleDenpencyGraph
            :moduleDependencyGraph="moduleDependencyGraphData"
          />
        </div>
      </el-collapse-item>
      <el-collapse-item title="项目子服务划分" name="microService">
        <div>
          <MicroServiceModuleInfo
            :microServiceModuleInfo="microServiceModuleData"
          />
        </div>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<script>
import ModuleDenpencyGraph from "./ModuleDenpencyGraph.vue";
import MicroServiceModuleInfo from "./MicroServiceModuleInfo.vue";
import { getGraphByDetectId } from "../../../../network/moduleDependencyGraph";
import { getMicroServiceModule } from "../../../../network/microServiceModule";
export default {
  name: "ProjectInfo",
  components: { ModuleDenpencyGraph, MicroServiceModuleInfo },
  data() {
    return {
      id: "",
      moduleDependencyGraphData: {},
      microServiceModuleData: {},
    };
  },
  mounted() {
    this.getModuleDependencyGraph();
    this.getMicroServiceModule();
  },

  methods: {
    // 获取项目模块依赖图信息
    getModuleDependencyGraph() {
      getGraphByDetectId(this.$route.params.id).then((res) => {
        this.moduleDependencyGraphData = res.moduleDependencyGraph;
      });
    },

    // 获取项目子服务划分信息
    getMicroServiceModule() {
      getMicroServiceModule(this.$route.params.id).then((res) => {
        this.microServiceModuleData = res;
      });
    },
  },
};
</script>

<style></style>
