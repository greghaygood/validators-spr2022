"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var Validations = /*#__PURE__*/function () {
  function Validations() {
    _classCallCheck(this, Validations);

    this.applyValidators();
  }

  _createClass(Validations, [{
    key: "applyValidators",
    value: function applyValidators() {
      document.querySelectorAll("[data-validate]").forEach(function (element) {
        var keys = element.dataset.validate.split(' ');
        console.log("validating with", keys);
        keys.forEach(function (key) {
          switch (key) {
            case 'required':
              new RequiredValidator(element, element.dataset);

            case 'min-length':
              new MinLengthValidator(element, element.dataset);

            case 'email': // new EmailValidator(element, element.dataset)

          }
        });
      });
    }
  }]);

  return Validations;
}(); // new Validations()
//# sourceMappingURL=validations.js.map
