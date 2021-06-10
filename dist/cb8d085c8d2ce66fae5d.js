import _asyncToGenerator from "@babel/runtime/helpers/asyncToGenerator";
import _regeneratorRuntime from "@babel/runtime/regenerator";

require('@babel/runtime/regenerator');

require('./main.css'); // require('./images/test.jpg')


require('./index.html');

var a = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee(args) {
    var a, b, c;
    return _regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            a = args.a, b = args.b, c = args.c;
            _context.next = 3;
            return console.log('Hello from the future');

          case 3:
            console.log('this will be converted', a, b, c);

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function a(_x) {
    return _ref.apply(this, arguments);
  };
}();

debugger;
a({
  a: 1,
  b: 2,
  c: 'three'
});