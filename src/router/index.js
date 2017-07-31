import Vue from 'vue'
import VueRouter from 'vue-router'

import App from '../App'
//css
import common from '../style/common.css'


//组件
import home from '@/components/home'  
import album from '@/components/album'  
import pptList from '@/components/pptList'
import writing from '@/components/writing'
import article from '@/components/article'
import text from '@/components/text'
import footer from '@/components/footer/footer'
Vue.use(VueRouter)

/* eslint-disable no-new */
console.log(footer)
const router = new VueRouter({
    mode: 'history',
    base: __dirname,
    routes: [
        { path: '/', name: '/', component: home },
        { path: '/home', name: '/home', component: home },
        { path: '/album', name: 'album', component: album },
        { path: '/pptList', name: 'pptList', component: pptList },
        { path: '/writing', name: 'writing', component: writing },
        { path: '/article', name: 'article', component: article },
        { path: '/text', name: 'text', component: text },
        { path: '/footer', name: 'footer', component: footer }
    ]
})

export default router


