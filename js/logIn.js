const logInBtnEl = document.getElementById("logIn-btn");

logInBtnEl.addEventListener('click', (event)=> {
    event.preventDefault();
    const phonNumber = '12345678910';
    const pinNumber = '1234';

    const phnNumValue = (document.getElementById("phnNum").value);
    const pinNumValue = (document.getElementById("pinNum").value);
    const warningMsg = document.getElementById("error-success");
    
    
    if(phnNumValue.length > 11){
        alert("Please Enter Maximum 11 Digit Account number");
        return;
    }
    if(pinNumValue.length > 4){
        alert("Please Enter Maximum 4 Digit Pin Number");
        return;
    }
    if(phonNumber === phnNumValue && pinNumber === pinNumValue){
        window.location.href = "./welcome.html";
        alert("Your login process succesfully");
    }
    else{
        warningMsg.innerText = "Please valid phone number and pin";
        warningMsg.style.color = "red";
    }
    
    

})