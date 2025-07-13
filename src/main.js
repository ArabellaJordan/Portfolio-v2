// import "./assets/main.css";
import "./assets/scss/style.css";

import { createApp } from "vue";
import App from "./App.vue";

// import fontawesome icons file
import FontAwesomeIcon from "./components/icons/fontawesome.js";

// createApp(App).mount("#app");

const app = createApp(App);
app.component("icon", FontAwesomeIcon);
app.mount("#app");
