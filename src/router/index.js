import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../components/Home'
import Navigation from '../components/Navigation'
import Banner from '../components/Banner'
import Solutions from '../components/Solutions'
// --------- solutions individual ----------
import WebServices from '../components/solutions/WebServices'
import EndToEnd from '../components/solutions/EndToEnd'
import DataMigration from '../components/solutions/DataMigration'
import CustomerSupport from '../components/solutions/CustomerSupport'

import Process from '../components/Process'
import Partners from '../components/Partners'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    children: [
      {
        path: '/',
        components: {
          navigation: Navigation,
          banner: Banner,
          solutions: Solutions,
          process: Process,
          partners: Partners
        }
      }
    ]
  },
  {
    path: '/solutions',
    name: 'Solutions',
    component: Home,
    children: [
      {
        path: '/',
        components: {
          navigation: Navigation,
          banner: Banner,
          solutions: Solutions
        }
      },
      {
        path: 'web-services-development',
        name: 'webservices',
        components: {
          navigation: Navigation,
          banner: Banner,
          solutions: WebServices
        }
      },
      {
        path: 'end-to-end-solutions',
        name: 'endToEnd',
        components: {
          navigation: Navigation,
          banner: Banner,
          solutions: EndToEnd
        }
      },
      {
        path: 'data-migration-and-analysis',
        name: 'dataMigration',
        components: {
          navigation: Navigation,
          banner: Banner,
          solutions: DataMigration
        }
      },
      {
        path: 'customer-support-automation',
        name: 'customerSupport',
        components: {
          navigation: Navigation,
          banner: Banner,
          solutions: CustomerSupport
        }
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
