import Vue from 'vue'
import App from './App.vue'
import store from '../src/store';
import VueRouter from 'vue-router'
import LandingPage from './views/LandingPage.vue'
import Signup from './views/Signup.vue'
import Login from './views/Login.vue'
import Home from './views/Home.vue'
import SignupSuccess from './views/SignupSuccess.vue';

import CarbonNeutrality from './views/CarbonNeutrality.vue';
import CodeOfConduct from './views/CodeOfConduct.vue';
import DataPrivacy from './views/DataPrivacy.vue';
import DiversityStatement from './views/DiversityStatement.vue';
import TermsOfUse from './views/TermsOfUse.vue';

import 'bootstrap'

import '@fortawesome/fontawesome-free/css/all.min.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

import 'mdbvue/lib/css/mdb.min.css'


//theme css
import './assets/css/main.css'
import './assets/css/animate.css'
import './assets/css/responsive.css'
import './assets/css/nivo-lightbox.css'
import './assets/font/line-icons.css'






import Notifications from 'vue-notification';
import VueToast from 'vue-toast-notification';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(faSpinner);
Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.use(VueRouter);
Vue.use(Notifications);
Vue.use(VueToast);

Vue.config.productionTip = false

export const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'langding-page',
      component: LandingPage,
      meta: { 
        guest: true
      }
    },
    {
      path: '/carbon-neutrality',
      name: 'carbon-neutrality',
      component: CarbonNeutrality,
      meta: { 
        guest: true
      }
    },
    {
      path: '/code-of-conduct',
      name: 'code-of-conduct',
      component: CodeOfConduct,
      meta: { 
        guest: true
      }
    },
    {
      path: '/data-privacy',
      name: 'data-privacy',
      component: DataPrivacy,
      meta: { 
        guest: true
      }
    },
    {
      path: '/diversity-statement',
      name: 'diversity-statement',
      component: DiversityStatement,
      meta: { 
        guest: true
      }
    },
    {
      path: '/terms-of-use',
      name: 'terms-of-use',
      component: TermsOfUse,
      meta: { 
        guest: true
      }
    },
    {
      path: '/signup',
      name: 'signup',
      component: Signup,
      meta: { 
        guest: true
      }
    },
    { 
      path: '/signup-success', 
      name: 'signup-success',
      component: SignupSuccess,
      meta: { 
        guest: true
      }
    },
    {
      path: '/home',
      name: 'home',
      component: Home,
      meta: { 
        requiresAuth: true
      }
    }, 
  ]
})


router.beforeEach((to, from, next) => {
  if(to.matched.some(record => record.meta.requiresAuth)) {
      if (localStorage.getItem('_token') === null) {
          next({
              path: '/login',
              params: { nextUrl: to.fullPath }
          })
      }else{
          next()
      }
  }else if(to.matched.some(record => record.meta.guest)) { 
    if(localStorage.getItem('_token') !== null) {        
      next({
          path: '/home',
          params: { nextUrl: to.fullPath }
      })
    }else{
      next() 
    }
  }
});

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')