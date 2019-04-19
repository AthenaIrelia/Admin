<!--  -->
<template>
  <div class="bg">
    <div class="login-box">
      <h1>请登陆</h1>
      <div class="form">
        <p>用户名</p>
        <el-input type="text" v-model="admin" placeholder="请输入账号"></el-input>
        <p>密码</p>
        <el-input type="password" v-model="password" placeholder="请输入密码"></el-input>
        <el-checkbox v-model="checked">记住密码</el-checkbox>
        <el-button type="primary" @click="login">登陆</el-button>
      </div>
      <div class="nav-box">
        <span class="nav">注册</span>
        |
        <span class="nav">忘记密码</span>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  data() {
    return {
      admin: "",
      password: "",
      checked: true
    };
  },

  components: {},

  computed: {},

  // mounted: {},

  methods: {
    ...mapMutations(["setToken"]),
    login() {
      let _this = this;
      this.$http
        .post("http://ypay.surest.cn/api/user/login", {
          account: this.admin,
          password: this.password
        })
        .then(function(response) {
          console.log(response.data.code);
          if (response.data.code == 2000) {
            _this.$message.success("登录成功");
            _this.token = response.data.data;
            _this.setToken({ token: _this.token });
            _this.$router.push({ path: "/home" });

            var storage = window.localStorage;
            //alert(storage.getItem("token"));

            if (this.$store.state.token) {
              this.$router.push("/home");
              console.log(this.$store.state.token.token);
            } else {
              this.$router.replace("/login");
            }
          }
        })
        .catch(function(error) {
          // console.log(error);
        });
    }
  }
};
</script>
<style lang='stylus'>
.bg {
  font-family: 'Microsoft YaHei', Helvetica, Arial, Lucida Grande, Tahoma, sans-serif;
  width: 100%;
  height: 100%;
  background-image: url('../../assets/bg.jpg');
  background-size: cover;

  .login-box {
    width: 320px;
    height: auto;
    padding: 10% 0 0;
    margin: auto;
    position: relative;

    h1 {
      background: rgba(255, 255, 255, 0.6);
      border-radius: 2px;
      border: 1px solid #fff;
      color: #000;
      padding: 20px;
      font-size: 20px;
      text-align: center;
      box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.1);
      line-height: 20px;
    }

    .form {
      width: 100%;
      height: 250px;
      margin-top: 40px;
      background: rgba(255, 255, 255, 0.6);
      border-radius: 2px;
      border: 1px solid #fff;
      color: #000;

      p {
        margin: 20px 0 10px 35px;
      }

      .el-input__inner {
        width: 80%;
        height: 30px;
        margin: 0 auto;
        display: flex;
      }

      .el-checkbox {
        display: block;
        margin-top: 15px;
        margin-left: 25px;
      }

      .el-button {
        width: 60px;
        height: 30px;
        position: absolute;
        right: 10px;
        background: #0085ba;
        border-color: #0073aa #006799 #006799;
        box-shadow: 0 1px 0 #006799;
        color: #fff;
        cursor: pointer;
        border-width: 1px;
        border-style: solid;
        -webkit-appearance: none;
        border-radius: 3px;
        white-space: nowrap;
        box-sizing: border-box;
        text-decoration: none;
        text-shadow: 0 -1px 1px #006799, 1px 0 1px #006799, 0 1px 1px #006799, -1px 0 1px #006799;
      }
    }

    .nav-box {
      margin-top: 10px;
    }

    .nav {
      display: inline;
      font-weight: 400;
      cursor: pointer;
    }
  }
}
</style>