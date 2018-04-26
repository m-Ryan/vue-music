import Vue from 'vue'
import Router from 'vue-router'
import Index from '../page/Index.vue'
import SongListDetail from '../page/SongListDetail.vue'

Vue.use(Router)
export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/songlist/:id',
      name: 'SongListDetail',
      component: SongListDetail
    }
  ]
})
