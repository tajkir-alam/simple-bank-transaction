
document.getElementById('signup-email').addEventListener('keyup', function(){
    const signupEmail = document.getElementById('signup-email').value;
    const signupPassword = document.getElementById('signup-password').value;

    if(signupEmail !== "" && signupPassword !== ""){
        document.getElementById('btn-signup').removeAttribute('disabled');
    }
    else{
        document.getElementById('btn-signup').setAttribute('disabled', true);
    }
})
document.getElementById('signup-password').addEventListener('keyup', function(){
    const signupEmail = document.getElementById('signup-email').value;
    const signupPassword = document.getElementById('signup-password').value;

    if(signupEmail !== "" && signupPassword !== ""){
        document.getElementById('btn-signup').removeAttribute('disabled');
    }
    else{
        document.getElementById('btn-signup').setAttribute('disabled', true);
    }
})



document.getElementById('btn-signup').addEventListener('click', function(){
    const signupEmail = document.getElementById('signup-email').value;
    const signupPassword = document.getElementById('signup-password').value;
    if(signupPassword.length < 6 ){
        const checkPassword = document.createElement('p');
        checkPassword.className = "text-red-500 font-medium";
        checkPassword.innerText = "Your have to enter minimum 6 digit password";
        document.getElementById('signup-input-section').appendChild(checkPassword);
    }
    else{
        window.location.href = "index.html";
        window.localStorage.setItem(signupEmail, signupPassword)
    }
})

