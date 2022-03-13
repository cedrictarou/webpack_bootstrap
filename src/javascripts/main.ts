// BootstrapのJavaScript側の機能を読み込む
import 'bootstrap';
// スタイルシートを読み込む
import '../stylesheets/main.scss';
// import { myjs } from './my.js';
// import { addFunc } from './add.ts';
// myjs();
// console.log(addFunc(3, 9));

import { createApp } from 'vue';
import VueApp from './VueApp.vue';

const app = createApp(VueApp);
app.mount('#app');
