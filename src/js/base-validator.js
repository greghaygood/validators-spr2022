class BaseValidator {
    constructor(element, options = {}) {
        this.element = element
        this.options = options
        // this.messages = {}

        this.setupDom()
        this.setupListeners()
    }

    setupDom = () => {
        if (!this.element.dataset.messages) {
            this.element.dataset.messages = JSON.stringify({})
        }

        this.feedback = this.element.parentNode.querySelector(".feedback")
        if (!this.feedback) {
            const span = document.createElement("span")
            span.classList.add("feedback")
            this.element.parentNode.appendChild(span)

            this.feedback = span
        }
    }

    setupListeners = () => {
        this.element.addEventListener("change", this.handleChange)
    }

    validate = (value) => {
        console.error("No validate() method in child class defined!")
        // console.log("BaseValidator.validate with: ", value)
        return false
    }

    // convention is that all child validator classes have a validate() method
    handleChange = (evt) => {
        const changedValue = this.element.value

        this.isValid = this.validate(changedValue)

        this.feedback.textContent = Object.values(JSON.parse(this.element.dataset.messages)).join(' ')
        // if (!this.isValid) {
        //     console.log("value is not valid!", changedValue)
        //     this.feedback.textContent = "Not valid!"
        // } else {
        //     console.log("value is valid!", changedValue)
        //     this.feedback.textContent = ""
        // }
    }

    addError = (key, message) => {
        this.updateDomMessages(key, message)
        // this.messages[key] = message
    }

    removeError = (key) => {
        this.updateDomMessages(key, '')
        // this.messages[key] = ''
    }

    updateDomMessages = (key, value) => {
        let messages = this.element.dataset.messages
        messages = JSON.parse(messages)
        messages[key] = value
        this.element.dataset.messages = JSON.stringify(messages)
    }
}