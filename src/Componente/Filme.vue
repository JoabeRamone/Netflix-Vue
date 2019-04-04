<template>

  <div class="gui-card" :style="efeito" v-on:click="clickEfeito" v-on:mouseout="removeClickEfeito">
    <div class="gui-card__media">
      <img class="gui-card__img" v-bind:src="imagem" alt=""/>
    </div>
    <div class="gui-card__details">
      <div class="gui-card__title">
        {{nomeFilme}}
      </div>
    </div>
  </div>

</template>

<script>
    export default {
      name: "Filme",
      props: ['nomeFilme', 'imagem'],
      data() {
        return {
          efeito: null
        }
      },
      methods:{
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

</style>
