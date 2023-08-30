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
            _context.prev = 2;
            _context.next = 5;
            return regeneratorRuntime.awrap(_axios["default"].post('/auth/enter', data));

          case 5:
            response = _context.sent;

            if (response.data.accessToken) {
              authStore.setAccessToken(response.data.accessToken);
              authStore.setEmail(response.data.email);
            }

            return _context.abrupt("return", response.data);

          case 10:
            _context.prev = 10;
            _context.t0 = _context["catch"](2);
            return _context.abrupt("return", _context.t0);

          case 13:
          case "end":
            return _context.stop();
        }
      }
    }, null, null, [[2, 10]]);
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
              levelStore.setLevel(response.data.level);
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

  var loginAgain = function loginAgain(email, password) {
    var authStore, levelStore, _useQuesion2, getAllQuestion, data, response;

    return regeneratorRuntime.async(function loginAgain$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            authStore = (0, _auth.useAuthStore)();
            levelStore = (0, _level.useLevelStore)();
            _useQuesion2 = (0, _question.useQuesion)(), getAllQuestion = _useQuesion2.getAllQuestion;
            data = JSON.stringify({
              email: email,
              password: password
            });
            _context3.prev = 4;
            _context3.next = 7;
            return regeneratorRuntime.awrap(_axios["default"].post('/auth/login', data));

          case 7:
            response = _context3.sent;

            if (response.data.accessToken) {
              authStore.setAccessToken(response.data.accessToken);
              authStore.setEmail(response.data.email);
              levelStore.setLevel(response.data.level);
              getAllQuestion();
            }

            return _context3.abrupt("return", response.data);

          case 12:
            _context3.prev = 12;
            _context3.t0 = _context3["catch"](4);
            return _context3.abrupt("return", _context3.t0);

          case 15:
          case "end":
            return _context3.stop();
        }
      }
    }, null, null, [[4, 12]]);
  };

  return {
    createAccount: createAccount,
    login: login,
    loginAgain: loginAgain
  };
};

exports.useAuth = useAuth;