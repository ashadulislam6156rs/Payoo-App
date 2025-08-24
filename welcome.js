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
const transitionBtnEl = document.getElementById("transition-btn");
const transitionListFormEl = document.getElementById("transitionList-parent");
const transitionListEl = document.getElementById("transition-list");

const acountNum = "12345678910";
const pinNum = "1234";

let transactionResult = [];

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
    transitionListFormEl.style.display = "none";
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
    transitionBtnEl.style.backgroundColor = "";
    transitionBtnEl.style.borderColor = "";

})
cashOutBtnEl.addEventListener("click", (event) =>{
    event.preventDefault();
    addMoneyFormEl.style.display = "none";
    TransferParentEl.style.display = "none";
    getBonusParentEl.style.display = "none";
    payBillFormEl.style.display = "none";
    transitionListFormEl.style.display = "none";
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
    transitionBtnEl.style.backgroundColor = "";
    transitionBtnEl.style.borderColor = "";


})
userTransferMoneyBtnEl.addEventListener("click", (event) =>{
    event.preventDefault();
    addMoneyFormEl.style.display = "none";
    cashOutParentEl.style.display = "none";
    getBonusParentEl.style.display = "none";
    payBillFormEl.style.display = "none";
    transitionListFormEl.style.display = "none";
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
    transitionBtnEl.style.backgroundColor = "";
    transitionBtnEl.style.borderColor = "";

})
getBonusBtnEl.addEventListener("click", (event) =>{
    event.preventDefault();
    addMoneyFormEl.style.display = "none";
    cashOutParentEl.style.display = "none";
    TransferParentEl.style.display = "none";
    payBillFormEl.style.display = "none";
    transitionListFormEl.style.display = "none";
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
    transitionBtnEl.style.backgroundColor = "";
    transitionBtnEl.style.borderColor = "";

})

payBillBtnEl.addEventListener("click", (event) =>{
    event.preventDefault();
    addMoneyFormEl.style.display = "none";
    cashOutParentEl.style.display = "none";
    TransferParentEl.style.display = "none";
    getBonusParentEl.style.display = "none";
    transitionListFormEl.style.display = "none";
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
    transitionBtnEl.style.backgroundColor = "";
    transitionBtnEl.style.borderColor = "";

})
transitionBtnEl.addEventListener("click", (event) =>{
    event.preventDefault();
    addMoneyFormEl.style.display = "none";
    cashOutParentEl.style.display = "none";
    TransferParentEl.style.display = "none";
    getBonusParentEl.style.display = "none";
    payBillFormEl.style.display = "none";
    transitionListFormEl.style.display = "block";
    transitionBtnEl.style.backgroundColor = "rgba(8,116,242,0.05)";
    transitionBtnEl.style.borderColor = "#0874F2";
    addMoneyEl.style.backgroundColor = "";
    addMoneyEl.style.borderColor = ""; 
    cashOutBtnEl.style.backgroundColor = "";
    cashOutBtnEl.style.borderColor = "";
    userTransferMoneyBtnEl.style.backgroundColor = "";
    userTransferMoneyBtnEl.style.borderColor = "";
    getBonusBtnEl.style.backgroundColor = "";
    getBonusBtnEl.style.borderColor = "";
    payBillBtnEl.style.backgroundColor = "";
    payBillBtnEl.style.borderColor = "";
    transitionListEl.innerText = '';
    

   for(let element of transactionResult){
     let div = document.createElement("div");
    div.innerHTML = `<div class="rounded-xl bg-white p-3 text-base flex justify-between items-center">
               <div class="flex items-center gap-4">
                   <img class="rounded-full bg-[#f2f2f2] p-3" src="${element.img}" alt="">
                  <div>
                    <h1 class="text-lg font-semibold text-[rgba(8,8,8,0.7)]">${element.name}</h1>
                    <p class="font-medium text-xs text-gray-500">${element.time}</p>
                  </div>
               </div>
               <div>
                    <a class="text-lg text-[#080808]" href="#"><i class="fa-solid fa-ellipsis-vertical"></i></a>
               </div>

           </div>`;

    transitionListEl.appendChild(div);
   }

   


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

    const data = {
    img: './assets/wallet1.png',
    name: 'Add Money',
    time: new Date().toLocaleTimeString()

}
transactionResult.push(data);

document.getElementById("addAcountNum").value = "";
document.getElementById("addMoney").value = "";
document.getElementById("addPin").value = "";

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

               const data = {
    img: './assets/send1.png',
    name: 'Cash Out',
    time: new Date().toLocaleTimeString()

}
transactionResult.push(data);

document.getElementById("withdrawAcountNum").value = "";
document.getElementById("withdrawPin").value = "";
document.getElementById("withdrawMoney").value = "";

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

           const data = {
    img: './assets/money1.png',
    name: 'Transfer Money',
    time: new Date().toLocaleTimeString()

}
transactionResult.push(data);

document.getElementById("userAcountNum").value = "";
document.getElementById("userPin").value = "";
document.getElementById("transferMoney").value = "";

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

           const data = {
    img: './assets/bonus1.png',
    name: 'Get Bonus',
    time: new Date().toLocaleTimeString()

}
transactionResult.push(data);

document.getElementById("getBonusCoupon").value = "";

}
else{
        getBonusMsgEl.innerText = "Please Enter your valid Coupon";
        getBonusMsgEl.style.color = "red";
    }
});

/*--------------------> Pay Bill functinality start <--------------------*/

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
           const data = {
    img: './assets/purse1.png',
    name: 'Pay Bill',
    time: new Date().toLocaleTimeString()

}
transactionResult.push(data);

document.getElementById("payBillAcountNum").value = "";
document.getElementById("payBillPin").value ="";
document.getElementById("payBill").value ="";
    }
    else{
        payBillMsgEl.innerText = "Please valid account number and pin";
        payBillMsgEl.style.color = "red";
    }
});







