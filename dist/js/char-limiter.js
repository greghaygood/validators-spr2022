"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * CharLimiter will be given a single DOM element to do its thing.
 * 
 * @var element 
 * @var options
 * 
 * @constructor Takes a single DOM element
 */
var CharLimiter = /*#__PURE__*/function () {
  function CharLimiter(elementFromOutside) {
    var _this = this;

    _classCallCheck(this, CharLimiter);

    _defineProperty(this, "DEFAULT_OPTIONS", {
      max: 10
    });

    _defineProperty(this, "handleKeyDown", function (evt) {
      var curLen = _this.element.value.length;
      var remaining = _this.options.max - curLen;
      console.log("keydown", evt.keyCode, curLen, remaining);

      if (remaining <= 0) {
        if ([8, 46, 37, 39].includes(evt.keyCode)) {
          return;
        } // if (evt.keyCode == 8 || evt.keyCode == 46) { return }


        evt.preventDefault();
      }
    });

    _defineProperty(this, "handleKeyUp", function (evt) {
      var curLen = _this.element.value.length;
      var remaining = _this.options.max - curLen;
    });

    this.element = elementFromOutside;
    this.options = _objectSpread(_objectSpread({}, this.DEFAULT_OPTIONS), this.trimEmpty(elementFromOutside.dataset));
    this.cleanOptions();
    console.log('setting up new CharLimiter for', this.element, this.options);
    this.setup();
  }
  /**
   * Will remove any keys with empty/null values
   * 
   * @param {Object} object 
   * @returns object
   */


  _createClass(CharLimiter, [{
    key: "trimEmpty",
    value: function trimEmpty(object) {
      Object.keys(object).forEach(function (key) {
        if (!object[key]) {
          delete object[key];
        }
      });
      return object;
    }
  }, {
    key: "cleanOptions",
    value: function cleanOptions() {
      var _this2 = this;

      ['max', 'min'].forEach(function (key) {
        if (_this2.options[key]) {
          _this2.options[key] = parseInt(_this2.options[key]);
        }
      });
    }
  }, {
    key: "setup",
    value: function setup() {
      console.log('setting up for ', this.element);
      this.feedback = document.createElement("span");
      this.feedback.classList.add("feedback");
      this.element.parentNode.appendChild(this.feedback);
      this.element.addEventListener('keydown', this.handleKeyDown);
      this.element.addEventListener('keyup', this.handleKeyUp);
    }
  }]);

  return CharLimiter;
}();
//# sourceMappingURL=char-limiter.js.map
