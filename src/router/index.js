import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Apple from '@/components/Apple'
import Banana from '@/components/Banana'
import RedApple from '@/components/RedApple'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    // {
    //   path: '/',
    //   name: 'Hello',
    //   component: Hello
    // },
    {
      path: '',
      redirect: '/Apple'
    },
    {
      path: '/Apple',
      component: Apple,
      children: [{
        path: 'red',
        component: RedApple
      }]
    },
    {
      path: '/Banana',
      component: Banana
    }
  ]
})
