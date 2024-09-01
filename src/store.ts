import {reactive} from 'vue';

const DARK_MODE_STORAGE_KEY = 'isDarkMode';
const DARK_MODE_CLASSNAME = 'dark';

export default reactive({
  isDarkMode:
    localStorage.getItem(DARK_MODE_STORAGE_KEY) === 'true' ||
    window.matchMedia('(prefers-color-scheme: dark)').matches,

  applyDarkMode() {
    const rootEl = document.querySelector(':root');
    if (!rootEl) {
      return;
    }

    if (this.isDarkMode) {
      rootEl.classList.add(DARK_MODE_CLASSNAME);
      localStorage.setItem(DARK_MODE_STORAGE_KEY, 'true');
    } else {
      rootEl.classList.remove(DARK_MODE_CLASSNAME);
      localStorage.setItem(DARK_MODE_STORAGE_KEY, 'false');
    }
  },

  toggleDarkMode() {
    this.isDarkMode = !this.isDarkMode;
    this.applyDarkMode();
  },
});
