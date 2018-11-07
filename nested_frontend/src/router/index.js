import Vue from 'vue'
import Router from 'vue-router'
import Nested from '@/components/Nested'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Nested',
      component: Nested
    }
  ]
})
