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
  var scoreUpdate = function scoreUpdate(QId, answer, score) {
    var _useQuesion, getAllQuestion, authStore, data, response, res;

    return regeneratorRuntime.async(function scoreUpdate$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _useQuesion = (0, _question.useQuesion)(), getAllQuestion = _useQuesion.getAllQuestion;
            authStore = (0, _auth.useAuthStore)();
            data = JSON.stringify({
              QId: QId,
              answer: answer,
              score: score
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

  return {
    scoreUpdate: scoreUpdate
  };
};

exports.useScore = useScore;