<template>
  <div id="app">
    <navbar />
    <router-view></router-view>
  </div>
</template>

<script>
import Navbar from "./component/Navbar.vue";
export default {
  components: { Navbar },
  name: "app",
  data() {
    return {};
  }
};
</script>
