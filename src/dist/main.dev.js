"use strict";

var _vue = require("vue");

var _pinia = require("pinia");

var _piniaPluginPersistedstate = _interopRequireDefault(require("pinia-plugin-persistedstate"));

var _App = _interopRequireDefault(require("./App.vue"));

var _vuesax = _interopRequireDefault(require("vuesax3"));

require("./theme/style.styl");

require("material-icons/iconfont/material-icons.css");

require("vuesax3/dist/vuesax.css");

var _router = _interopRequireDefault(require("./router"));

var _auth = require("./store/auth");

var _level = require("./store/level");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var pinia = (0, _pinia.createPinia)();
pinia.use(_piniaPluginPersistedstate["default"]);
var app = (0, _vue.createApp)(_App["default"]);
app.use(_router["default"]);
app.use(_vuesax["default"], {
  theme: {
    colors: {
      primary: '#E91A42'
    }
  }
});
app.use(pinia);
app.mount('#app');
var storedAuth = JSON.parse(localStorage.getItem('auth'));
var storedLevel = JSON.parse(localStorage.getItem('level'));

if (storedAuth) {
  var authStore = (0, _auth.useAuthStore)();
  Object.assign(authStore, storedAuth);
}

if (storedLevel) {
  var levelStore = (0, _level.useLevelStore)();
  Object.assign(levelStore, storedLevel);
}