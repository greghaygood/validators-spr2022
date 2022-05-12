"use strict";

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var BaseValidator = /*#__PURE__*/_createClass(function BaseValidator(element) {
  var _this = this;

  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  _classCallCheck(this, BaseValidator);

  _defineProperty(this, "setupDom", function () {
    if (!_this.element.dataset.messages) {
      _this.element.dataset.messages = JSON.stringify({});
    }

    _this.feedback = _this.element.parentNode.querySelector(".feedback");

    if (!_this.feedback) {
      var span = document.createElement("span");
      span.classList.add("feedback");

      _this.element.parentNode.appendChild(span);

      _this.feedback = span;
    }
  });

  _defineProperty(this, "setupListeners", function () {
    _this.element.addEventListener("change", _this.handleChange);
  });

  _defineProperty(this, "validate", function (value) {
    console.error("No validate() method in child class defined!"); // console.log("BaseValidator.validate with: ", value)

    return false;
  });

  _defineProperty(this, "handleChange", function (evt) {
    var changedValue = _this.element.value;
    _this.isValid = _this.validate(changedValue);
    _this.feedback.textContent = Object.values(JSON.parse(_this.element.dataset.messages)).join(' '); // if (!this.isValid) {
    //     console.log("value is not valid!", changedValue)
    //     this.feedback.textContent = "Not valid!"
    // } else {
    //     console.log("value is valid!", changedValue)
    //     this.feedback.textContent = ""
    // }
  });

  _defineProperty(this, "addError", function (key, message) {
    _this.updateDomMessages(key, message); // this.messages[key] = message

  });

  _defineProperty(this, "removeError", function (key) {
    _this.updateDomMessages(key, ''); // this.messages[key] = ''

  });

  _defineProperty(this, "updateDomMessages", function (key, value) {
    var messages = _this.element.dataset.messages;
    messages = JSON.parse(messages);
    messages[key] = value;
    _this.element.dataset.messages = JSON.stringify(messages);
  });

  this.element = element;
  this.options = options; // this.messages = {}

  this.setupDom();
  this.setupListeners();
});
//# sourceMappingURL=base-validator.js.map
