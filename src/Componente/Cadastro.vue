<template>

  <div class="login-wraper">
    <img class="img-logo" src="../assets/netflix-logo.png"/>
    <router-link to="/"><a href="Login.vue" class="a-entrar-login">Entrar</a></router-link>
    <hr>


    <div class="center-container">
      <p>Crie sua Conta</p>

      <form @submit="checkForm" method="post" @submit.prevent="salvar(user)"
            novalidate="true">
        <div v-if="errors.length">
          <b>Por favor, corrija o(s) seguinte(s) erro(s):</b>
        <ul>
          <li v-for="error in errors">{{ error }}</li>
        </ul>
        </div>

        <input class="input-cadastro" type="email" v-model="user.email" placeholder="Email" id="email"
               name="email"/>

        <input class="input-cadastro" type="password" v-model="user.senha" placeholder="Senha"/>

        <!--<router-link to="/">-->
        <!--<button class="btn-entrar" type="submit">-->
        <!--CONTINUAR-->
        <!--</button>-->


        <!--<button class="btn-entrar" type="submit">CONTINUAR</button>-->


        <b-button type="submit" variant="info" class="btn-entrar">
          CONTINUAR
        </b-button>

        <b-alert
          :show="dismissCountDown"
          dismissible
          fade
          variant="success"
          @dismiss-count-down="countDownChanged">
          Cadastro realizado com sucesso!
        </b-alert>

      </form>

    </div>


  </div>


</template>

<script>

  import Vue from 'vue'

  let Login = Vue.component('login');

  export default {

    name: "Cadastro",
    data() {
      return {
        user: {
          email: '',
          senha: ''
        },
        users: [{
          id: '',
          email: '',
          senha: ''
        }],
        errors: [],
        dismissSecs: true,
        dismissCountDown: 0,
        showDismissibleAlert: false
      }
    },
    created() {
      this.$http.get('http://localhost:3000/users').then(response => {
        this.users = response.body;
      });
    },
    methods: {
      login(){

      },
      salvar(user) {
        if (!this.errors.length) {
          this.$http.post('http://localhost:3000/users', {email: user.email, senha: user.senha}).then(response => {
            this.showAlert();
            setTimeout( () =>{
              this.$router.push('/');
            }, 3000);

          })
        }

      },
      checkForm: function (e) {
        this.errors = [];


        if (!this.user.email) {
          this.errors.push('O e-mail é obrigatório.');
        }

        if (this.verificacaoDeExitenciaNoJson(this.user.email)) {
          this.errors.push('Utilize um e-mail válido.');
        }
        if (!this.user.senha) {
          this.errors.push('A senha é obrigatória.');
        }

        if (!this.errors.length) {
          login();
          return true;
        }

        // e.preventDefault();

      },
      verificacaoDeExitenciaNoJson() {
        for (let i = 0, len = this.users.length; i < len; i++) {
          if (this.users[i].email === this.user.email) {
            return true;
          }
        }

      },
      showAlert() {
        this.dismissCountDown = this.dismissSecs;
      }

    }


  }
</script>

<style>

  p, label {
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
    color: #333;
    font-size: 19px;
    font-weight: 700;
    margin-top: 10px;
  }

  .login-wraper {
    min-height: 100%;
    margin: 0;
    padding: 0;
    position: relative;
    z-index: 0;
    height: 100%;

  }

  .img-logo {
    width: 15%;
    margin-top: 2%;
    margin-left: 4%;
  }

  .a-entrar-login {
    margin: 0 3%;
    float: right;
    color: #333;
    font-weight: 700;
    font-size: 19px;
    line-height: 90px;
    text-decoration: none;
    text-underline-color: none;
  }

  a:active {
    color: #333;
  }

  a:hover {
    color: #333;
  }

  .center-container {
    display: block;
    transform: none;
    opacity: 1;
    transition-duration: 250ms;
    text-align: left;
    max-width: 440px;
    margin: 0 auto;

  }

  .input-cadastro {
    padding: 10px 10px 0;
    width: 100%;
    height: 60px;
    margin: 10px 0 20px;
  }

  .btn-entrar {
    -webkit-border-radius: 4px;
    -moz-border-radius: 4px;
    border-radius: 4px;
    font-size: 16px;
    font-weight: 700;
    margin: 24px 0 12px;
    height: 50px;
    background: #e50914;
    border: none;
    color: white;
    width: 100%;
  }


</style>
