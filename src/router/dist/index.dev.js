"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _vueRouter = require("vue-router");

var _HomeView = _interopRequireDefault(require("../views/HomeView.vue"));

var _auth = require("@/store/auth");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var routes = [{
  path: '/',
  name: 'home',
  component: _HomeView["default"]
}, {
  path: '/winner-list',
  component: _HomeView["default"]
}, {
  path: '/otp',
  name: 'otp',
  component: function component() {
    return Promise.resolve().then(function () {
      return _interopRequireWildcard(require('../views/OTPView.vue'));
    });
  },
  meta: {
    requiresAuth: true
  }
}, {
  path: '/quiz/:id',
  name: 'quiz',
  component: function component() {
    return Promise.resolve().then(function () {
      return _interopRequireWildcard(require('../views/QuestionView.vue'));
    });
  },
  meta: {
    requiresAuth: true
  }
}];
var router = (0, _vueRouter.createRouter)({
  history: (0, _vueRouter.createWebHistory)(process.env.BASE_URL),
  routes: routes
});
router.beforeEach(function (to, from, next) {
  var authStore = (0, _auth.useAuthStore)();

  if (to.meta.requiresAuth && !authStore.accessToken) {
    next('/'); // Redirect to the home route if not logged in and route requires authentication
  } else {
    next(); // Proceed with the navigation
  }
});
var _default = router;
exports["default"] = _default;