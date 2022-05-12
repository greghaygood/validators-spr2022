class Validations {
    constructor() {
        this.applyValidators()
    }

    applyValidators() {
        document.querySelectorAll("[data-validate]").forEach((element) => {
            const keys = element.dataset.validate.split(' ')
            console.log("validating with", keys)
            keys.forEach((key) => {
                switch (key) {
                    case 'required':
                        new RequiredValidator(element, element.dataset)
                    case 'min-length':
                        new MinLengthValidator(element, element.dataset)
        
                    case 'email':
                        // new EmailValidator(element, element.dataset)

                }
            })
        })
    }
}

// new Validations()