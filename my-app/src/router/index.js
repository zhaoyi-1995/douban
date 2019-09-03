import Vue from 'vue'
import Router from 'vue-router'
import Login from '../pages/login'
import Register from '../pages/register'
import Home from '../pages/home'
import DownLoad from '../pages/downLoad'
import Movies from '../pages/movies'
import Book from '../pages/book'
import Redio from '../pages/redio'
import Group from '../pages/group'
import CheckOut from '../pages/checkOut'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/download',
      name: 'DownLoad',
      component: DownLoad
    },
    {
      path: '/movies',
      name: 'Movies',
      component: Movies
    },
    {
      path: '/book',
      name: 'Book',
      component: Book
    },
    {
      path: '/redio',
      name: 'Redio',
      component: Redio
    },
    {
      path: '/group',
      name: 'Group',
      component: Group
    },
    {
      path: '/checkout',
      name: 'CheckOut',
      component: CheckOut
    },
  ]
})
