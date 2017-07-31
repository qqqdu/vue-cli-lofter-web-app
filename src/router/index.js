import Vue from 'vue'
import VueRouter from 'vue-router'

import App from '../App'
//组件
import home from '@/components/home'  
import album from '@/components/album'  
import pptList from '@/components/pptList'
import writing from '@/components/writing'
import article from '@/components/article'
import text from '@/components/text'

Vue.use(VueRouter)

/* eslint-disable no-new */

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
        { path: '/text', name: 'text', component: text }
    ]
})

export default router


