<template>

  <div class="painel-container">
    <img class="img-logo" src="../assets/netflix-logo.png">
    <ul class="painel-ul-cabecario">
      <li class="painel-li-cabecario"><a>Inicio</a></li>
      <li class="painel-li-cabecario"><a>Series</a></li>
      <li class="painel-li-cabecario"><a>Filmes</a></li>
    </ul>
    <a class="painel-sair-login" href="Login.vue">Sair da Netflix</a>
  </div>



</template>

<script>
    export default {
        name: "Cabecario"
    }
</script>

<style scoped>

  .painel-container{
    margin-top: 2%;
    margin-left: 2%;
    position: relative;
    background: transparent;
    height: 68px;
    font-family: 'Open Sans', sans-serif;
  }
  .img-logo{
    width: 100px;
  }
  .painel-ul-cabecario{
    font-size: 14px;
    list-style: none;
    display: -webkit-inline-flex;
  }

  .painel-li-cabecario{
    margin-right: 20%;
    cursor: pointer;
  }

  .painel-sair-login{
    margin-left: 65%;
    color: white;
    list-style: none;
    cursor: pointer;
    position: absolute;
  }




</style>
