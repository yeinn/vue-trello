<template>
  <div>
    Board
    <div>bid: {{ bid }}</div>
    <div v-if="loading">loading board...</div>
    <div v-else>
      <router-link :to="`/b/${bid}/c/1`">Card1</router-link>
      <router-link :to="`/b/${bid}/c/2`">Card2</router-link>
    </div>
    <hr />
    <router-view></router-view>
  </div>
</template>
<script>
import { mapActions, mapState } from "vuex";
import { board } from "../api";
export default {
  data() {
    return {
      bid: 0,
      loading: false
    };
  },
  computed: {
    ...mapState({ board: "board" })
  },
  created() {
    this.fetchData();
  },
  methods: {
    ...mapActions(["FETCH_BOARD"]),
    fetchData() {
      this.loading = true;
      this.FETCH_BOARD({ id: this.$route.params.bid }).then(
        () => (this.loading = false)
      );
    }
  }
};
</script>
<style></style>
