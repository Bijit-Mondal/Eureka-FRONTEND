import { createApp } from 'vue';
import { createPinia } from 'pinia';
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate';
import App from './App.vue';
import Vuesax from 'vuesax3';
import './theme/style.styl';
import 'material-icons/iconfont/material-icons.css';
import 'vuesax3/dist/vuesax.css';
import router from './router';
import { useAuthStore } from './store/auth';
import { useLevelStore } from './store/level';

const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);

const app = createApp(App);
app.use(router);
app.use(Vuesax, {
  theme: {
    colors: {
      primary: '#E91A42',
    },
  },
});
app.use(pinia);
app.mount('#app');

const storedAuth = JSON.parse(localStorage.getItem('auth'));
const storedLevel = JSON.parse(localStorage.getItem('level'));
if (storedAuth) {
  const authStore = useAuthStore();
  Object.assign(authStore, storedAuth);
}
if(storedLevel){
  const levelStore = useLevelStore();
  Object.assign(levelStore, storedLevel);
}
