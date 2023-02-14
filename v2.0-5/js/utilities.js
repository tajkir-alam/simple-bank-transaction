// ----->>>>> User Validation section

function userValidation(){
    const userEmail = document.getElementById('user-email').value;
    const userPassword = document.getElementById('user-password').value;

    if(userEmail !== "" && userPassword !== ""){
        document.getElementById('enter').removeAttribute('disabled');
        return;
    }
    else{
        document.getElementById('enter').setAttribute('disabled', true);
        return;
    }
}
function passwordValidation(){
    const p = document.createElement('p');
    p.className = "text-red-500 font-medium"
    p.innerText = "You have to provide minimum 6 digit password";
    document.getElementById('authintication-section').appendChild(p);
    document.querySelectorAll('p')[1].remove();
}



// ----->>>>> Dashboard calculation

function activeButton(inputValue, btnName){
    const inputValueString = document.getElementById(inputValue).value;
    const inputValueNumber = parseFloat(inputValueString);
    if(inputValueString !== ""){
        document.getElementById(btnName).removeAttribute('disabled');
        return;
    }
    else{
        document.getElementById(btnName).setAttribute('disabled', true);
        return;
    }
}
function toBalance(inputValue, existingAmount){
    const inputValueString = document.getElementById(inputValue).value;
    const inputValueNumber = parseFloat(inputValueString); 
    const depositBalanceString = document.getElementById(existingAmount).innerText;
    const depositBalanceNumber = parseFloat(depositBalanceString);

    const currentDepositBalance = depositBalanceNumber + inputValueNumber;
    document.getElementById(existingAmount).innerText = currentDepositBalance;
}
function depositToTotal(inputValue, existingAmount){
    const inputValueString = document.getElementById(inputValue).value;
    const inputValueNumber = parseFloat(inputValueString); 
    const totalBalanceString = document.getElementById(existingAmount).innerText;
    const totalBalanceNumber = parseFloat(totalBalanceString);

    const newTotalBalance = totalBalanceNumber + inputValueNumber;
    document.getElementById(existingAmount).innerText = newTotalBalance;
    document.getElementById(inputValue).value = "";
}
function withdrawToTotal(inputValue, existingAmount){
    const inputValueString = document.getElementById(inputValue).value;
    const inputValueNumber = parseFloat(inputValueString); 
    const totalBalanceString = document.getElementById(existingAmount).innerText;
    const totalBalanceNumber = parseFloat(totalBalanceString);

    const newTotalBalance = totalBalanceNumber - inputValueNumber;
    document.getElementById(existingAmount).innerText = newTotalBalance;
    document.getElementById(inputValue).value = "";
}