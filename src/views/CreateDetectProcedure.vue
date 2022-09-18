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
                    @change="handleUploadFormChange"
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
              <div>上传进度</div>
              <div class="upload-progress-content">
                <el-progress
                  type="circle"
                  :percentage="uploadProgress"
                ></el-progress>
              </div>
            </div>
          </Card>
        </div>
        <div class="file-detail">
          <Card>
            <div class="p-15">
              <div class="file-detail-tile">文件详情</div>
              <div class="file-detail-content">
                <el-table :data="fileInfo" style="width: 100%">
                  <el-table-column
                    prop="name"
                    label="项目名"
                    width="220"
                    align="center"
                    show-overflow-tooltip
                  ></el-table-column>
                  <el-table-column
                    prop="size"
                    label="项目大小"
                    align="center"
                  ></el-table-column>
                  <el-table-column
                    prop="number"
                    label="文件个数"
                    align="center"
                  ></el-table-column>
                  <el-table-column
                    prop="javaProportion"
                    label="Java代码占比"
                    align="center"
                  ></el-table-column>
                </el-table>
              </div>
            </div>
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
import { convertFileSize } from "../utils";
export default {
  name: "CreateDetectProcedure",
  data() {
    return {
      detectProcedure: {
        name: "",
        description: "",
      },
      uploadProgress: 0,
      /**
       * 文件详情
       */
      fileInfo: [
        {
          name: "",
          number: 0,
          size: 0,
          javaProportion: "0%",
        },
      ],
    };
  },
  methods: {
    startDetect() {
      const formData = new FormData(document.getElementById("uploadForm"));
      console.log(formData.get("files"));
      console.log(formData.get("files"));
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
      console.log("formData");
      console.log(formData);
      formData.append("name", this.detectProcedure.name);
      formData.append("description", this.detectProcedure.description);
      startDetect(formData, (progressEvent) => {
        this.uploadProgress =
          (progressEvent.loaded / progressEvent.total) * 100;
      }).then();
      // this.$router.push("/listDetectProcedure");
    },

    /**
     * 处理文件信息
     * @param {} event
     */
    handleUploadFormChange(event) {
      if (event.target.files.length <= 0) {
        return;
      }
      let files = event.target.files;
      this.fileInfo[0].name = files[0].webkitRelativePath.split("/")[0];
      this.fileInfo[0].number = files.length;
      let totalSize = 0;
      let javaFileNum = 0;

      for (let i = 0; i < files.length; ++i) {
        totalSize = totalSize + files[i].size;
        if (files[i].name.endsWith(".java")) {
          javaFileNum++;
        }
      }

      this.fileInfo[0].javaProportion =
        ((javaFileNum / this.fileInfo[0].number) * 100).toFixed(2) + "%";

      this.fileInfo[0].size = convertFileSize(totalSize);
    },
  },
  components: { Card, Header },
};
</script>
<style scoped>
.file-info {
  display: flex;
  justify-content: space-between;
}
.file-info > .upload-progress {
  flex: 4 0 0;
}
.file-info > .file-detail {
  flex: 6 0 0;
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
.upload-progress-content {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
