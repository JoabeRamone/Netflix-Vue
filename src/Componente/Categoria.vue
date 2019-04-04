<template>

  <div class="slider">

    <h3>{{titulo}}</h3>

    <span v-on:mouseover="scrollEsquerda()" v-on:mouseout="clearScroll()" class="handle handlePrev active">
        <i class="fa fa-caret-left" aria-hidden="true"></i>
      </span>

    <div ref="scroller" class="row">
      <div class="row__inner">

        <Filme :key="filme.id" v-for="filme in filmes"
               v-bind:nome-filme="filme.nome"
               v-bind:imagem="filme.imagem"></Filme>

      </div>
    </div>

    <span v-on:mouseover="scrollDireita()" v-on:mouseout="clearScroll()" class="handle handleNext active">
        <i class="fa fa-caret-right" aria-hidden="true"></i>
      </span>

  </div>
</template>

<script>

  import Filme from './Filme'

    export default {
      components:{
        Filme
      },
      name: "Categoria",
      props: ['titulo', 'filmes'],
      data() {
        return {
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

</style>
