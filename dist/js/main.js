"use strict";

(function () {
  var limitFields = document.querySelectorAll("[data-limit]");
  limitFields.forEach(function (element) {
    new CharLimiter(element);
  });
})();
//# sourceMappingURL=main.js.map
