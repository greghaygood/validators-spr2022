(function() {
    // const limitFields = document.querySelectorAll("[data-limit]");
    // limitFields.forEach((element) => {
    //     new CharLimiter(element);
    // })
    new Validations()
}());


// examples of inheritance

class BaseClass {
    constructor(options = {}) {
        // console.log("BaseClass()", options)
        this.print("BaseClass()", options)
    }

    print(...message) {
        //console.log(...message)
    }
}

// const bc = new BaseClass()

class ChildClass1 extends BaseClass {
    constructor(options = {}) {
        super(options)
        // console.log("ChildClass1", options)
        this.print("ChildClass1", options)
    }
}

// const cc1 = new ChildClass1()