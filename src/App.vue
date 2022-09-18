<template>
  <div id="app">
    <div class="container">
      <div class="menu">
        <Card>
          <div class="menu-title">
            <img src="./assets/logo.png" width="30px" />
            <span style="margin-left: 10px">MVC静态代码检测</span>
          </div>

          <div class="menu-content">
            <el-menu default-active="1" :router="true">
              <el-menu-item
                index="1"
                :route="{ path: '/createDetectProcedure' }"
              >
                <i class="el-icon-upload"></i>
                <span slot="title">新建检测</span>
              </el-menu-item>
              <el-menu-item index="2" :route="{ path: '/listDetectProcedure' }">
                <i class="el-icon-s-order"></i>
                <span slot="title">检测任务</span>
              </el-menu-item>
              <el-menu-item index="3">
                <i class="el-icon-s-data"></i>
                <span slot="title">数据分析</span>
              </el-menu-item>
            </el-menu>
          </div>
        </Card>
      </div>
      <div class="content">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
import Card from "@/components/Card.vue";

export default {
  components: {
    Card,
  },
};
</script>

<style>
* {
  padding: 0px;
  margin: 0px;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: #f6f6f6;
  height: 100vh;
  width: 100vw;
  padding: 10px;
  box-sizing: border-box;
}

.container {
  display: flex;
  flex-flow: row nowrap;
  height: 100%;
}
.menu {
  flex: 1 0 0;
}
.menu-title {
  width: 100%;
  box-sizing: border-box;
  padding: 30px 3px 15px 8px;
  color: rgb(6, 45, 60);
  font-size: 16px;
  font-weight: bolder;
  display: flex;
  align-items: center;
}
.menu-content .el-menu {
  border-right: none !important;
}
.content {
  padding: 30px 25px;
  overflow: auto;
  flex: 4 0 0;
}
.p-15 {
  padding: 15px;
}
</style>
