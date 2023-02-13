document.getElementById('user-email').addEventListener('keyup', function(){
    const userEmail = document.getElementById('user-email').value;
    const userPassword = document.getElementById('user-password').value;

    if(userEmail !== "" && userPassword !== ""){
        document.getElementById('btn-signup').removeAttribute('disabled');
    }
    else{
        document.getElementById('btn-signup').setAttribute('disabled', true);
    }
})
document.getElementById('user-password').addEventListener('keyup', function(){
    const userEmail = document.getElementById('user-email').value;
    const userPassword = document.getElementById('user-password').value;

    if(userEmail !== "" && userPassword !== ""){
        document.getElementById('btn-signup').removeAttribute('disabled');
    }
    else{
        document.getElementById('btn-signup').setAttribute('disabled', true);
    }
})



document.getElementById('btn-signup').addEventListener('click', function(){
    const userEmail = document.getElementById('user-email').value;
    const userPassword = document.getElementById('user-password').value;
    if(userPassword.length < 6 ){
        const checkPassword = document.createElement('p');
        checkPassword.className = "text-red-500 font-medium";
        checkPassword.innerText = "Your have to enter minimum 6 digit password";
        document.getElementById('signup-input-section').appendChild(checkPassword);
    }
    else{
        window.location.href = "index.html";
        window.localStorage.setItem(userEmail, userPassword);
    }
})

