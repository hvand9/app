import { createRouter, createWebHistory } from 'vue-router'
import Welcome from '../views/Welcome.vue'
import Chatroom from '../views/Chatroom.vue'
import { projectAuth } from '../firebase/config'
import Shop from '@/components/Shop'
import Kontakt from '@/components/Kontakt'
import Omos from '@/components/Omos' 


Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Product',
            component: Product
        },
        {
            path: '/contact',
            name: 'Contact',
            component: Contact
        },
        {
            path: '/home',
            name: 'Home',
            component: Home
        },
    ]
})