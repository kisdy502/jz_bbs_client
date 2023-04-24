<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <!-- <HelloWorld msg="Welcome to Your Vue.js App1"/> -->
  <!-- <Book/> -->
  <p>
    <!--使用 router-link 组件进行导航 -->
    <router-link to="/login">Login</router-link> |
    <router-link to="/register">Register</router-link>
    <router-link to="/user/33">User Detail</router-link>
  </p>

  <div>
    这是router-view
    <!-- 路由匹配到的组件将渲染在这里 -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
