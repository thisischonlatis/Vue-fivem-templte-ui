// import styles hear
import "./assets/styles/main.scss";
import "./assets/styles/hud.scss";
import "./assets/styles/box.scss";


import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";

import { emitter } from "./utils/emitter";
import { ErroImage, NumbersOnly, FormatNumbersOnly, GetImageUrl, playSound } from "./utils/helpers";
import { SendHttp } from "./utils/http";

const app = createApp(App);

app.use(createPinia());

app.config.globalProperties.emitter = emitter;
app.config.globalProperties.ErroImage = ErroImage;
app.config.globalProperties.NumbersOnly = NumbersOnly;
app.config.globalProperties.FormatNumbersOnly = FormatNumbersOnly;
app.config.globalProperties.playSound = playSound;
app.config.globalProperties.GetImageUrl = GetImageUrl;
app.config.globalProperties.SendHttp = SendHttp;

app.mount("#app");