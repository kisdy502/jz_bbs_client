<template>
  <div id="app">
    <p>login user id: {{ $route.params.id }}</p>
  </div>
  <div><router-view></router-view></div>
</template>

<script type="text/javascript">
export default {
  name: "app",
  data() {
    return {};
  },
  components: {},
};
</script>

<style lang="stylus" scoped></style>
