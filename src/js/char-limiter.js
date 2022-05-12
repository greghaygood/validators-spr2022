/**
 * CharLimiter will be given a single DOM element to do its thing.
 * 
 * @var element 
 * @var options
 * 
 * @constructor Takes a single DOM element
 */
class CharLimiter {

    DEFAULT_OPTIONS = {
        max: 10
    }

    constructor(elementFromOutside) {
        this.element = elementFromOutside
        this.options = {
            ...this.DEFAULT_OPTIONS,
            ...this.trimEmpty(elementFromOutside.dataset)
        }
        this.cleanOptions()
        console.log('setting up new CharLimiter for', this.element, this.options)
        this.setup()
    }

    /**
     * Will remove any keys with empty/null values
     * 
     * @param {Object} object 
     * @returns object
     */
    trimEmpty(object) {
        Object.keys(object).forEach((key) => {
            if (!object[key]) {
                delete object[key]
            }
        })
        return object
    }

    cleanOptions() {
        ['max', 'min'].forEach((key) => {
            if (this.options[key]) {
                this.options[key] = parseInt(this.options[key])
            }
        })
    }

    setup() {
        console.log('setting up for ', this.element)

        this.feedback = document.createElement("span")
        this.feedback.classList.add("feedback")
        this.element.parentNode.appendChild(this.feedback)

        this.element.addEventListener('keydown', this.handleKeyDown)
        this.element.addEventListener('keyup', this.handleKeyUp)
    }

    handleKeyDown = (evt) => {
        const curLen = this.element.value.length
        const remaining = this.options.max - curLen
        console.log("keydown", evt.keyCode, curLen, remaining)
        if (remaining <= 0) {
            if ([8, 46, 37, 39].includes(evt.keyCode)) { return }
            // if (evt.keyCode == 8 || evt.keyCode == 46) { return }

            evt.preventDefault()
        }
    }

    handleKeyUp = (evt) => {
        const curLen = this.element.value.length
        const remaining = this.options.max - curLen
    }
}