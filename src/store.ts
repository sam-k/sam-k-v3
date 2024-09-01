import {reactive} from 'vue';

const DARK_MODE_STORAGE_KEY = 'isDarkMode';
const DARK_MODE_CLASSNAME = 'dark';

export default reactive({
  isDarkMode: (() => {
    const storageDarkMode = localStorage.getItem(DARK_MODE_STORAGE_KEY);
    return (
      storageDarkMode === 'true' ||
      (!storageDarkMode &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
    );
  })(),

  applyDarkMode(isInitialRender = false) {
    const rootEl = document.querySelector(':root');
    if (!rootEl) {
      return;
    }

    if (!isInitialRender) {
      localStorage.setItem(
        DARK_MODE_STORAGE_KEY,
        this.isDarkMode ? 'true' : 'false'
      );
    }
    if (this.isDarkMode) {
      rootEl.classList.add(DARK_MODE_CLASSNAME);
    } else {
      rootEl.classList.remove(DARK_MODE_CLASSNAME);
    }
  },

  toggleDarkMode() {
    this.isDarkMode = !this.isDarkMode;
    this.applyDarkMode();
  },
});
