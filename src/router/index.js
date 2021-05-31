import { createRouter, createWebHashHistory } from 'vue-router'
const Recommend = () => import('@/views/recommend')
const Search = () => import('@/views/search')
const Singer = () => import('@/views/singer')
const TopList = () => import('@/views/top-list')
const userCenter = () => import('@/views/user-center')

const routes = [
  {
    path: '/user',
    name: 'userCenter',
    component: userCenter
  },
  {
    path: '/',
    name: 'Home',
    component: Recommend
  },
  {
    path: '/recommend',
    name: 'Recommend',
    component: Recommend
  },
  {
    path: '/search',
    name: 'Search',
    component: Search
  },
  {
    path: '/singer',
    name: 'Singer',
    component: Singer
  },
  {
    path: '/top-list',
    name: 'TopList',
    component: TopList
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
