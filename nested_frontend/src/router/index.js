import Vue from 'vue'
import Router from 'vue-router'
import Nested from '@/components/Nested'
import Doll from '@/components/Doll'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Nested',
      component: Nested
    },
    {
      path: '/doll',
      name: 'Doll',
      component: Doll
    }
  ]
})
