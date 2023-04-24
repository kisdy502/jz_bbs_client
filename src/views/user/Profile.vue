<template>
  <div id="app">
      <p>profile</p>
      <button @click="gotoPosts()">goto Posts</button>
  </div>
</template>

<script type="text/javascript">
export default {
  name: "app",
  data() {
    return {

    }
  },
  components: {

  },
  methods: {
    gotoPosts() {
      console.log("gotoPosts");
      //使用相对路径返回
      //router.replace它的作用类似于 router.push，唯一不同的是，它在导航时不会向 history 添加新记录
      this.$router.replace("./posts");
    }
  }
}
</script>

<style lang="stylus" scoped>
</style>
