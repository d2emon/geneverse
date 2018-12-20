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
  NestedItem,
  DollPage,
  VideoGame,
  NameGen
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
      path: '/nested-item/:item',
      name: 'NestedItem',
      component: NestedItem
    },
    {
      path: '/doll',
      name: 'Doll',
      component: DollPage
    },
    {
      path: '/video-game',
      name: 'VideoGame',
      component: VideoGame
    },
    {
      path: '/name-gen',
      name: 'NameGen',
      component: NameGen
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
      // name: 'Space',
      component: Space,
      children: [
        {
          path: '',
          name: 'Space',
          redirect: '/space/multiverse'
        },
        {
          path: 'multiverse/:id?',
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
