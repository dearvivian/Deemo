import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import card from '@/components/card' 
import NewContact from '@/components/NewContact'
import login from '@/components/login'
import Home from '@/components/Home'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/', // 一级路由
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
      component: NewContact
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/Home',
      name: 'Home',
      component: Home
    }
  ]
})
