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
    ]
})
let indexScrollTop = 0;
router.beforeEach((to, from, next) => {
console.log(from.meta.scrollToTop)
  if (from.meta.scrollToTop) {
    // 离开之前先保存滚动的位置
    
    from.meta.scrollToTop = document.body.scrollTop;
    indexScrollTop = from.meta.scrollToTop;

  }
  if (to.meta.scrollToTop) {
    // 再次进入时，强制滚动到离开时的位置
    if(to.meta.scrollToTop===true){
        document.querySelector('body').scrollTo(0, 0);
    }else{
        document.querySelector('body').scrollTo(0, to.meta.scrollToTop);
    }

    
  }
  next();
});
export default router


