document.getElementById('btn2-add-money').addEventListener('click', function(event) {
    event.preventDefault();

    const mainBalance = document.getElementById('main-balance').innerText;
    // console.log(typeof mainBalance)
    const addMoneyAmount = document.getElementById('add-money-amount').value;
    // console.log(typeof addMoneyAmount)
    const myPassword = document.getElementById('password').value;

    if(myPassword === '1230'){
        const newBalance = Number(mainBalance) + Number(addMoneyAmount);
        // mainBalance = parseFloat(mainBalance) + parseFloat(addMoneyAmount);
        // mainBalance = parseInt(mainBalance) + parseInt(addMoneyAmount);
        
        // console.log(newBalance)

        document.getElementById('main-balance').innerText = newBalance;
    }else{
        alert('information wrong')
    }
});