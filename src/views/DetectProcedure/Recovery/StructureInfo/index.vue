<template>
  <div>
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
    <div class="service-content">
      <div class="content-part1">
        <div class="part1-section1 mr-20">
          <card>
            <template #title>mvc 各层次类分布</template>
            <ClassDistribution :classInfo="classDescriptionList" />
          </card>
        </div>
        <div class="mr-20">
          <card>
            <template #title>项目模块依赖图</template>
          </card>
        </div>
        <div>
          <card>
            <template #title>数据库信息</template>
          </card>
        </div>
      </div>
      <div class="content-part2">
        <div class="mr-20">
          <card>
            <template #title>controller层类信息</template>
          </card>
        </div>
        <div class="mr-20">
          <card>
            <template #title>service层类信息</template>
          </card>
        </div>
        <div class="mr-20">
          <card>
            <template #title>dao层类信息</template>
          </card>
        </div>
        <div>
          <card>
            <template #title>其他类信息</template>
          </card>
        </div>
      </div>
      <div class="content-part3">
        <div class="mr-20">
          <card>
            <template #title>mvc 各层次类分布</template>
          </card>
        </div>
        <div>
          <card>
            <template #title>mvc 各层次类分布</template>
          </card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getMicroServiceModule } from "../../../../network/microServiceModule";
import { getAllClassInfoByEntryModule } from "../../../../network/classInfo";
import ClassDistribution from "./ClassDistribution.vue";
import Card from "../../../../components/Card.vue";
export default {
  data() {
    return {
      microServiceModuleData: [],
      currentMicroServiceModuleId: "",
      classDescriptionList: [],
    };
  },

  components: {
    Card,
    ClassDistribution,
  },

  mounted() {
    this.getMicroServiceModule();
  },

  watch: {
    currentMicroServiceModuleId(newValue) {
      this.getClassInfo(newValue);
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

    // 根据入口模块id获取该子服务的所有类信息
    getClassInfo(entryModuleId) {
      getAllClassInfoByEntryModule(entryModuleId).then((res) => {
        this.classDescriptionList = res;
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
.content-part1 > div:nth-child(1) {
  flex: 2 0 0;
}
.content-part1 > div:nth-child(2) {
  flex: 3 0 0;
}
.content-part1 > div:nth-child(3) {
  flex: 2 0 0;
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
.content-part3 > div:nth-child(1) {
  flex: 2 0 0;
}
.content-part3 > div:nth-child(2) {
  flex: 3 0 0;
}
</style>
