<template>
  <div class="create-detect-procedure">
    <div>创建检测目标</div>

    <div class="detect-procedure-info">
      <el-form ref="form" :model="detectProcedure" label-width="80px">
        <el-form-item label="检测名称">
          <el-input v-model="detectProcedure.name"></el-input>
        </el-form-item>
        <el-form-item label="检测描述">
          <el-input v-model="detectProcedure.description"></el-input>
        </el-form-item>
        <el-form-item label="文件上传">
          <form id="uploadForm" enctype="multipart/form-data">
            <input id="uploadFiles" name="files" type="file" webkitdirectory />
          </form>
        </el-form-item>
      </el-form>
      <el-button @click="startDetect">开始检测</el-button>
    </div>
  </div>
</template>

<script>
import { startDetect } from "../network/detectProcedure";
export default {
  name: "CreateDetectProcedure",

  data() {
    return {
      detectProcedure: {
        name: "",
        description: "",
      },
    };
  },

  methods: {
    startDetect() {
      const formData = new FormData(document.getElementById("uploadForm"));
      if (formData.get("files").size === 0) {
        this.$message({
          message: "请先上传文件",
          type: "warning",
        });
        return;
      }

      if (this.detectProcedure.name === "") {
        this.$message({
          message: "请输入检测名称",
          type: "warning",
        });
        return;
      }

      formData.append("name", this.detectProcedure.name);
      formData.append("description", this.detectProcedure.description);
      startDetect(formData).then();
    },
  },
};
</script>
<style scoped>
.create-detect-procedure {
  align-content: center;
}
</style>
