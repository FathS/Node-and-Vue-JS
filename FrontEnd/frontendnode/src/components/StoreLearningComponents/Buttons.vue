<template>
  <div>
    <button @click="arttir()">Arttır</button>
    <button @click="azalt()">Azalt</button><br />
    <div>
      <input type="text" v-model="color" />
      <button @click="add()">Renk Ekle</button>
    </div>
  </div>
</template>
<script>
import { mapMutations } from "vuex";
export default {
  data() {
    return {
      color: "",
    };
  },
  methods: {
    ...mapMutations(["arttir", "azalt"]),

    add() {
      //   this.$store.state.colors.push(this.color);
      this.$store.commit("colorAdd", this.color);
    },
  },
};
</script>