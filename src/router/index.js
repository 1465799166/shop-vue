import Vue from 'vue'
import Router from 'vue-router'
import ShoppingMal from '@/components/pages/ShoppingMal'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'shoppingMall',
      component: ShoppingMal
    }
  ]
})
