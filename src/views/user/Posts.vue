<template>
  <div id="app">
    <p>Posts</p>
    <button @click="gotoProfile()">goto Profile</button>
  </div>
</template>

<script type="text/javascript">
export default {
  name: "app",
  data() {
    return {};
  },
  components: {},
  methods: {
    gotoProfile() {
      console.log("gotoProfile");
      //使用绝对路径返回到
      this.$router.push("/user/33/profile");
    },
  },
};
</script>

<style lang="stylus" scoped></style>
