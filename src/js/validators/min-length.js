class MinLengthValidator extends BaseValidator {
    validate = (changedValue) => {
        console.log("checking for min length", changedValue)
        const minLength = parseInt(this.options.minLength)
        const isValid = changedValue.length > minLength
        if (isValid) {
            this.removeError("min-length")
        } else {
            this.addError("min-length", "Value is too short.")
        }

        return isValid
    }
}