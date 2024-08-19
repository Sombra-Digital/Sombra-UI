import "./main.css"

import {App, createApp} from "vue";
import Main from "./Main.vue";

import Accordion from "./components/Accordion.vue";
import Alert from "./components/Alert.vue";

createApp(Main).mount("#app");

export { Accordion, Alert };

export default {
  install(app: App) {
    app.component("Accordion", Accordion);
    app.component("Alert", Alert);
  },
};