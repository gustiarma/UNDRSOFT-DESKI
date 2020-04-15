import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  scrollBehavior() {
    return { x: 0, y: 0 }
  },
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('./views/Home.vue')
    },
    {
      path: '',
      name:'main',
      component: () => import('./layouts/main/Main.vue'),

      children: [
        {
          path: '/dashboard',
          name: 'dashboard',
          component: () => import('./views/siswa/Index.vue')
        },
        // admin part
        {
          path:'manajemen',
          name:'manajemen',
          component: () => import('./layouts/main/AdminVIewer.vue'),
          children:[
            {
              path: 'index',
              name: 'manajemenIndex',
              component: () => import('./views/admin/Index.vue')
            },
            {
              path: 'siswa',
              name: 'manajemenSiswa',
              component: () => import('./views/admin/Siswa.vue')
            },
            {
              path: 'pengajar',
              name: 'manajemenPengajar',
              component: () => import('./views/admin/Pengajar.vue')
            },
            {
              path: 'pelajaran',
              name: 'manajemenPelajaran',
              component: () => import('./views/admin/Materi.vue')
            },
            {
              path: 'evaluasi',
              name: 'manajemenEvaluasi',
              component: () => import('./views/admin/Evaluasi.vue')
            },

          ]
        },
        {
          path: 'materi',
          name: 'siswa-materi',
          component: () => import('./views/siswa/Materi.vue')
        },
        {
          path: 'evaluasi',
          name: 'siswa-evaluasi',
          component: () => import('./views/siswa/Evaluasi.vue')
        },
      ],
    },

    {
      path: '',
      component: () => import('@/layouts/full-page/FullPage.vue'),
      children: [

        {
          path: '/login',
          name: 'login',
          component: () => import('@/views/pages/Login.vue')
        },
        {
          path: '/pages/error-404',
          name: 'page-error-404',
          component: () => import('@/views/pages/Error404.vue')
        },
      ]
    },
    // Redirect to 404 page, if no match found
    {
      path: '*',
      redirect: '/pages/error-404'
    }
  ],
})

router.afterEach(() => {
  // Remove initial loading
  const appLoading = document.getElementById('loading-bg')
  if (appLoading) {
    appLoading.style.display = "none";
  }
})

export default router
