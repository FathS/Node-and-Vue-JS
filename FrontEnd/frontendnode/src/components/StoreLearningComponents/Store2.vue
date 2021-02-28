<template>
  <div>
    <h1>Store2</h1>
    <p>Store 2 Double (*2) Counter : {{ doubleCounter }}</p>
    <p>{{ stringCounter }}</p>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  data: () => {
    return {};
  },
  computed: { ...mapGetters(["doubleCounter", "stringCounter"]) },
};
</script>