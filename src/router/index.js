import Vue from 'vue'
import VueRouter from 'vue-router'
import App from '../App'
//css
import common from '../style/common.less'


//组件
 
import album from '@/components/album'  
import pptList from '@/components/pptList'
import writing from '@/components/writing'
import article from '@/components/article'
import text from '@/components/text'
import footer from '@/components/footer/footer'


//主页分页  home discovery publish news mine
import home from '@/components/home/home'
import discovery from '@/components/discovery/discovery'
import news from '@/components/news/news'  
import mine from '@/components/mine/mine'  

//副级分页
import myApplication from '@/components/mine/childPage/myApplication/application'
import photography from '@/components/mine/childPage/photography/photography'
import setPage from '@/components/mine/childPage/setPage/setPage'
/*------------------------------------------------------------------*/

import search from '@/components/publish/childPage/search'

import dynamicCon from '@/components/common/dynamicCon/dynamicCon'
 
import AlloyFinger from 'alloyfinger/alloy_finger' // 手势库

import AlloyFingerVue from 'alloyfinger/vue/alloy_finger.vue'
Vue.use(AlloyFingerVue, {
  AlloyFinger
})
Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'history',
    base: __dirname,
    routes: [
        { path: '/', name: '/', component: discovery },
        { path: '/home', name: '/home', component: home ,meta: { keepAlive: true,scrollToTop:0}},
        { path: '/discovery', name: '/discovery', component: discovery ,meta: { keepAlive: true,scrollToTop:0}},
        { path: '/news', name: '/news', component: news ,meta: { keepAlive: true,scrollToTop:0}},
        { path: '/mine', name: '/mine', component: mine ,meta: { keepAlive: true,scrollToTop:0}},
        { path: '/album', name: 'album', component: album },
        { path: '/pptList', name: 'pptList', component: pptList },
        { path: '/writing', name: 'writing', component: writing },
        { path: '/article', name: 'article', component: article },
        { path: '/text', name: 'text', component: text },
        { path: '/footer', name: 'footer', component: footer },
        { path: '/mine/application', name: 'application', component: myApplication },
        { path: '/mine/photography', name: 'photography', component: photography },
        { path: '/mine/setPage', name: 'setPage', component: setPage },
        { path: '/publish/search', name: 'search', component: search},
        { path: '/common/dynamicCon', name: 'dynamicCon', component: dynamicCon }
    ],
      scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {

          return savedPosition
        } else {
          return {
            x: 0,
            y: 0
          }
        }
      }
})
// let indexScrollTop = 0;
// router.beforeEach((to, from, next) => {
//   if (from.meta.keepAlive) {
//     // 离开之前先保存滚动的位置
//     from.meta.scrollToTop = document.body.scrollTop;
//   }
//   if (to.meta.keepAlive) {
//     // 再次进入时，强制滚动到离开时的位置
//     setTimeout(function(){
//         window.scrollTo(0, to.meta.scrollToTop);
//     },300)
//   }
//   next();
// });
export default router


