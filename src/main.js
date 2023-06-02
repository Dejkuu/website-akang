import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import SvgIcon from '@jamescoyle/vue-icon'

createApp(App).component('svgIcon', SvgIcon).use(router).mount("#app");