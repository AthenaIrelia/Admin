<!--  -->
<template>
  <div class="head">
    <div class="left">
      <!-- <img src="" alt=""> -->
      XX管理系统
    </div>
    <div class="hidenav">
      <i class="iconfont icon-yincang"></i>
    </div>
    <div class="right">
      <i class="iconfont icon-xiazai17"></i>
      <i class="iconfont icon-icon--"></i>
      <img src="../../assets/logo.png" alt>
      <span>某某用户</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },

  components: {},

  computed: {},

  methods: {}
};
</script>
<style lang='stylus' scoped>
.head {
  width: 100%;
  height: 60px;
  background: #2e2f2e;
  position: relative;

  .left {
    position: absolute;
    left: 100px;
    color: #ffffff;
    font-size: 20px;
    line-height: 60px;
    cursor: pointer;
  }

  .hidenav {
    position: absolute;
    color: #ffffff;
    left: 300px;
    line-height: 60px;

    i {
      font-size: 20px;
    }
  }

  .right {
    position: absolute;
    right: 50px;
    color #ffffff;
    line-height 60px;
    i{
       font-size: 20px;
       margin 0px 10px;

    }
    img {
      width 20px;
      height 20px;
      border-radius 50%;
      margin 0px 10px;
    }
  }
}
</style>