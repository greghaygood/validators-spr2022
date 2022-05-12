class RequiredValidator extends BaseValidator {
    validate = (value) => {
        console.log("RequiredValidator.validate with: ", value)
        // return !!value
        const isValid = value && value.length > 0
        if (isValid) {
            this.removeError('required')
        } else {
            this.addError('required', 'Field is required.')
        }

        return isValid
    }
}