import './assets/styles/main.scss';
import { createRouter,createWebHistory } from 'vue-router';
import { createApp } from 'vue';
import App from './App.vue';
import Shopping_Page from './Views/Shopping_Page.vue';

const router=createRouter({
    history:createWebHistory(),
    routes:[{
        path:'/',
        name:'Shopping_Page',
        component:Shopping_Page,
    }]
})

const app=createApp(App)
app.use(router)
app.mount('#app')
