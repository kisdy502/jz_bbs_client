<template>
  <div id="app">
    <p>login user id: {{ $route.params.id }}</p>
  </div>
  <div><router-view></router-view></div>
</template>

<script type="text/javascript">
import { getBrandList } from "@/api/product";

export default {
  name: "app",
  data() {
    return {
      listQuery: {
        keyword: null,
        pageNum: 1,
        pageSize: 10,
      },
    };
  },
  components: {},
  created() {
    console.log("created:");
    getBrandList(this.listQuery).then((response) => {
      console.log("response:" + JSON.stringify(response.data));
      if (response.data.data) {
        this.list = response.data.data.list;
        for (var i = 0, len = this.list.length; i < len; i++) {
          console.log("brand :" + JSON.stringify(this.list[i]));
        }
      }
    });
  },
  mounted() {
    console.log("mounted:");
  },
  onMounted() {
    console.log("onMounted:");
  },
};
</script>

<style lang="stylus" scoped></style>
