document.getElementById('deposit-value').addEventListener('keyup', function(){
    activeButton('deposit-value', 'deposit-btn');
})
document.getElementById('withdraw-value').addEventListener('keyup', function(){
    activeButton('withdraw-value', 'withdraw-btn');
})
document.getElementById('deposit-btn').addEventListener('click', function(){
    toBalance('deposit-value', 'deposit-balance');
    depositToTotal('deposit-value', 'total-balance');
})
document.getElementById('withdraw-btn').addEventListener('click', function(){
    toBalance('withdraw-value', 'withdraw-balance');
    withdrawToTotal('withdraw-value', 'total-balance');
})