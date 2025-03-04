import {createRouter, createWebHistory} from "vue-router";
import HomePage from "../components/pages/home/HomePage.vue";
import WebDevelopment from "../components/pages/webdevelopment/WebDevelopment.vue";
import GameDevelopment from "../components/pages/gamedevelopment/GameDevelopment.vue";
import About from "../components/pages/about/About.vue";
import FileManagerPage from "../components/pages/webdevelopment/projects/FileManager/FileManagerPage.vue";
import KioskPage from "../components/pages/webdevelopment/projects/Kiosk/KioskPage.vue";
import NumbersToStringPage from "../components/pages/webdevelopment/projects/NumbersToString/NumbersToStringPage.vue";
import CalcAndRandomNum from "../components/pages/webdevelopment/projects/PhpCalcAndRandomNum/CalcAndRandomNum.vue";
import NotFoundPage from "../components/NotFoundPage.vue";
import QueueSchedulePage from "../components/pages/webdevelopment/projects/QueueSchedule/QueueSchedulePage.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'Home Page',
            component: HomePage
        },
        {
            path: '/work/web-development',
            name: 'Web Development',
            component: WebDevelopment
        },
        {
            path: '/work/web-development/filemanager',
            name: 'File Manager',
            component: FileManagerPage
        },
        {
            path: '/work/web-development/kiosk',
            name: 'Kiosk',
            component: KioskPage
        },
        {
            path: '/work/web-development/numbers-to-string',
            name: 'Numbers to String',
            component: NumbersToStringPage
        },
        {
            path: '/work/web-development/calc-and-random-number',
            name: 'Calc and random number generator',
            component: CalcAndRandomNum
        },
        {
            path: '/work/web-development/queue-schedule',
            name: 'Queue Schedule',
            component: QueueSchedulePage
        },
        {
            path: '/work/game-development',
            name: 'Game Development',
            component: GameDevelopment
        },
        {
            path: '/about',
            name: 'About',
            component: About
        },
        {
            // 404 - Catch All
            path: '/:catchAll(.*)',
            name: 'NotFound',
            component: NotFoundPage,
        }
    ],
    scrollBehavior(to, from, savedPosition) {
        return { top: 0 }
    },
})



export default router;