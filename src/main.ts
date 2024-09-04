import './assets/main.css';

import {createApp} from 'vue';
import {getPersonal} from './api';
import App from './App.vue';
import router from './router';
import store from './store';

store.applyDarkMode(/* isInitialRender= */ true);

const app = createApp(App);

app.use(router);

Promise.all([
  router.isReady(),
  (async () => {
    store.setPersonalData(await getPersonal());
  })(),
]).then(() => app.mount('#app'));
