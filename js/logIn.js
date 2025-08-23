const logInBtnEl = document.getElementById("logIn-btn");

logInBtnEl.addEventListener('click', (event)=> {
    event.preventDefault();
    const phonNumber = 12345678910;
    const pinNumber = 1234;

    const phnNumValue = parseInt(document.getElementById("phnNum").value);
    const pinNumValue = parseInt(document.getElementById("pinNum").value);
    const warningMsg = document.getElementById("error-success");
    if(phonNumber === phnNumValue && pinNumber === pinNumValue){
        window.location.href = "./welcome.html";
        alert("Your login process succesfully");
    }
    else{
        warningMsg.innerText = "Please valid phone number and pin";
        warningMsg.style.color = "red";
    }
    
    

})