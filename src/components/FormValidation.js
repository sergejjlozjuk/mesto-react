

export default function FormValidation () {
    const formList = Array.from(document.forms)
    formList.forEach(form => {
        addValidation(form)
    })
    function addValidation (form) {
        const inputList = Array.from(form.getElementsByTagName('input'))
        inputList.forEach(input => {
            setListeners(input)
        })
    }
    function setListeners (input) {
        input.addEventListener('input', checkValidation)
    }
    function checkValidation (e) {
        console.log(e.target.validity)
    }



}

