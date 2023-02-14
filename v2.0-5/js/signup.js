document.getElementById('user-email').addEventListener('keyup', function(){
    userValidation();
})

document.getElementById('user-password').addEventListener('keyup', function(){
    userValidation();
})

document.querySelector('form').addEventListener('submit', function(e){
    e.preventDefault();
})

document.getElementById('enter').addEventListener('click', function(){
    if(document.getElementById('user-password').value.length < 6){
        passwordValidation();
    }
    else{
        const userEmail = document.getElementById('user-email').value;
        const userPassword = document.getElementById('user-password').value;
        window.location.href = "index.html";
        window.localStorage.setItem(userEmail, userPassword);
    }
})