document.getElementById('user-email').addEventListener('keyup',function(){
    userValidation();
})
document.getElementById('user-password').addEventListener('keyup',function(){
    userValidation();
})
document.getElementById('enter').addEventListener('click', function(){
    if(document.getElementById('user-password').value.length < 6){
        passwordValidation();
    }
    else if(localStorage.getItem(document.getElementById('user-email').value) !== document.getElementById('user-password').value){
        alert("Invalid Username or Password");
    }
    else{
        window.location.href = "dashboard.html";
    }
})
document.querySelector('form').addEventListener('submit', function(e){
    e.preventDefault();
})