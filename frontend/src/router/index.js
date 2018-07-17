import Vue from 'vue'
import Router from 'vue-router'
import Generated from '@/components/Generated'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Generated',
      component: Generated
    }
  ]
})
