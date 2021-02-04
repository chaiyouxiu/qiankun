import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import MapBoxGl from '../views/technicalPoint/mapBoxGl/index.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/technicalPoint/mapBoxGl',
    name: 'MapBoxGl',
    component: MapBoxGl
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
