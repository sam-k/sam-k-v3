import './assets/main.css';

import {createApp} from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

store.applyDarkMode(/* isInitialRender= */ true);

const app = createApp(App);

app.use(router);

router.isReady().then(() => app.mount('#app'));
