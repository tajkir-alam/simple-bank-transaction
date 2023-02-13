document.getElementById('btn-signup').addEventListener('click', function(){
    const signupEmail = document.getElementById('signup-email').value;
    
    
    console.log(signupEmail);


    const signupPassword = document.getElementById('signup-password').value;

    if(signupEmail === "" || signupPassword === ""){
        alert('Please Provide email and password');
    }
    else if(signupPassword.length < 6 ){
        const checkPassword = document.createElement('p');
        checkPassword.className = "text-red-500 font-medium";
        checkPassword.innerText = "Your have to enter minimum 6 digit password";
        document.getElementById('signup-input-section').appendChild(checkPassword);
    }
    else{
        window.location.href = "index.html";
    }
})

