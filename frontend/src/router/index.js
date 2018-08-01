import Vue from 'vue'
import Router from 'vue-router'
import Generated from '@/components/Generated'
import {
  Space
} from '@/pages/'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/generate/multiverse'
    },
    {
      path: '/generate/:generator_id',
      name: 'Generated',
      component: Generated
    },
    {
      path: '/space',
      name: 'Space',
      component: Space
    }
  ]
})
