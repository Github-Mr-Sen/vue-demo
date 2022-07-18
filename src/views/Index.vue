<template>
  <el-container>
    <el-aside width="200px">
      <SideMenu></SideMenu>
    </el-aside>
    <el-container>
      <el-header>
        <Header></Header>
      </el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import SideMenu from "@/components/SideMenu";
import Header from "@/components/Header";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Index",
  components: {SideMenu, Header},
  comments: {
    SideMenu,
    Header

  },
  data() {

  }

}
</script>

<style scoped>
.el-container {
  height: 100%;
  overflow: hidden;
}

.el-header {
  background-color: #17b3a3;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #D3DCE6;
  color: #333;
  line-height: 100%;
  height: 100%;
}

.el-main {
  background-color: #E9EEF3;
  color: #333;
  text-align: center;
  line-height: 160px;
}

.el-menu-vertical-demo {
  height: 100%;
}


</style>