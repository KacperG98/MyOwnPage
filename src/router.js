import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'
import Links from './views/Links.vue'
import Ability from './views/Ability.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: About
    }, 
    {
      path: '/links',
      name: 'Links',
      component: Links
    }, 
    {
      path: '/ability',
      name: 'Abiliy',
      component: Ability
    }
  ]
})
