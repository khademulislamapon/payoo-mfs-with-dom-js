document.getElementById('btn2-add-money').addEventListener('click', function(event) {
    event.preventDefault();
    
    const addMoneyAmount = document.getElementById('add-money-amount').value;
    const myPassword = document.getElementById('password').value;
    if(myPassword === '1230'){
        balance = balance + addMoneyAmount;
    }else{
        alert('information wrong')
    }
});