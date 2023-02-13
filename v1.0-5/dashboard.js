const depostBtn = document.getElementById('deposit-btn')
const withdrawBtn = document.getElementById('withdraw-btn')
const withdrawValue = document.getElementById('withdraw-value').value;

document.getElementById('deposit-value').addEventListener('keyup', function(){  
    const depositValue = document.getElementById('deposit-value').value;
    if(depositValue !== ""){
        document.getElementById('deposit-btn').removeAttribute('disabled');
    }
    else{
        document.getElementById('deposit-btn').setAttribute('disabled', true);
    }
})