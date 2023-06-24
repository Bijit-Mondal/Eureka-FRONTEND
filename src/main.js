import { createApp } from 'vue'
import App from './App.vue'
import Vuesax from 'vuesax3'
import './theme/style.styl'
import 'material-icons/iconfont/material-icons.css';


import 'vuesax3/dist/vuesax.css'
import router from './router'

createApp(App)
    .use(router)
    .use(Vuesax,{
        theme:{
          colors:{
            primary:'#E91A42',
          }
        }
      })
    .mount('#app')
