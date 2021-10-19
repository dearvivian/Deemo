import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import card from '@/components/card' //新添加
import NweContact from '@/components/NewContact'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/card',
      name: 'card',
      component: card
    },
    {
      path: '/newcontact',
      name: 'NewContact',
      component: NweContact
    }
  ]
})
