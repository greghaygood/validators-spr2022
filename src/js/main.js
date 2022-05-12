(function() {
    const limitFields = document.querySelectorAll("[data-limit]");
    limitFields.forEach((element) => {
        new CharLimiter(element);
    })
}());