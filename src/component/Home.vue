<template>
  <div>
    Home
    <div v-if="loading">Loading...</div>
    <div v-else>Api res: {{ apiRes }}</div>
    <div>
      Board List:
      <ul>
        <li>
          <router-link to="/b/1">Board1</router-link>
        </li>
        <li>
          <router-link to="/b/2">Board2</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      loading: false,
      apiRes: ""
    };
  },
  created() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      this.loading = true;
      const req = new XMLHttpRequest();

      req.open("GET", "http://locatlhost:3000/health");
      req.send();
      req.addEventListener("load", () => {
        this.loading = false;
        this.apiRes = {
          status: req.status,
          statusText: req.statusText,
          response: JSON.parse(req.response)
        };
      });
    }
  }
};
</script>
