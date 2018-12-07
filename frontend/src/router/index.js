import Vue from 'vue'
import Router from 'vue-router'
import Generated from '@/components/Generated'
import {
  Space,
  Challenges,
  MultiversePage,
  UniversePage,
  SuperclusterPage,
  Nested,
  DollPage
} from '@/pages/'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/generate/multiverse'
    },
    {
      path: '/nested',
      name: 'Nested',
      component: Nested
    },
    {
      path: '/doll',
      name: 'Doll',
      component: DollPage
    },
    {
      path: '/generate/:generator_id',
      name: 'Generated',
      component: Generated
    },
    {
      path: '/challenges',
      name: 'Challenges',
      component: Challenges
    },
    {
      path: '/space',
      name: 'Space',
      component: Space,
      children: [
        {
          path: '',
          redirect: '/space/multiverse'
        },
        {
          path: 'multiverse',
          name: 'Multiverse',
          component: MultiversePage
        },
        {
          path: 'universe/:id?',
          name: 'Universe',
          component: UniversePage
        },
        {
          path: 'supercluster/:id?',
          name: 'Supercluster',
          component: SuperclusterPage
        }
      ]
    }
  ]
})
