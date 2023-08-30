"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useQuesion = void 0;

var _axios = _interopRequireDefault(require("./axios"));

var _level = require("@/store/level");

var _auth = require("@/store/auth");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var getAuthorizationHeader = function getAuthorizationHeader(accessToken) {
  return {
    Authorization: "Bearer ".concat(accessToken)
  };
};

var useQuesion = function useQuesion() {
  var getAllQuestion = function getAllQuestion() {
    var levelStore, authStore, response, data, uri;
    return regeneratorRuntime.async(function getAllQuestion$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            levelStore = (0, _level.useLevelStore)();
            authStore = (0, _auth.useAuthStore)();
            _context.prev = 2;
            _context.next = 5;
            return regeneratorRuntime.awrap(_axios["default"].get('/question/', {
              headers: getAuthorizationHeader(authStore.accessToken)
            }));

          case 5:
            response = _context.sent;
            data = response.data;
            levelStore.allQuestion = data;

            if (data.questionId) {
              levelStore.hint = 0;
              levelStore.level += 1;

              if (levelStore.level < levelStore.allQuestion.noquestion) {
                uri = "/quiz/" + data.questionId[levelStore.level];
              } else {
                uri = "/winner-list";
              }

              levelStore.setnextURI(uri);
            }

            return _context.abrupt("return", data);

          case 12:
            _context.prev = 12;
            _context.t0 = _context["catch"](2);
            console.error('Error fetching all questions:', _context.t0);

          case 15:
          case "end":
            return _context.stop();
        }
      }
    }, null, null, [[2, 12]]);
  };

  var getQuestionById = function getQuestionById(questionId) {
    var authStore, response, data;
    return regeneratorRuntime.async(function getQuestionById$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            authStore = (0, _auth.useAuthStore)();
            _context2.prev = 1;
            _context2.next = 4;
            return regeneratorRuntime.awrap(_axios["default"].get("/question/get/".concat(questionId), {
              headers: getAuthorizationHeader(authStore.accessToken)
            }));

          case 4:
            response = _context2.sent;
            data = response.data;
            return _context2.abrupt("return", data);

          case 9:
            _context2.prev = 9;
            _context2.t0 = _context2["catch"](1);
            console.error("Error fetching question with ID ".concat(questionId, ":"), _context2.t0);

          case 12:
          case "end":
            return _context2.stop();
        }
      }
    }, null, null, [[1, 9]]);
  };

  var getHintById = function getHintById(questionId, hintId) {
    var authStore, response, data;
    return regeneratorRuntime.async(function getHintById$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            authStore = (0, _auth.useAuthStore)();
            _context3.prev = 1;
            _context3.next = 4;
            return regeneratorRuntime.awrap(_axios["default"].get("/question/get/".concat(questionId, "/hint/").concat(hintId), {
              headers: getAuthorizationHeader(authStore.accessToken)
            }));

          case 4:
            response = _context3.sent;
            data = response.data;
            return _context3.abrupt("return", data);

          case 9:
            _context3.prev = 9;
            _context3.t0 = _context3["catch"](1);
            throw "Error fetching hint for question with ID ".concat(questionId, ":");

          case 12:
          case "end":
            return _context3.stop();
        }
      }
    }, null, null, [[1, 9]]);
  };

  return {
    getAllQuestion: getAllQuestion,
    getQuestionById: getQuestionById,
    getHintById: getHintById
  };
};

exports.useQuesion = useQuesion;