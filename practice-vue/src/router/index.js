import Vue from 'vue'
import Router from 'vue-router'

import HelloWorld from '../components/HelloWorld';
import Home from '../components/home.vue';
import Page from '../components/page.vue';
import Hot from '../components/index.vue';
import Sun from '../components/sun.vue';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/hello',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/page',
      name: 'page',
      component: Page
    },
    {
      path: '/hot',
      name: '',
      component: Hot,
      children:[
        {
            path: 'sun/:val',
            name: Sun,
            component: Sun
        }
      ]
    },
  ]
})
