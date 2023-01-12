import { defineStore } from 'pinia';
import { GlobalState, ThemeConfigProp } from './interface';
import { createPinia } from 'pinia';
import piniaPersistConfig from '@/config/pinia-persist';
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate';

export const GlobalStore = defineStore({
    id: 'GlobalState',
    state: (): GlobalState => ({
        isLogin: false,
        csrfToken: '',
        language: '',
        themeConfig: {
            panelName: '',
            primary: '#005EEB',
            theme: 'bright',
            footer: true,
        },
    }),
    getters: {},
    actions: {
        setLogStatus(login: boolean) {
            this.isLogin = login;
        },
        setCsrfToken(token: string) {
            this.csrfToken = token;
        },
        updateLanguage(language: string) {
            this.language = language;
        },
        setThemeConfig(themeConfig: ThemeConfigProp) {
            this.themeConfig = themeConfig;
        },
    },
    persist: piniaPersistConfig('GlobalState'),
});

const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);

export default pinia;
