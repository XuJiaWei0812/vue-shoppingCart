import { createRouter, createWebHashHistory } from 'vue-router'
import ShopView from '../views/ShopView.vue'
import NotFoundView from '../views/NotFoundView.vue'

const router = createRouter({
  history: createWebHashHistory(), // 這邊我使用 # 路徑模式
  routes: [
    {
      path: '/',
      name: 'shop',
      component: ShopView,
      meta: {
        title: "測試用購物車"
      }
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: NotFoundView,
      meta: {
        title: "查無此網頁"
      }
    },
  ]
})

router.beforeEach((to, form, next) => {
  document.title = `${to.meta.title}`;
  next();
})

export default router