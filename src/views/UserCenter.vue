<template>
  <div style="text-align: center;">
    <h2>你好！{{ userInfo.username }} 同学</h2>

    <el-form :model="passForm" status-icon :rules="rules" ref="passForm" label-width="100px">
      <el-form-item label="旧密码" prop="currentPass">
        <el-input type="password" v-model="passForm.currentPass" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="新密码" prop="password">
        <el-input type="password" v-model="passForm.password" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="确认密码" prop="checkPass">
        <el-input type="password" v-model="passForm.checkPass" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('passForm')">提交</el-button>
        <el-button @click="resetForm('passForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "UserCenter",
  data() {

    return {
      // 新旧密码
      passForm: {
        password: '',
        checkPass: '',
        currentPass: ''
      },
      userInfo:{

      },
      // 校验规则
      rules: {
        password: [
          {required: true, message: '请输入新密码', trigger: 'blur'},
          {min: 6, max: 12, message: '长度在 6 到 12 个字符', trigger: 'blur'}
        ],
        checkPass: [
          {required: true, validator: this.password == this.checkPass, trigger: 'blur'}
        ],
        currentPass: [
          {required: true, message: '请输入当前密码', trigger: 'blur'},
        ]
      }

    }
  },
  created() {
    this.getUserInfo();
  },
  methods: {
    getUserInfo() {
      //todo 后台查询登录用户的信息


    }

  }
}
</script>

<style scoped>
.el-form {
  width: 420px;
  margin: 50px auto;
}
</style>