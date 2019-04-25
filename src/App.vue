<template>


  <div class="contain">

    <cabecario></cabecario>

    <ConteudoInicial></ConteudoInicial>

    <div class="painel-categorias">
    <Categoria :key="categoria.id" v-for="categoria in categorias"
               v-bind:titulo="categoria.nome"
               v-bind:filmes="categoria.filmes">
    </Categoria>

    </div>

  </div>
</template>

<script>

  import Login from './Componente/Login'
  import Categoria from './Componente/Categoria'
  import Cabecario from "./Componente/Cabecario"
  import ConteudoInicial from  './Componente/ConteudoInicial'
  import Cadastro from './Componente/Cadastro'


  export default {
  components: {
    Cabecario,
    Categoria,
    Login,
    ConteudoInicial,
    Cadastro
  },
  name: 'App',
  data() {
    return {
      categorias: [],
      users: []

    }
  },
  created(){
    this.$http.get('http://localhost:3000/categorias').then(response => {
        this.categorias = response.body;
      });
    this.$http.get('http://localhost:3000/users').then(response => {
      this.users = response.body;
    })
  }
}
</script>

<style>
  @import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css");

  body,
  html {
    padding: 0;
    margin: 0;
    background: #0e0f11;
    color: #ecf0f1;
    font-family: 'Open Sans', sans-serif;
    min-height: 100vh;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row;
    -webkit-box-align: center;
    -ms-flex-align: center;

    width: 100%;
  }
  * {
    box-sizing: border-box;
  }

  h1,
  p {
    text-align: center;
  }
  p {
    width: 100%;
    max-width: 500px;
    margin: auto;
  }
  a:link,
  a:hover,
  a:active,
  a:visited {
    -webkit-transition: color 150ms;
    transition: color 150ms;
    color: #95a5a6;
    text-decoration: none;
  }
  a:hover {
    color: #7f8c8d;
    text-decoration: underline;
  }
  .contain {
    position: absolute;
    width: 100%;
  }





  .row__inner:hover .gui-card {
    opacity: 0.3;
  }
  .row__inner:hover .gui-card:hover {
    -webkit-transform: scale(1.5);
    transform: scale(1.5);
    opacity: 1;
  }
  .gui-card:hover ~ .gui-card {
    -webkit-transform: translate3d(125px, 0, 0);
    transform: translate3d(125px, 0, 0);
  }
  .painel-categorias{
    position: relative;
    margin-top: -16%;
  }


</style>
