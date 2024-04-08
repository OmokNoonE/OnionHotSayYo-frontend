import './assets/dist/css/bootstrap.min.css'
import './assets/blog.css'
import './assets/sign-in.css'
import './assets/checkout.css'
import router from './router/router.js';

import { createApp } from 'vue'
import App from './App.vue'


import * as ColorModes from "./assets/js/color-modes.js";
import * as BundleMin from "./assets/dist/js/bootstrap.bundle.min.js";

const app = createApp(App);
app.use(router);
createApp(App).mount('#app');


