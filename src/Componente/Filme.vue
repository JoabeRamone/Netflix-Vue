<template>

  <div class="gui-card" :style="efeito" v-on:click="clickEfeito" v-on:mouseout="removeClickEfeito">
    <div class="gui-card__media">
      <img class="gui-card__img" :src="imagem" alt=""/>
    </div>
    <div class="gui-card__details">


      <div class="gui-card__title">
        {{nomeFilme}}
      </div>
      <iframe :class="myVideoClass" v-on:mouseout="pausaTrailler" class="gui-card__img" :src="trailler" frameborder="0"
               allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
               allowfullscreen></iframe>
    </div>
  </div>

</template>

<script>
    export default {
      name: "Filme",
      props: ['nomeFilme', 'imagem', 'trailler'],
      data() {
        return {
          efeito: null
        }
      },
      methods:{
        pausaTrailler(){
            $('.myVideoClass').each(function(){
              $(this).pauseVideo();
            });

        },
        clickEfeito(){
          this.efeito = 'transform: scale(1.9); margin-rigth: 110px'

        },
        removeClickEfeito(){
          this.efeito = null;
        }
      }
    }
</script>

<style scoped>


  .gui-card {
    position: relative;
    display: inline-block;
    width: 250px;
    height: 140.625px;
    margin-right: 10px;
    font-size: 20px;
    cursor: pointer;
    -webkit-transition: 450ms all;
    transition: 450ms all;
    -webkit-transform-origin: center left;
    transform-origin: center left;
  }
  .gui-card__img {
    width: 250px;
    height: 140.625px;
    -o-object-fit: cover;
    object-fit: cover;
  }
  .gui-card__details {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    top: 0;
    font-size: 10px;
    opacity: 0;
    background: -webkit-linear-gradient(bottom, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0) 100%);
    background: linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0) 100%);
    -webkit-transition: 450ms opacity;
    transition: 450ms opacity;
  }
  .gui-card__details:after,
  .gui-card__details:before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    display: #000;
  }
  /*.gui-card__details:after {*/
  /*margin-top: -25px;*/
  /*margin-left: -25px;*/
  /*width: 50px;*/
  /*height: 50px;*/
  /*border: 3px solid #ecf0f1;*/
  /*line-height: 50px;*/
  /*text-align: center;*/
  /*border-radius: 100%;*/
  /*background: rgba(0,0,0,0.5);*/
  /*z-index: 1;*/
  /*}*/
  /*.gui-card__details:before {*/
  /*content: '▶';*/
  /*left: 0;*/
  /*width: 100%;*/
  /*font-size: 30px;*/
  /*margin-left: 7px;*/
  /*margin-top: -13px;*/
  /*text-align: center;*/
  /*z-index: 2;*/
  /*}*/
  .gui-card:hover .gui-card__details {
    opacity: 1;
  }
  .gui-card__title {
    position: absolute;
    bottom: 0;
    padding: 10px;
  }
</style>
