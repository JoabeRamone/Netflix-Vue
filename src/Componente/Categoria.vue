<template>
  <div class="slider">
    <h3>{{titulo}}</h3>
    <span v-on:mouseover="scrollEsquerda()" v-on:mouseout="clearScroll()" class="handle handlePrev active">
        <i class="fa fa-caret-left" aria-hidden="true"></i>
      </span>


    <div ref="scroller" class="row">
      <div class="row__inner">
        <Filme v-if="show" :key="filme.id" v-for="filme in filmes"
               v-bind:nome-filme="filme.nome"
               v-bind:imagem="filme.imagem"
               v-bind:trailler="filme.trailler"
        ></Filme>
      </div>
    </div>


    <span v-on:mouseover="scrollDireita()" v-on:mouseout="clearScroll()" class="handle handleNext active">
        <i class="fa fa-caret-right" aria-hidden="true"></i>
      </span>

  </div>


</template>

<script>
  import Cabecario from './Categoria'
  import Filme from './Filme'

  export default {
    components: {
      Filme,
      Cabecario
    },
    name: "Categoria",
    props: ['titulo', 'filmes'],
    data() {
      return {
        show: true,
        intervalo: null
      }
    },
    methods: {
      scrollDireita() {
        this.intervalo = setInterval(() => { //lambda "=>" passar a referencia da funcao
          this.$refs.scroller.scrollLeft += 1
        }, 5);
      },
      scrollEsquerda() {
        this.intervalo = setInterval(() => {
          this.$refs.scroller.scrollLeft -= 1
        }, 5);
      },
      clearScroll() {
        clearInterval(this.intervalo);
      }
    }
  }
</script>

<style scoped>
  .slider {
    height: 214px;
    position: relative;
    margin: 0;
    padding: 0 4%;
    -ms-touch-action: pan-y;
    touch-action: pan-y;
  }


  .slider h3{
    position: absolute;
    top: 22px;
    z-index: 30;
  }

  .slider .handle.handlePrev {
    left: 11px;

  }

  .slider .handle.handleNext {
    right: 11px;

  }

  .slider .handle.active {
    cursor: pointer;
  }

  .slider .handle {
    background: rgba(20, 20, 20, 0.26);
    position: absolute;
    top: 0;
    height: 251px;
    bottom: 0;
    z-index: 20;
    width: 7%;
    text-align: center;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -moz-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    display: -webkit-box;
    display: -webkit-flex;
    display: -moz-box;
    display: -ms-flexbox;
    display: flex;
    color: #fff;
  }

  .row {
    overflow: hidden;
  }
  .row__inner {
    -webkit-transition: 450ms -webkit-transform;
    transition: 450ms -webkit-transform;
    transition: 450ms transform;
    transition: 450ms transform, 450ms -webkit-transform;
    font-size: 0;
    white-space: nowrap;
    margin: 70.3125px 0;
    padding-bottom: 10px;
  }
  .row__inner:hover {
    -webkit-transform: translate3d(-62.5px, 0, 0);
    transform: translate3d(-62.5px, 0, 0);
  }

  .fa{
    font-size: 46px;
    margin-top: 120px;
  }

</style>
