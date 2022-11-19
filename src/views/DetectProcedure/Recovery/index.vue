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
            <project-info />
          </el-tab-pane>
          <el-tab-pane>
            <span slot="label"><i class="el-icon-date"></i> 架构信息</span>
            <structureInfo />
          </el-tab-pane>
        </el-tabs>
      </Card>
    </div>
  </div>
</template>

<script>
import Card from "../../../components/Card.vue";
import Header from "../../../components/Header.vue";
import ProjectInfo from "./ProjectInfo/index.vue";
import StructureInfo from "./StructureInfo/index.vue";
export default {
  name: "Recovery",
  components: { Card, Header, ProjectInfo, StructureInfo },
  data() {
    return {
      id: "",
    };
  },

  methods: {},
};
</script>
