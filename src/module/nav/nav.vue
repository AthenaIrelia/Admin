<!--  -->
<template>
  <div class="nav">
    <el-row class="tac">
      <el-col :span="12">
        <el-menu
          default-active="2"
          :default-openeds="openeds"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
        >
          <el-submenu index="1">
            <template slot="title">
              <i class="icon-yonghu iconfont"></i>
              <span>用户管理</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="1-1">选项1</el-menu-item>
              <el-menu-item index="1-2">选项2</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-menu-item index="2">
            <i class="el-icon-menu"></i>
            <span slot="title">号码管理</span>
          </el-menu-item>
          <el-menu-item index="3">
            <i class="el-icon-setting"></i>
            <span slot="title">订单详情</span>
          </el-menu-item>
        </el-menu>
      </el-col>
    </el-row>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {
      openeds: ["1"]
    };
  },

  components: {},

  computed: {},

  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>
<style lang='stylus'>
.nav {
  display: flex;
  height 100%;
  position: relative;

  .tac {
    width: 300px;
    height: 100%;
    background: #2e2f2e;
  }

  .el-submenu__title {
    height: 50px;
    line-height: 50px;
  }

  .el-menu-item {
    width: auto;
    height: 50px;
    line-height: 50px;
  }

  span {
    width: 20px;
    height: 20px;
  }
}
</style>