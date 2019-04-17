<!--  -->
<template>
  <div class="home">
    <mhead></mhead>
    <mnav></mnav>
  </div>
</template>

<script>
import Mhead from "../../module/head/head.vue";
import Mnav from "../../module/nav/nav.vue";
export default {
  data() {
    return {};
  },

  components: {
    Mhead,
    Mnav
  },

  computed: {},

  //   mounted: {},

  methods: {}
};
</script>
<style lang='stylus' scoped>
.home {
  width: 100%;
  height: 100%;
  position: absolute;
  overflow: hidden;
}
</style>