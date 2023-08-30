"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useScore = void 0;

var _axios = _interopRequireDefault(require("./axios"));

var _question = require("./question");

var _auth = require("@/store/auth");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var getAuthorizationHeader = function getAuthorizationHeader(accessToken) {
  return {
    Authorization: "Bearer ".concat(accessToken)
  };
};

var useScore = function useScore() {
  var scoreUpdate = function scoreUpdate(QId, answer) {
    var _useQuesion, getAllQuestion, authStore, data, response, res;

    return regeneratorRuntime.async(function scoreUpdate$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _useQuesion = (0, _question.useQuesion)(), getAllQuestion = _useQuesion.getAllQuestion;
            authStore = (0, _auth.useAuthStore)();
            data = JSON.stringify({
              QId: QId,
              answer: answer
            });
            _context.prev = 3;
            _context.next = 6;
            return regeneratorRuntime.awrap(_axios["default"].post('/score/add', data, {
              headers: getAuthorizationHeader(authStore.accessToken)
            }));

          case 6:
            response = _context.sent;
            res = response.data;

            if (res.msg === "Correct Answer") {
              getAllQuestion();
            }

            return _context.abrupt("return", res);

          case 12:
            _context.prev = 12;
            _context.t0 = _context["catch"](3);
            return _context.abrupt("return", _context.t0);

          case 15:
          case "end":
            return _context.stop();
        }
      }
    }, null, null, [[3, 12]]);
  };

  var getResult = function getResult() {
    var authStore, response;
    return regeneratorRuntime.async(function getResult$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            authStore = (0, _auth.useAuthStore)();
            _context2.prev = 1;
            _context2.next = 4;
            return regeneratorRuntime.awrap(_axios["default"].get('/auth/result', {
              headers: getAuthorizationHeader(authStore.accessToken)
            }));

          case 4:
            response = _context2.sent;
            return _context2.abrupt("return", response);

          case 8:
            _context2.prev = 8;
            _context2.t0 = _context2["catch"](1);
            console.error('Error fetching result:', _context2.t0);

          case 11:
          case "end":
            return _context2.stop();
        }
      }
    }, null, null, [[1, 8]]);
  };

  return {
    scoreUpdate: scoreUpdate,
    getResult: getResult
  };
};

exports.useScore = useScore;