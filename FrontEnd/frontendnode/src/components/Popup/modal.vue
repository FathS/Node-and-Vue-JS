<template>
  <div class="popup">
    <div class="popup-card">
      <div class="popup-card-title">
        <span>Popup Title Alanı</span>
        <span @click="close()" class="cursor-pointer"> X </span> 
      </div>
      <div class="popup-card-content">
        <span>Name :</span> <span>{{ name }}</span
        ><br /><br />
        <span>Surname :</span> <span>{{ surname }}</span>
        <p>Name: {{ person.name }}</p>
        <p>Surname: {{ person.surname }}</p>
        
        <ul>
          <li v-for="(item, index) in numberList" :key="index">{{ item }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    name: {
      type: String,
    },
    surname: {
      type: String,
    },
    person: {
      type: Object,
    },
    numberList: {
      type: Array,
    },
  },
  data() {
    return {
      isActive: false,
    };
  },
  methods: {
    //Close fonksiyonunda bu componentin kullanıldığı componente isActive yani false değerini gönderiyoruz. "ModalCloseEmit" componentin kullanıldığı yerde
    // bu $emit'i hangi isimle çağırcağımız anlamına gelir.
    close() {
      this.$emit("ModalCloseEmit", this.isActive);
    },
  },
};
</script>
<style scoped>
.popup {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.3);
  font-family: sans-serif;
}
.popup-card {
  position: relative;
  padding: 0;
  margin: 0;
  width: 500px;
  height: 600px;
  background-color: #ffffff;
  box-shadow: 2px 0 2px #ccc;
  border: none;
  border-radius: 7px;
}
.popup-card-title {
  position: relative;
  padding: 10px 15px;
  margin-bottom: 20px;
  background-color: rgb(126, 153, 156);
  border-radius: 7px 7px 0 0;
  font-weight: bold;
  display: flex;
  justify-content: space-between;
}
.popup-card-content {
  position: relative;
  width: 100%;
  padding: 20px;
  text-align: left;
}
.cursor-pointer {
  cursor: pointer;
}
</style>