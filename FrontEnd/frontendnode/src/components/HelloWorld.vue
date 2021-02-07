<template>
  <div>
    <h1>Home - Isactive Personel</h1>
    <table>
      <thead>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Surname</th>
          <th>Age</th>
        </tr>
      </thead>
      <tbody>
        <tr
          style="cursor: pointer"
          @click="getPersonel(item.id)"
          v-for="item in personels"
          :key="item.id"
        >
          <td>{{ item.id }}</td>
          <td>{{ item.name }}</td>
          <td>{{ item.surname }}</td>
          <td>{{ item.age }}</td>
          <td>{{ item.age >= 18 ? "Adult" : "Underage" }}</td>
          <td @click="deletePersonel(item.id)" style="cursor: pointer">
            Delete
          </td>
        </tr>
      </tbody>
    </table>
    <h1>Personel Ekle</h1>
    <form @submit.prevent="addPerson()" action="">
      <label for="">Ad</label>
      <input type="text" v-model="personel.name" />
      <label for="">Soyad</label>
      <input type="text" v-model="personel.surname" />
      <label for="">Yaş</label>
      <input type="text" v-model="personel.age" />
      <button type="submit">Ekle</button>
    </form>
    <h2>{{ msgs }}</h2>
    <!-- static table -->
  </div>
</template>

<script>
import { getList, addPersonel } from "../services/PersonelList";
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  data() {
    return {
      personels: [],
      personel: {
        id: "",
        name: "",
        surname: "",
        age: "",
      },
      msgs: "",
    };
  },
  mounted() {
    this.getAllList();
  },
  methods: {
    async getAllList() {
      this.personels = await getList();
    },
    addPerson() {
      addPersonel(this.personel).then((response) => {
        this.msgs = response;
        this.getAllList();
      });
    },
    deletePersonel(id) {
      console.log(id);
      this.$axios.delete("http://localhost:5000/" + id).then((response) => {
        this.msgs = response.data.message;
        this.getAllList();
      });
    },
    getPersonel(id) {
      this.$axios.get("http://localhost:5000/" + id).then((response) => {
        this.personel = response.data;
      });
    },

    //Backende istek atmadan yapılmak istenirse.
    getPersonel2(row) {
      this.personel = row;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
table {
  position: relative;
  width: 100%;
  border-collapse: collapse;
}
table tbody tr {
  border-bottom: 1px solid rgb(238, 238, 238);
}
table thead tr th {
  padding-bottom: 20px;
}
table tbody tr:nth-child(odd) {
  background-color: aliceblue;
}
table tbody tr td {
  font-size: 14px;
  padding: 10px;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
