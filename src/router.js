// import Vue from 'vue'
// import App from './App.vue'
// import store from './store';
// import VueRouter from 'vue-router'
// import LandingPage from './views/LandingPage.vue'
// import Signup from './views/Signup.vue'
// import Login from './views/Login.vue'
// import Home from './views/Home.vue'
// import FoundReports from './views/FoundReports.vue'
// import MissingReports from './views/MissingReports.vue'
// import DetailedReport from './views/DetailedReport.vue'

// Vue.use(VueRouter)

// // export const router = new VueRouter({
// //   mode: 'history',
// //   routes: [
// //     {
// //       path: '/',
// //       name: 'langding-page',
// //       component: LandingPage
// //     },
// //     {
// //       path: '/login',
// //       name: 'login',
// //       component: Login
// //     },
// //     {
// //       path: '/signup',
// //       name: 'signup',
// //       component: Signup
// //     },
// //     {
// //       path: '/home',
// //       name: 'home',
// //       component: Home
// //     },
// //     {
// //       path: '/found-reports',
// //       name: 'found-reports',
// //       component: FoundReports
// //     },
// //     {
// //       path: '/missing-reports',
// //       name: 'missing-reports',
// //       component: MissingReports
// //     },
// //     {
// //       path: '/detailed-report',
// //       name: 'detailed-report',
// //       component: DetailedReport
// //     }
// //   ]
// // })


// // // router.beforeEach((to, from, next) => {
// // //   if(to.matched.some(record => record.meta.requiresAuth)) {
// // //       if (localStorage.getItem('bsf_token') === null) {
// // //           next({
// // //               path: '/login',
// // //               params: { nextUrl: to.fullPath }
// // //           })
// // //       }else{
// // //           next()
// // //       }
// // //   }else if(to.matched.some(record => record.meta.guest)) { 
// // //     if(localStorage.getItem('bsf_token') !== null) {        
// // //       next({
// // //           path: '/business-detail',
// // //           params: { nextUrl: to.fullPath }
// // //       })
// // //     }else{
// // //       next() 
// // //     }
// // //   }
// // // });

// // new Vue({
// //   router,
// //   store,
// //   render: h => h(App),
// // }).$mount('#app')