import {reactive} from 'vue';

export default reactive({
  isDarkMode: window.matchMedia('(prefers-color-scheme: dark)').matches,

  applyDarkMode() {
    const rootEl = document.querySelector(':root');
    if (!rootEl) {
      return;
    }

    if (this.isDarkMode) {
      rootEl.classList.add('dark');
    } else {
      rootEl.classList.remove('dark');
    }
  },

  toggleDarkMode() {
    this.isDarkMode = !this.isDarkMode;
    this.applyDarkMode();
  },
});
