<template>
  <div>
    <div class="fixed" :class="{ ana: yonlendirme }">
      <span>5 saniye sonra yönlendirileceksiniz</span>
    </div>
    <div class="login-card">
      <form @submit.prevent="login()">
        <div class="formbox">
          <label for="">Kullanıcı Adı</label>
          <input v-model="logins.username" class="form-input" type="text" />
        </div>
        <div class="formbox">
          <label for="">Şifre</label>
          <input v-model="logins.password" class="form-input" type="password" />
        </div>
        <button type="submit">Giriş Yap</button>
      </form>
      {{ loginModel }}
      {{ msg }}
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      logins: { username: "", password: "" },
      msg: "",
      loginModel: null,
      yonlendirme: false,
    };
  },
  methods: {
    login() {
      this.$axios
        .post("http://localhost:5000/account", this.logins)
        .then((response) => {
          if (response.data.age > 18) {
            this.yonlendirme = true;
            console.log(response.data.age);
            setTimeout(() => {
              this.yonlendirme = false;
              this.$router.push("/");
            }, 5000);
          } else {
            this.msg = "18 Yaşından küçüksünüz";
          }
        })
        .catch((error) => {
          this.msg = error.response.data.message;
        });
    },
  },
};
</script>
<style scoped>
.fixed span {
  display: none;
}
.ana {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  text-align: center;
  background-color: #494949;
  color: #ffffff;
  font-size: 40px;
  z-index: 1;
}
.ana span {
  display: block !important;
}
body {
  font-family: "Calibri";
}
form {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
}
.login-card {
  position: relative;
  width: 100%;
  height: 100%;
  min-height: 80vh;
  display: flex;
  justify-content: center;
  background-color: #ffdbdb;
}
.formbox {
  position: relative;
  width: 16%;
  margin-bottom: 30px;
  text-align: left;
  display: block;
}
.formbox label {
  line-height: 30px;
}
.form-input {
  position: relative;
  width: 100%;
  height: 30px;
  border-radius: 18px;
  border: 1px solid #e9e9e9;
  box-shadow: 4px 4px 10px 12px #f5dcdc;
  padding: 0 20px;
  font-weight: bold;
}
</style>