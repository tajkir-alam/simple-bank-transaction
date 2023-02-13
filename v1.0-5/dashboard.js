document.getElementById('deposit-value').addEventListener('keyup', function(){  
    const depositValue = document.getElementById('deposit-value').value;
    if(depositValue !== ""){
        document.getElementById('deposit-btn').removeAttribute('disabled');
    }
    else{
        document.getElementById('deposit-btn').setAttribute('disabled', true);
    }
})

document.getElementById('withdraw-value').addEventListener('keyup', function(){
    const withdrawValue = document.getElementById('withdraw-value').value;
    if(withdrawValue !== ""){
        document.getElementById('withdraw-btn').removeAttribute('disabled');
    }
    else{
        document.getElementById('withdraw-btn').setAttribute('disabled', true);
    }
})


document.getElementById('deposit-btn').addEventListener('click', function(){
    const depositValueString = document.getElementById('deposit-value').value;
    const depositValue = parseFloat(depositValueString)
    const depositBalanceString = document.getElementById('deposit-balance').innerText;
    const depositBalance = parseFloat(depositBalanceString)

    const totalDeposit = depositBalance + depositValue;
    document.getElementById('deposit-balance').innerText = totalDeposit;
    document.getElementById('deposit-value').value = ""; 
    

})