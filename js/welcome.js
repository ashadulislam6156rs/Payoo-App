const addMoneyEl = document.getElementById("addMoney-btn");
const addMoneyBtn = document.getElementById("addMoneyBtn");
const logOutBtnEl = document.getElementById("logOut-btn");
const addMoneyFormEl = document.getElementById("addMoneyForm");
const cashOutParentEl = document.getElementById("cashOut-parent");
const cashOutBtnEl = document.getElementById("cashOut-btn");
const userTransferMoneyBtnEl = document.getElementById("userTransferMoney-btn");
const TransferParentEl = document.getElementById("Transfer-parent");
const getBonusBtnEl = document.getElementById("getBonus-btn");
const getBonusParentEl = document.getElementById("getBonus-parent");
const payBillBtnEl = document.getElementById("payBill-btn");
const payBillFormEl = document.getElementById("payBillForm");

const acountNum = "12345678910";
const pinNum = "1234";

/*--------------------> Log Out functinality start <--------------------*/
logOutBtnEl.addEventListener("click", (event) =>{
    window.location.href = `./index.html`;

})

/*--------------------> Toggoling All functinality start <--------------------*/
addMoneyEl.addEventListener("click", (event) =>{
    event.preventDefault();
    addMoneyFormEl.style.display = "block";
    cashOutParentEl.style.display = "none";
    TransferParentEl.style.display = "none";
    getBonusParentEl.style.display = "none";
    payBillFormEl.style.display = "none";
    addMoneyEl.style.backgroundColor = "rgba(8,116,242,0.05)";
    addMoneyEl.style.borderColor = "#0874F2";
    cashOutBtnEl.style.backgroundColor = "";
    cashOutBtnEl.style.borderColor = "";
    userTransferMoneyBtnEl.style.backgroundColor = "";
    userTransferMoneyBtnEl.style.borderColor = "";
    getBonusBtnEl.style.backgroundColor = "";
    getBonusBtnEl.style.borderColor = ""; 
    payBillBtnEl.style.backgroundColor = "";
    payBillBtnEl.style.borderColor = "";

})
cashOutBtnEl.addEventListener("click", (event) =>{
    event.preventDefault();
    addMoneyFormEl.style.display = "none";
    TransferParentEl.style.display = "none";
    getBonusParentEl.style.display = "none";
    payBillFormEl.style.display = "none";
    cashOutParentEl.style.display = "block";
    cashOutBtnEl.style.backgroundColor = "rgba(8,116,242,0.05)";
    cashOutBtnEl.style.borderColor = "#0874F2";
    addMoneyEl.style.backgroundColor = "";
    addMoneyEl.style.borderColor = "";  
    userTransferMoneyBtnEl.style.backgroundColor = "";
    userTransferMoneyBtnEl.style.borderColor = "";
    getBonusBtnEl.style.borderColor = "";
    getBonusBtnEl.style.backgroundColor = "";
    payBillBtnEl.style.backgroundColor = "";
    payBillBtnEl.style.borderColor = "";

})
userTransferMoneyBtnEl.addEventListener("click", (event) =>{
    event.preventDefault();
    addMoneyFormEl.style.display = "none";
    cashOutParentEl.style.display = "none";
    getBonusParentEl.style.display = "none";
    payBillFormEl.style.display = "none";
    TransferParentEl.style.display = "block";
    userTransferMoneyBtnEl.style.backgroundColor = "rgba(8,116,242,0.05)";
    userTransferMoneyBtnEl.style.borderColor = "#0874F2";
    getBonusBtnEl.style.backgroundColor = "";
    getBonusBtnEl.style.borderColor = "";
    addMoneyEl.style.backgroundColor = "";
    addMoneyEl.style.borderColor = ""; 
    cashOutBtnEl.style.backgroundColor = "";
    cashOutBtnEl.style.borderColor = "";
    payBillBtnEl.style.backgroundColor = "";
    payBillBtnEl.style.borderColor = ""; 

})
getBonusBtnEl.addEventListener("click", (event) =>{
    event.preventDefault();
    addMoneyFormEl.style.display = "none";
    cashOutParentEl.style.display = "none";
    TransferParentEl.style.display = "none";
    payBillFormEl.style.display = "none";
    getBonusParentEl.style.display = "block";
    getBonusBtnEl.style.backgroundColor = "rgba(8,116,242,0.05)";
    getBonusBtnEl.style.borderColor = "#0874F2";
    addMoneyEl.style.backgroundColor = "";
    addMoneyEl.style.borderColor = ""; 
    cashOutBtnEl.style.backgroundColor = "";
    cashOutBtnEl.style.borderColor = "";
    userTransferMoneyBtnEl.style.backgroundColor = "";
    userTransferMoneyBtnEl.style.borderColor = "";
    payBillBtnEl.style.backgroundColor = "";
    payBillBtnEl.style.borderColor = "";

})

payBillBtnEl.addEventListener("click", (event) =>{
    event.preventDefault();
    addMoneyFormEl.style.display = "none";
    cashOutParentEl.style.display = "none";
    TransferParentEl.style.display = "none";
    getBonusParentEl.style.display = "none";
    payBillFormEl.style.display = "block";
    payBillBtnEl.style.backgroundColor = "rgba(8,116,242,0.05)";
    payBillBtnEl.style.borderColor = "#0874F2";
    addMoneyEl.style.backgroundColor = "";
    addMoneyEl.style.borderColor = ""; 
    cashOutBtnEl.style.backgroundColor = "";
    cashOutBtnEl.style.borderColor = "";
    userTransferMoneyBtnEl.style.backgroundColor = "";
    userTransferMoneyBtnEl.style.borderColor = "";
    getBonusBtnEl.style.backgroundColor = "";
    getBonusBtnEl.style.borderColor = "";

})
/*--------------------> Add money functinality start <--------------------*/

addMoneyBtn.addEventListener("click", (event) =>{
    event.preventDefault();
    const  addAcountNumElValue = document.getElementById("addAcountNum").value;
    const addPinElValue = document.getElementById("addPin").value;
    const addMoneyMsgEl = document.getElementById("addMoneyMsg"); 
    const addMoneyElValue = parseInt(document.getElementById("addMoney").value);
    const mainBalance = document.getElementById("mainBalance");
    let mainBalanceValue = parseInt(mainBalance.innerText);
    
    if(acountNum === addAcountNumElValue && pinNum === addPinElValue){
        mainBalanceValue = mainBalanceValue + addMoneyElValue;
        mainBalance.innerText = mainBalanceValue;
        addMoneyMsgEl.innerText = "Your money add Successfully";
        addMoneyMsgEl.style.color = "green";

    }
    else{
        addMoneyMsgEl.innerText = "Please valid account number and pin";
        addMoneyMsgEl.style.color = "red";

    }
   
})

/*--------------------> Cash out functinality start <--------------------*/

const withdrawMoneyBtn = document.getElementById("withdrawMoneyBtn");
withdrawMoneyBtn.addEventListener("click", (event) => {
    event.preventDefault();
    const withdrawAcountNumElValue = document.getElementById("withdrawAcountNum").value;
    const withdrawPinElValue = document.getElementById("withdrawPin").value;

    const withdrawMoneyMsgEl = document.getElementById("withdrawMoneyMsg"); 
    const withdrawMoneyElValue = parseInt(document.getElementById("withdrawMoney").value);
    const mainBalance = document.getElementById("mainBalance");
    let mainBalanceValue = parseInt(mainBalance.innerText);

    if(acountNum === withdrawAcountNumElValue && pinNum === withdrawPinElValue){
        mainBalanceValue = mainBalanceValue - withdrawMoneyElValue;
        mainBalance.innerText = mainBalanceValue;
        withdrawMoneyMsgEl.innerText = "Your Withdraw money Successfully";
        withdrawMoneyMsgEl.style.color = "green";
    }
    else{
        withdrawMoneyMsgEl.innerText = "Please valid account number and pin";
        withdrawMoneyMsgEl.style.color = "red";
    }
});

/*--------------------> Transfer money functinality start <--------------------*/
const userSendMoneyBtn = document.getElementById("userSendMoneyBtn");
userSendMoneyBtn.addEventListener("click", (event) => {
    event.preventDefault();
    const userAcountNumElValue = document.getElementById("userAcountNum").value;
    const userPinElValue = document.getElementById("userPin").value;

    const userMoneyMsgMsgEl = document.getElementById("userMoneyMsg"); 
    const transferMoneyElValue = parseInt(document.getElementById("transferMoney").value);
    const mainBalance = document.getElementById("mainBalance");
    let mainBalanceValue = parseInt(mainBalance.innerText);

    if(acountNum === userAcountNumElValue && pinNum === userPinElValue){
        mainBalanceValue = mainBalanceValue - transferMoneyElValue;
        mainBalance.innerText = mainBalanceValue;
        userMoneyMsgMsgEl.innerText = "Your Transfer money Successfully Send";
        userMoneyMsgMsgEl.style.color = "green";
    }
    else{
        userMoneyMsgMsgEl.innerText = "Please valid account number and pin";
        userMoneyMsgMsgEl.style.color = "red";
    }
});

/*--------------------> Get Bonus functinality start <--------------------*/
const getBonusBtn = document.getElementById("getBonusBtn");
getBonusBtn.addEventListener("click", (event) => {
    event.preventDefault();
    const bonusCoupon = "Ashadul";
    const getBonusMsgEl = document.getElementById("getBonusMsg"); 
    const getBonusCoupon = (document.getElementById("getBonusCoupon").value);
    const mainBalance = document.getElementById("mainBalance");
    let mainBalanceValue = parseInt(mainBalance.innerText);

    if(bonusCoupon === getBonusCoupon){
        mainBalanceValue = mainBalanceValue + 200;
        mainBalance.innerText = mainBalanceValue;
        getBonusMsgEl.innerText = "Your Bonus money Successfully Add";
        getBonusMsgEl.style.color = "green";
    }
    else{
        getBonusMsgEl.innerText = "Please Enter your valid Coupon";
        getBonusMsgEl.style.color = "red";
    }
});

/*--------------------> Cash out functinality start <--------------------*/

const payBillBtn = document.getElementById("payBillBtn");
payBillBtn.addEventListener("click", (event) => {
    event.preventDefault();
    const payBillAcountNumElValue = document.getElementById("payBillAcountNum").value;
    const payBillPinElValue = document.getElementById("payBillPin").value;

    const payBillMsgEl = document.getElementById("payBillMsg"); 
    const payBillElValue = parseInt(document.getElementById("payBill").value);
    const mainBalance = document.getElementById("mainBalance");
    let mainBalanceValue = parseInt(mainBalance.innerText);

    if(acountNum === payBillAcountNumElValue && pinNum === payBillPinElValue){
        mainBalanceValue = mainBalanceValue - payBillElValue;
        mainBalance.innerText = mainBalanceValue;
        payBillMsgEl.innerText = "Your Pay Bill Successfully Send";
        payBillMsgEl.style.color = "green";
    }
    else{
        payBillMsgEl.innerText = "Please valid account number and pin";
        payBillMsgEl.style.color = "red";
    }
});





