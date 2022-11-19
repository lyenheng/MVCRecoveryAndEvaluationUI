<template>
  <div>
    <div class="head"></div>
    <div>
      <el-select
        v-model="currentMicroServiceModuleId"
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
    <div>
      <el-collapse>
        <el-collapse-item title="控制器层" name="moduleDependencyGraph">
          <div></div>
        </el-collapse-item>
        <el-collapse-item title="业务层" name="microService">
          <div></div>
        </el-collapse-item>
      </el-collapse>
    </div>
  </div>
</template>

<script>
import { getMicroServiceModule } from "../../../../network/microServiceModule";
export default {
  data() {
    return {
      microServiceModuleData: [],
      currentMicroServiceModuleId: "",
    };
  },

  mounted() {
    this.getMicroServiceModule();
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
  },
};
</script>

<style></style>
