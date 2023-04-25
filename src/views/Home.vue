<template>
  <div id="app">
    <HelloWorld msg="Welcome" />
  </div>
</template>

<script type="text/javascript">
import HelloWorld from "@/components/HelloWorld.vue";
export default {
  name: "app",
  data() {
    return {};
  },
  components: {
    HelloWorld,
  },
};
</script>

<style  scoped>
</style>
