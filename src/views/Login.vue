<template>
  <div class="login">
    <el-row :gutter="20" class="row-bg" type="flex" justify="around" align="middle">
      <el-col :span="10">
        <h2>欢迎来到Vue - ElementUI 学习系统</h2>
        <el-image :src="require('@/assets/yy.jpg')" style="height: 180px; width: 180px;"></el-image>

        <p>窦媛媛</p>
        <p>媛媛爱你哦！</p>

      </el-col>

      <el-col :span="3">
        <el-divider direction="vertical"></el-divider>

      </el-col>

      <el-col :span="8" :offset="1">
        <el-form label-width="80px">
          <el-form-item label="用户名" prop="username" style="width: 380px;">
            <el-input placeholder="请输入用户名"></el-input>
          </el-form-item>

          <el-form-item label="密码" style="width: 380px;">
            <el-input placeholder="请输入密码" show-password></el-input>
          </el-form-item>

          <el-form-item label="验证码" style="width: 380px;">
            <el-input style="width: 172px; float: left" maxlength="5"></el-input>
            <el-image :src="captchaImg" @click="getCaptcha" class="captchaImg"></el-image>
          </el-form-item>


          <el-form-item>
            <el-button type="primary">立即登录</el-button>
            <el-button>重置</el-button>
          </el-form-item>
        </el-form>

      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Login",
  data() {
    return {
      captchaImg: ""
    }

  },
  methods: {

    getCaptcha() {
      this.$axios.get('/captcha').then(res => {

        console.log("/captcha")
        console.log(res)


        this.captchaImg = res.data.data.captchaImg

      })
    }

  },

  created() {
    this.getCaptcha();
  }

}


</script>

<style scoped>
.login {
  /*background: url("~@/assets/bg.jpg") no-repeat;*/
  /*height:100%;*/
  /*width:100%;*/
  /*overflow: hidden;*/
  /*background-size:cover;*/

  background: url("~@/assets/bg.jpg");
  background-size: 100%;
  height: 100%;
  overflow: hidden;

}

.row-bg {
  align-content: center;
}

.el-row {

  /*background-color: #fafafa;*/
  height: 100%;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
}

.el-divider {
  height: 200px;
}

.captchaImg {
  float: left;
  margin-left: 8px;
  border-radius: 4px;
}

</style>