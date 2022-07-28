<template>
  <div>
    欢迎来到 <span style="color:red;font-size: 20px">♥</span> 恋爱训练营
    <el-dropdown class="avatar">
      <span class="el-dropdown-link">
          <el-avatar :src="require('@/assets/logo.png')"></el-avatar>
        <i></i>
      </span>
      <el-dropdown-menu slot="dropdown">
        <router-link to="/userInfo">
          <el-dropdown-item>个人中心</el-dropdown-item>
        </router-link>
        <el-dropdown-item @click.native="logout">退出</el-dropdown-item>

      </el-dropdown-menu>
    </el-dropdown>

  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Header",

  methods:{
    logout(){
      this.$message.info("退出成功")
    }
  }
}
</script>

<style scoped>

.el-dropdown-link {
  cursor: pointer;
  color: #f8f9fc;
}

.el-icon-arrow-down {
  font-size: 12px;
}


.avatar {
  float: right;
  padding-right: 30px;
  padding-top: 10px;

}

.router-link {
  text-decoration: none
}

</style>