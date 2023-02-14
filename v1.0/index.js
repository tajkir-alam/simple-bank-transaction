document.getElementById('btn-login').addEventListener('click', function(){
    const inputUserName = document.getElementById('input-userName');
    const inputPassword = document.getElementById('input-password');

    if(inputUserName.value === "rion" && inputPassword.value === "tkuthabo" && inputPassword.value.length > 6){
        window.location.href = "dashboard.html";
    }
    else{
        alert('Check your Username and Password again...');
    }
});

