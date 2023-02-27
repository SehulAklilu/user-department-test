import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/users',
      name: 'Users',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/Users/UserIndex.vue')
    },
    {
      path: '/users/create',
      name: 'CreateUsers',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/Users/UserCreate.vue')
    },
    {
      path: '/users/:id/edit',
      name: 'EditUsers',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/Users/UserEdit.vue'),
      props: true
    }
    {
      path: '/departments',
      name: 'Departments',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/Department/DepartmentIndex.vue')
    },
    {
      path: '/departments/create',
      name: 'CreateDepartments',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/Department/DepartmentCreate.vue')
    },
    {
      path: '/departments/:id/edit',
      name: 'EditDepartments',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/Department/DepartmentEdit.vue'),
      props: true
    }
  ]
})

export default router
