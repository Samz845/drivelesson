const emailInput = document.getElementById("email");
const form = document.querySelector("form");
const firstNameInput = document.getElementById("first-name");
const surnameInput = document.getElementById("surname");
const phoneInput = document.getElementById("phone");
const postcodeInput = document.getElementById("postcode");
const infoInput = document.getElementById("info");
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const telephoneRegex = /^(\+1\s?)?(\d{3}[-.\s]?)?\d{3}[-.\s]?\d{4}$/;
const postcodeRegex = /^[A-Za-z]\d[A-Za-z] ?\d[A-Za-z]\d$/;
const postalCon = document.getElementById("postal-div")
const dropDowns = document.querySelectorAll(".dropdown");
const clearStr = (str) => str.replace(/,\s*/g, "");
const isEmailValid = (input) => emailRegex.test(input);
const isPhoneValid = (input) => telephoneRegex.test(input);
const isPostcodeValid = (input) => postcodeRegex.test(input);
postalCon.style.display = "block"
const setError = (input, errorMsg) =>{
    const parent = input.parentElement;
    parent.classList.add("invalid")
    const paragragh = parent.querySelector('span');
    paragragh.innerText = errorMsg;
}

dropDowns.forEach((dropDown, i) =>{
    const btn = dropDown.querySelector(".dropdown-flex");
    const options = dropDown.querySelectorAll(".option");
    const dropdownText = dropDown.querySelector(".dropdown-text");

    btn.addEventListener("click", () =>{
        dropDown.classList.toggle("active")
     })

     options.forEach((option) =>{
        option.addEventListener("click", () =>{
            dropdownText.textContent = option.textContent;
            dropDown.classList.remove("active");
            if(i === 0 && option.dataset.value === "join"){
                postalCon.style.display = "block"
            }else if(i === 0){
                 postalCon.style.display = "none"
            }
        })
    })
})

const clearError = (input) =>{
    const parent = input.parentElement;
    if(parent.classList.contains('invalid')){
        parent.classList.remove("invalid")
    }
    const paragragh = parent.querySelector('span');
    paragragh.innerText = "";
}

form.addEventListener("submit", (e) =>{
    const FirstName = clearStr(firstNameInput.value);
    const surname = clearStr(surnameInput.value);

    if(!isEmailValid(emailInput.value)){
        e.preventDefault()
        setError(emailInput, "Please enter a valid email")
    }else{
        clearError(emailInput);
    }

    if(!isPhoneValid(phoneInput.value)){
        e.preventDefault()
        setError(phoneInput, "Please enter a valid phone number")
    }else{
        clearError(phoneInput);
    }

    if(postalCon.style.display === "block"){
        if(!isPostcodeValid(postcodeInput.value)){
            e.preventDefault()
            setError(postcodeInput, "Please enter a valid postcode");
        }else{
            clearError(postcodeInput);
        }
    }
     
    if(!FirstName){
        e.preventDefault()
        setError(firstNameInput, "Please enter your name")
    }else{
        clearError(firstNameInput)
    }

    if(!surname){
        e.preventDefault()
        setError(surnameInput, "Please enter your surname")
    }else{
        clearError(surnameInput)
    }

    if(!infoInput.value){
        e.preventDefault()
        setError(infoInput, "This section cannot be empty");
    }else{
        clearError(infoInput);
    }
});

