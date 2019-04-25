import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

import App from '../App'
import Login from '../Componente/Login'
import Cadastro from '../Componente/Cadastro'

export default new Router({
  routes: [
    {path: '/', component: Login},
    {path: '/filmes', component: App},
    {path: '/cadastro', component: Cadastro}

  ]
})
