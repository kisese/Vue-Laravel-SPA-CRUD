/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');
import VueRouter from 'vue-router';

window.Vue.use(VueRouter);
/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

Vue.component('home', require('./components/App.vue'));

import CompaniesIndex from './components/CompaniesIndex.vue';
import CompaniesCreate from './components/CompaniesCreate.vue';
import CompaniesEdit from './components/CompaniesEdit.vue';

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/home',
            name: 'viewCompanies',
            component: CompaniesIndex
        },
        {
            path: '/companies/create',
            name: 'createCompany',
            component: CompaniesCreate,
        },
        {
            path: '/companies/edit/:id',
            name: 'editCompany',
            component: CompaniesEdit,
        },
    ],
});

const app = new Vue({
    el: '#app',
    router,
});

