<template>
  <div>
    <button @click="arttir()">Arttır</button>
    <button @click="azalt()">Azalt</button><br />
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    arttir() {
      this.$store.state.counter++;
      //   this.$store.commit("arttir");
    },
    azalt() {
      this.$store.state.counter--;
      //   this.$store.commit("azalt");
    },
  },
};
</script>