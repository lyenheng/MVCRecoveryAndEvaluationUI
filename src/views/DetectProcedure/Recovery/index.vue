<template>
  <div class="recovery">
    <Header>
      <h3>架构恢复</h3>
    </Header>
    <div>
      <Card>
        <el-tabs type="border-card">
          <el-tab-pane>
            <span slot="label"><i class="el-icon-date"></i> 项目信息</span>
            <project-info> </project-info>
          </el-tab-pane>
          <el-tab-pane>
            <span slot="label"><i class="el-icon-date"></i> 架构信息</span>
          </el-tab-pane>
        </el-tabs>
      </Card>
    </div>
  </div>
</template>

<script>
import Card from "../../../components/Card.vue";
import Header from "../../../components/Header.vue";
import ProjectInfo from "./ProjectInfo.vue";
import { getGraphByDetectId } from "../../../network/moduleDependencyGraph";
export default {
  name: "Recovery",
  components: { Card, Header, ProjectInfo },
  data() {
    return {
      id: "",
    };
  },
  mounted() {
    this.getModuleDependencyGraph();
  },

  methods: {
    getModuleDependencyGraph() {
      getGraphByDetectId(this.$route.params.id).then((res) => {
        console.log("res");
        console.log(res);
        console.log("res");
      });
    },
  },
};
</script>
