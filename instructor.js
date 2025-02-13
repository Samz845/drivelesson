const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const form = document.querySelector("form");
const emailDiv = document.getElementById("email-div");
const passwordDiv = document.getElementById("password-div");
const emailRegex = /^[^@\s]+@[^\s@]+\.[a-z]{2,8}([a-z\.]{3,8})?$/;
const passwordErrorElement = document.getElementById("password-error");
const emailErrorElement = document.getElementById("email-error");

const isEmailValid = (str) => emailRegex.test(str);


const setError = (errorElement, errorMsg, container) =>{
    if(container.classList.contains('success')){
        container.classList.remove("success")
    }
    container.classList.add("error")
    errorElement.innerText = errorMsg;
}

const setSuccess = (container, errorElement) =>{
    if(container.classList.contains('error')){
        container.classList.remove('error')
    }
    container.classList.add('success');
    errorElement.innerText = "";
}

emailInput.addEventListener("keyup", () =>{
    if(!isEmailValid(emailInput.value)){
        setError(emailErrorElement, "please enter a valid email", emailDiv )
    }

    else{
        setSuccess(emailDiv, emailErrorElement)
    }
})

passwordInput.addEventListener("keyup", () =>{
    if(!passwordInput.value.trim()){
        setError(passwordErrorElement, "please enter a valid password", passwordDiv)
    }
    else if(passwordInput.value.length <= 7){
        setError(passwordErrorElement, "password must me greater than 7 characters", passwordDiv)
    }
    
    else{
        setSuccess(passwordDiv, passwordErrorElement)
    }
}) 

form.addEventListener("submit", (e) =>{
    if(!isEmailValid(emailInput.value)){
        e.preventDefault()
        setError(emailErrorElement, "please enter a valid email", emailDiv )
    }

    else{
        setSuccess(emailDiv, emailErrorElement)
    }

    if(!passwordInput.value.trim()){
        e.preventDefault()
        setError(passwordErrorElement, "please enter a valid password", passwordDiv)
    }
    else if(passwordInput.value.length <= 7){
        e.preventDefault()
        setError(passwordErrorElement, "password must me greater than 7 characters", passwordDiv)
    }
    
    else{
        setSuccess(passwordDiv, passwordErrorElement)
    }
})