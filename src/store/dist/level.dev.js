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
      level: -1,
      hintUsed: 0,
      score: null,
      nextURI: '/otp',
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
    setHint: function setHint(hintUsed) {
      this.hintUsed = hintUsed;
    },
    setnextURI: function setnextURI(nextURI) {
      this.nextURI = nextURI;
    },
    hintUsing: function hintUsing() {
      this.hintUsed++;
    },
    setScore: function setScore() {
      this.score -= 5;
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