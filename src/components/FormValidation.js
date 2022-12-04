

export default class FormValidation {
    enableValidation (formName, isOpen) {
        this.isOpen = isOpen
        this.form = document.forms[formName]
        this.inputList = Array.from(this.form.getElementsByTagName('input'))
        this.submitButton = this.form.querySelector('.form__submit')
        this.setEventlisteners()
        this.disabledButton()
    }
     setEventlisteners () {
        this.inputList.forEach(input => {
            input.addEventListener('input', this.handleInputEvent)
        })
    }
     handleInputEvent (e) {
        console.log(e.target.validity)
    }
    checkValid () {

    }
    disabledButton (){
        console.log(this.submitButton)
    }
}

