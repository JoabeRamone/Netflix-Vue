<template xmlns="http://www.w3.org/1999/html">
  <div class="login-wraper">
    <div class="login-wallpaper-background">
      <img class="img-login" src="../assets/fundo-login-2.jpeg">
      <div class="header-login">
        <a href="Login.vue">
          <img class="img-logo" src="../assets/netflix-logo.png"/>
        </a>
        <div class="login-body">
          <div class="login-form-main">
            <h1>Entrar</h1>

            <form class="login-form" @submit.prevent="checkForm" method="post" novalidate="true">
              <div v-if="errors.length">
                <b>Por favor, corrija o(s) seguinte(s) erro(s):</b>
                <ul>
                  <li v-for="error in errors">{{ error }}</li>
                </ul>
              </div>
              
              <div class="login-email-input">
                <input type="email" class="input-login btn btn-dark login-btn" placeholder="Email"
                       v-model="user.email"/>
              </div>

              <div class="login-email-input">
                <input class="input-login btn btn-dark login-btn" type="password" placeholder="Senha"
                       v-model="user.senha"/>
              </div>

              <button class="btn-entrar" type="submit">Entrar</button>
              <p>Não possue conta?</p>
              <router-link to="Cadastro"><a href="Cadastro.vue">Clique, aqui!</a></router-link>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Vue from 'vue'


  let Filmes = Vue.component('filmes');
  let Cadastro = Vue.component('cadastro');


  export default {
    name: "login",
    data() {
      return {
        users: [{
          id: '',
          email: '',
          senha: ''
        }],
        user: {
          email: '',
          senha: ''
        },
        errors: []
      };
    },
    created() {
      this.$http.get('http://localhost:3000/users').then(response => {
        this.users = response.body;
      });
    },
    methods: {
      checkForm: function (e) {
        this.errors = [];
        // e.preventDefault();


        //
        if (!this.user.email) {
          this.errors.push('O e-mail é obrigatório.');
        }
        if (!this.user.senha) {
          this.errors.push('A senha é obrigatória.');
        }

        let x = this.verificacaoDeExitenciaNoJsonDeSenha();
        let y = this.verificacaoDeExitenciaNoJson();



        if (x) {
          this.$router.push('filmes');
        } else {
          this.errors.push('Utilize um e-mail válido.');
        }

        if(!this.errors.length){
          return true;
        }

      },
      verificacaoDeExitenciaNoJson() {
        for (let i = 0, len = this.users.length; i < len; i++) {
          if(this.users[i].email === this.user.email){
            return true;
          }
        }
        return false;
      },
      verificacaoDeExitenciaNoJsonDeSenha() {
        for (let i = 0, len = this.users.length; i < len; i++) {
          if(this.users[i].senha === this.user.senha && this.users[i].email === this.user.email){
            return true;
          }
        }
        return false;
      }

    }


  }


</script>

<style scoped>

  .teste {
    background-image: url("../assets/fundo-login.jpg");
  }

  body {
    margin: 0;
    height: 100%;
    background-color: black;

  }

  .login-wraper {
    min-height: 100%;
    margin: 0;
    padding: 0;
    position: relative;
    z-index: 0;
    height: 100%;
    background-color: black;

  }

  .login-wallpaper-background {
    background-size: cover;
    display: block;
    height: 100%;
    min-height: 100vh;
    overflow: hidden;
    position: absolute;
    width: 100%;
    z-index: -1;
    /*opacity: .5;*/
    background: fixed;

  }

  .img-login {
    min-height: 100%;
    min-width: 100%;

    display: flex;
  }

  .img-logo {
    width: 15%;
    margin-top: 2%;
    margin-left: 4%;
  }

  .header-login {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    border-bottom: transparent;
    background: -webkit-gradient(linear, left top, left bottom, from(rgba(0, 0, 0, .5)), to(rgba(0, 0, 0, 0)));
    background: -webkit-linear-gradient(top, rgba(0, 0, 0, .5) 0, rgba(0, 0, 0, 0) 100%);
    background: -moz- oldlinear-gradient(top, rgba(0, 0, 0, .5) 0, rgba(0, 0, 0, 0) 100%);
    background: -o-linear-gradient(top, rgba(0, 0, 0, .5) 0, rgba(0, 0, 0, 0) 100%);
    background: linear-gradient(to bottom, rgba(0, 0, 0, .5) 0, rgba(0, 0, 0, 0) 100%);

  }

  .login-body {
    margin: 0 auto -236px;
    /*min-height: 100vh;*/
    background-color: transparent;
    max-width: 450px;
    color: #333;
    margin: 0 auto;
    /*padding: 0 5%;*/
    background-color: rgba(0, 0, 0, .75);
    margin-bottom: 90px;

    border-radius: 10px;
  }

  .login-form-main {
    font-weight: 700;
    color: white;
    padding: 60px 68px 40px;
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;

  }

  .login-form {

    margin-bottom: 10px;
  }

  .login-email-input {
    padding-bottom: 16px;

  }

  .login-btn {
    height: 50px;
    width: 300px;
  }

  .input-login {

  }

  .btn-entrar {
    -webkit-border-radius: 4px;
    -moz-border-radius: 4px;
    border-radius: 4px;
    font-size: 16px;
    font-weight: 700;
    margin: 24px 0 12px;
    height: 50px;
    width: 300px;
    background: #e50914;
    border: none;
    color: white;
  }

</style>
