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
    if (!isInitialRender) {
      localStorage.setItem(
        DARK_MODE_STORAGE_KEY,
        this.isDarkMode ? 'true' : 'false'
      );
    }

    const rootEl = document.querySelector(':root');
    if (this.isDarkMode) {
      rootEl?.classList.add(DARK_MODE_CLASSNAME);
    } else {
      rootEl?.classList.remove(DARK_MODE_CLASSNAME);
    }

    document.querySelectorAll('[id^="favicon-svg-"]')?.forEach(el => {
      el.setAttribute(
        'href',
        this.isDarkMode ? '/favicon_dark.svg' : '/favicon.svg'
      );
    });
    document.querySelectorAll('[id^="favicon-ico-"]')?.forEach(el => {
      el.setAttribute(
        'href',
        this.isDarkMode ? '/favicon_dark.ico' : '/favicon.ico'
      );
    });
  },
  toggleDarkMode() {
    this.isDarkMode = !this.isDarkMode;
    this.applyDarkMode();
  },

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  personalData: {} as Record<string, any>,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setPersonalData(data: any) {
    this.personalData = data;
  },
});
