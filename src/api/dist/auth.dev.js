"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useAuth = void 0;

var _axios = _interopRequireDefault(require("./axios.js"));

var _auth = require("@/store/auth");

var _question = require("./question");

var _level = require("@/store/level");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var useAuth = function useAuth() {
  var createAccount = function createAccount(email, teamName) {
    var authStore, data, response;
    return regeneratorRuntime.async(function createAccount$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            authStore = (0, _auth.useAuthStore)();
            data = JSON.stringify({
              email: email,
              teamName: teamName
            });
            console.log(_axios["default"]);
            _context.prev = 3;
            _context.next = 6;
            return regeneratorRuntime.awrap(_axios["default"].post('/auth/enter', data));

          case 6:
            response = _context.sent;

            if (response.data.accessToken) {
              authStore.setAccessToken(response.data.accessToken);
              authStore.setEmail(response.data.email);
            }

            return _context.abrupt("return", response.data);

          case 11:
            _context.prev = 11;
            _context.t0 = _context["catch"](3);
            return _context.abrupt("return", _context.t0);

          case 14:
          case "end":
            return _context.stop();
        }
      }
    }, null, null, [[3, 11]]);
  };

  var login = function login(password) {
    var authStore, email, levelStore, _useQuesion, getAllQuestion, data, response;

    return regeneratorRuntime.async(function login$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            authStore = (0, _auth.useAuthStore)();
            email = authStore.getEmail();
            levelStore = (0, _level.useLevelStore)();
            _useQuesion = (0, _question.useQuesion)(), getAllQuestion = _useQuesion.getAllQuestion;
            data = JSON.stringify({
              email: email,
              password: password
            });
            _context2.prev = 5;
            _context2.next = 8;
            return regeneratorRuntime.awrap(_axios["default"].post('/auth/login', data));

          case 8:
            response = _context2.sent;

            if (response.data.accessToken) {
              authStore.setAccessToken(response.data.accessToken);
              authStore.setEmail(response.data.email);
              levelStore.setLevel(-1);
              getAllQuestion();
            }

            return _context2.abrupt("return", response.data);

          case 13:
            _context2.prev = 13;
            _context2.t0 = _context2["catch"](5);
            return _context2.abrupt("return", _context2.t0);

          case 16:
          case "end":
            return _context2.stop();
        }
      }
    }, null, null, [[5, 13]]);
  };

  return {
    createAccount: createAccount,
    login: login
  };
};

exports.useAuth = useAuth;