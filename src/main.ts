import './assets/main.css';

import {createApp} from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

store.applyDarkMode(/* isInitialRender= */ true);

const app = createApp(App);

app.use(router);

Promise.all([
  router.isReady(),
  (async () => {
    store.setPersonalData(await (await fetch('/api/personal')).json());
  })(),
]).then(() => app.mount('#app'));
