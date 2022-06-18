<template>
  <div class="create-detect-procedure">
    <div>创建检测目标</div>

    <el-form ref="form" :model="formData" label-width="80px">
      <!-- <el-form-item label="检测名称">
        <el-input v-model="formData.name"></el-input>
      </el-form-item>
      <el-form-item label="检测描述">
        <el-input v-model="formData.description"></el-input>
      </el-form-item> -->
      <el-form-item label="文件上传">
        <form id="uploadForm" enctype="multipart/form-data">
          <input
            id="uploadFiles"
            name="files"
            type="file"
            webkitdirectory
            @change="uploadFiles"
          />
        </form>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { startDetect } from "../network/detectProcedure";
export default {
  name: "CreateDetectProcedure",

  data() {
    return {
      // formData: {
      //   name: "test",
      //   description: "这是测试",
      //   files: "",
      // },
    };
  },

  methods: {
    uploadFiles() {
      const formData = new FormData(document.getElementById("uploadForm"));
      formData.append("name", "test");
      formData.append("description", "这是一条测试");
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
