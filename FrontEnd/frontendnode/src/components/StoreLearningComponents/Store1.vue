<template>
  <div>
    <h1>Store1</h1>

    <p>Store 1 Counter : {{ counter }}</p>
    <store2 />
    <buttons />
    <hr />
    <p>Mutations Store ile counter arttırma azaltma</p>
    <another-buttons />
    <hr />
    <p>Colors :</p>
    <ul>
      <li v-for="(item, index) in colors" :key="index">{{ item }}</li>
    </ul>
  </div>
</template>
<script>
import store2 from "../StoreLearningComponents/Store2";
import buttons from "../StoreLearningComponents/Buttons";
import AnotherButtons from "./AnotherButtons.vue";
export default {
  data: () => {
    return {};
  },
  computed: {
    counter() {
      return this.$store.state.counter;
    },
    colors() {
      return this.$store.state.colors;
    },
  },
  components: {
    store2,
    buttons,
    "another-buttons": AnotherButtons,
  },
};
</script>