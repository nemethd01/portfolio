import {createApp} from "vue";
import App from "../App.vue";
import axios from 'axios';
import router from "./router/router.js";
import ToastPlugin from "vue-toast-notification";
import 'bootstrap/dist/js/bootstrap.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import i18n from './localization/i18n.js'


import config from './config/config.js'


window.axios = axios;

const app = createApp(App);

app.use(ToastPlugin);
app.use(router);
app.use(i18n);
app.mixin(config);
app.mount('#app');