"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useLevelStore = void 0;

var _pinia = require("pinia");

var _vue = require("vue");

var _vueRouter = require("vue-router");

var useLevelStore = (0, _pinia.defineStore)('level', {
  state: function state() {
    return {
      level: null,
      nextURI: '/otp',
      hint: 0,
      allQuestion: null
    };
  },
  persist: true,
  actions: {
    setLevel: function setLevel(level) {
      this.level = level;
    },
    leveUpgrade: function leveUpgrade() {
      this.level++;
    },
    setnextURI: function setnextURI(nextURI) {
      this.nextURI = nextURI;
    }
  },
  setup: function setup() {
    var _this = this;

    var router = (0, _vueRouter.useRouter)(); // Watch for changes in `nextURI` and navigate to the new route

    (0, _vue.watch)(function () {
      return _this.nextURI;
    }, function (newURI) {
      router.push(newURI);
    });
  }
});
exports.useLevelStore = useLevelStore;