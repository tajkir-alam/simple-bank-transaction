document.getElementById('user-email').addEventListener('keyup', function(){
    const userEmail = document.getElementById('user-email').value;
    const userPassword = document.getElementById('user-password').value;
    if(userEmail !== "" && userPassword !== ""){
        document.getElementById('btn-login').removeAttribute('disabled');
    }
    else{
        document.getElementById('btn-login').setAttribute('disabled', true);
    }
})

document.getElementById('user-password').addEventListener('keyup', function(){
    const userEmail = document.getElementById('user-email').value;
    const userPassword = document.getElementById('user-password').value;
    if(userEmail !== "" && userPassword !== ""){
        document.getElementById('btn-login').removeAttribute('disabled');
    }
    else{
        document.getElementById('btn-login').setAttribute('disabled', true);
    }
})


document.getElementById('btn-login').addEventListener('click', function(){
    const userEmail = document.getElementById('user-email').value;
    const userPassword = document.getElementById('user-password').value;
    const localUser = localStorage.getItem(userEmail);

    if(userPassword.length < 6 ){
        document.getElementById('btn-login').setAttribute('disabled', true);
        const checkPassword = document.createElement('p');
        checkPassword.className = "text-red-500 font-medium incorrect-password";
        checkPassword.innerText = "Your have to enter minimum 6 digit password";
        document.getElementById('login-input-section').appendChild(checkPassword);
        document.getElementById('user-password').value = "";

        const incorrectPasswordLists = document.querySelectorAll('.incorrect-password');
        incorrectPasswordLists[1].remove();    
    }
    else if(localUser !== userPassword){
        alert('You enter invalid username or password');
    }
    else{
        sessionStorage.setItem("user", "true");
        window.location.href = 'dashboard.html';
    }
})


document.querySelector('form').addEventListener('submit', function(e){
    e.preventDefault();
})