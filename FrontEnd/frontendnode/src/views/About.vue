<template>
  <div class="about">
    <h1 @click="isActive = true">Popup Aç</h1>
    <Popup
      v-if="isActive"
      :name="personelName"
      :surname="personelSurname"
      :person="personel"
      :numberList="numbers"
      @ModalCloseEmit="isActive = $event"
    />
  </div>
</template>
<script>
import Popup from "../components/Popup/modal.vue";
export default {
  data() {
    return {
      personelName: "Fatih",
      personelSurname: "Şengül",
      isActive: false,
      personel: {
        name: "Fatih - Object",
        surname: "Şengül - Object",
      },
      numbers: [1, 2, 3, 4, 5],
    };
  },
  components: {
    Popup,
  },
};
</script>
<style scoped>
h1 {
  cursor: pointer;
}
</style>
