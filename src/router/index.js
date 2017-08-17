import Vue from 'vue'
import VueRouter from 'vue-router'
import App from '../App'
//css
import common from '../style/common.css'


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
import publish from '@/components/publish/publish' 
import news from '@/components/news/news'  
import mine from '@/components/mine/mine'  

//副级分页
import myApplication from '@/components/mine/childPage/myApplication/application'
import photography from '@/components/mine/childPage/photography/photography'
import setPage from '@/components/mine/childPage/setPage/setPage'
import dynamicCon from '@/components/common/dynamicCon/dynamicCon'
 
import AlloyFinger from 'alloyfinger/alloy_finger' // 手势库

import AlloyFingerVue from 'alloyfinger/vue/alloy_finger.vue'
Vue.use(AlloyFingerVue, {
  AlloyFinger
})
Vue.use(VueRouter)
/* eslint-disable no-new */
const scrollBehavior = (to, from, savedPosition) => {
  console.log(to,from);
  if (savedPosition) {
    // savedPosition is only available for popstate navigations.
    return savedPosition;
  }
  const position = {};
  // new navigation.
  // scroll to anchor by returning the selector
  if (to.hash) {
    position.selector = to.hash;
  }
  // check if any matched route config has meta that requires scrolling to top
  if (to.matched.some(m => m.meta.scrollToTop)) {
    // cords will be used if no selector is provided,
    // or if the selector didn't match any element.
    position.x = 0;
    position.y = 0;
  }
  // if the returned position is falsy or an empty object,
  // will retain current scroll position.
  return position;
};
const router = new VueRouter({
    mode: 'history',
    base: __dirname,
    routes: [
        { path: '/', name: '/', component: discovery },
        { path: '/home', name: '/home', component: home ,meta: { keepAlive: true,scrollToTop:true}},
        { path: '/discovery', name: '/discovery', component: discovery ,meta: { keepAlive: true,scrollToTop:true}},
        { path: '/publish', name: '/publish', component: publish },
        { path: '/news', name: '/news', component: news ,meta: { keepAlive: true,scrollToTop:true}},
        { path: '/mine', name: '/mine', component: mine ,meta: { keepAlive: true,scrollToTop:true}},
        { path: '/album', name: 'album', component: album },
        { path: '/pptList', name: 'pptList', component: pptList },
        { path: '/writing', name: 'writing', component: writing },
        { path: '/article', name: 'article', component: article },
        { path: '/text', name: 'text', component: text },
        { path: '/footer', name: 'footer', component: footer },
        { path: '/mine/application', name: 'application', component: myApplication },
        { path: '/mine/photography', name: 'photography', component: photography },
        { path: '/mine/setPage', name: 'setPage', component: setPage },
        { path: '/common/dynamicCon', name: 'dynamicCon', component: dynamicCon }
    ],
  scrollBehavior : scrollBehavior
})

export default router


