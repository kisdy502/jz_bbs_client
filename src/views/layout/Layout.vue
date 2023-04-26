<template>
  <div class="app-wrapper" :class="classObj">
    <div class="main-container">
      <app-main></app-main>
    </div>
  </div>
</template>

<script>
import AppMain from "./components/AppMain.vue";
export default {
  name: "appLayout",
  components: {
    AppMain,
  },
  classObj() {
    return {
      mobile: this.device === "mobile",
    };
  },
};
</script>

<style rel="stylesheet/scss" scoped>
.app-wrapper {
  @include clearfix;
  position: relative;
  height: 100%;
  width: 100%;
}
</style>