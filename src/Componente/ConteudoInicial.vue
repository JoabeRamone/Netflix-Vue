<template>

  <div class="painel-conteudo-inicial">

    <div id="banner">
      <div class="info-meta-layer">
        <img
          src="https://occ-0-3697-1740.1.nflxso.net/dnm/api/v5/rendition/25247fca08ea5e68662f1fd0bcbb48bf95617a4a/AAAABQJbJf4FGBl0GnvUyEpkvlNO86kYLkAMtdebqurZFaA4EBrBWBCldTEmblFlZrRMADjtdSVEgEUTUrl9tEqBkQ2p6pBGk8g1axnV4IjRGaGxqNRzga_ygRvisoiM60Rr6djkyJmNDDYugECf-2BN1DmFEZrsN7XE-ZPiAZv4RYwsrC1E8VEDDAbyASPH_forUwiDn8OWJ9ojnHsbdke0PynspkGJNAiNLAuzSsMbeiC4TUrjvVzo_CL3qaN8Gu566IA.webp">
        <p class="conteudo-inicial">Assista à temporada 1 agora</p>


        <div v-if="show">
          <b-button variant="outline-secondary" v-on:click="show = !show" style="color: white; width: 50%">Assistir
          </b-button>
        </div>
        <div v-if="!show">
          <b-button variant="outline-secondary" v-on:click="show = !show" style="color: white; width: 50%">Fechar
          </b-button>
        </div>

        <p class="conteudo-inicial" style="margin-left:0;margin-top: 8px; text-align: justify;font-size: 17px">Ao
          investigar o desaparecimento de uma adolescente em uma cidade da Galícia, uma policial da Guarda Civil
          descobre segredos relacionados a seu passado.</p>
      </div>
      <img class="painel-conteudo-inicial-banner"
           src="https://occ-0-3697-1740.1.nflxso.net/art/3f4e6/42236e60faf9b4a9dab011e36019e37984a3f4e6.webp"/>
    </div>


    <div class="conteudo-inicial-trailler ">
      <div v-if="!show" id="trailler-conteudo-inicial" >
        <transition name="fade">
          <iframe style=" box-shadow: -1px -1px 20px 50px rgba(0, 0, 0, 0.5);" width="800" height="500" src="https://www.youtube.com/embed/JSazlXNUr58?&autoplay=1&origin=http://example.com" frameborder="0"
          ></iframe>

        </transition>
      </div>

    </div>
  </div>


</template>

<script>
  import Zondicon from 'vue-zondicons'


  export default {
    name: "ConteudoInicial",
    data() {
      return {
        show: true
      }
    }


  }

</script>

<style scoped>

  .painel-conteudo-inicial {
    z-index: 0;
    overflow-x: hidden;
    margin-top: -8%;
    width: 100%;
  }

  .painel-conteudo-inicial-banner {
    width: 100%;
  }

  .info-meta-layer {
    top: 0;
    width: 40%;
    height: 130%;
    padding-top: 10vw;
    position: absolute;
    padding-left: 4%;

  }

  .conteudo-inicial {
    font-weight: 700;
    margin-left: -81px;
    margin-top: 12px;
    color: #fff;
    font-size: 25px;
  }

  .conteudo-inicial-trailler {
    position: absolute;
    margin-top: -750px;
    margin-left: 700px;
  }

  .shadow2 {
    box-shadow: -1px -1px 40px 50px rgba(240, 46, 170, 0.5);
  }

</style>
