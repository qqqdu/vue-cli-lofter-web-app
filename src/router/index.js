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
console.log(footer)
const router = new VueRouter({
    mode: 'history',
    base: __dirname,
    routes: [
        { path: '/', name: '/', component: discovery },
        { path: '/home', name: '/home', component: home ,meta: { keepAlive: true}},
        { path: '/discovery', name: '/discovery', component: discovery },
        { path: '/publish', name: '/publish', component: publish },
        { path: '/news', name: '/news', component: news },
        { path: '/mine', name: '/mine', component: mine },
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

export default router


