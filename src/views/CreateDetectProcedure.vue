<template>
  <div class="create-detect-procedure">
    <Header>
      <h3>新建检测</h3>
    </Header>

    <div>
      <div class="mb-20">
        <Card>
          <div class="detect-procedure-info p-15">
            <el-form ref="form" :model="detectProcedure" label-width="80px">
              <el-form-item label="检测名称">
                <el-input v-model="detectProcedure.name"></el-input>
              </el-form-item>
              <el-form-item label="检测描述">
                <el-input v-model="detectProcedure.description"></el-input>
              </el-form-item>
              <el-form-item label="文件上传">
                <form id="uploadForm" enctype="multipart/form-data">
                  <input
                    id="uploadFiles"
                    name="files"
                    type="file"
                    webkitdirectory
                  />
                </form>
              </el-form-item>
              <el-button @click="startDetect">开始检测</el-button>
            </el-form>
          </div>
        </Card>
      </div>
      <div class="file-info">
        <div class="upload-progress mr-20">
          <Card>
            <div class="p-15">
              <el-progress type="circle" :percentage="25"></el-progress>
            </div>
          </Card>
        </div>
        <div class="file-detail">
          <Card>
            <div class="p-15">文件详情</div>
          </Card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { startDetect } from "../network/detectProcedure";
import Card from "../components/Card.vue";
import Header from "../components/Header.vue";
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
      this.$router.push("/listDetectProcedure");
    },
  },
  components: { Card, Header },
};
</script>
<style scoped>
.create-detect-procedure {
  align-content: center;
}
.file-info {
  display: flex;
  justify-content: space-between;
}
.file-info > div {
  flex: 1 0 0;
}
.mr-20 {
  margin-right: 20px;
}
.mb-20 {
  margin-bottom: 20px;
}
.upload-progress {
  height: 200px;
}
.p-15 {
  padding: 15px;
}
</style>
