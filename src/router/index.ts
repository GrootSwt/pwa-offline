import { createMemoryHistory, createRouter } from 'vue-router'

import BarcodeView from '../views/BarcodeView.vue'
import HomeView from '../views/HomeView.vue'

const routes = [
  { path: '/', component: HomeView },
  { path: '/barcode', component: BarcodeView },
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

export default router
