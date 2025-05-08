import './assets/main.css'
import './assets/styles/main.scss'



import { createRouter,createWebHistory } from 'vue-router';
import { createApp } from 'vue'
import App from './App.vue'
import Catalogue from './components/Catalogue.vue';
import Fashion from './components/Fashion.vue';
import Favourite from './components/Favourite.vue';
import Lifestyle from './components/Lifestyle.vue';
import Signup from './components/Signup.vue';


const router=createRouter({
    history:createWebHistory(),
    routes:[{
        path:'/',
        component:Catalogue
    },{
        path:'/fashion',
        component: Fashion

    },{
        path:'/favourite',
        component:Favourite

    },{
        path:'/lifestyle',
        component:Lifestyle
    },{
        path:'/signup',
        component:Signup
    }]
})

const app=createApp(App)
app.use(router)
app.mount('#app')
