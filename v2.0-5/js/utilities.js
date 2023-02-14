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
