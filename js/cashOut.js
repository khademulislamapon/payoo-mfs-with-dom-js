document.getElementById('btn2-cash-out').addEventListener('click', function(event) {
    event.preventDefault();
    // console.log('cash out :(')

    const mainBalance = document.getElementById('main-balance').innerText;
    // console.log(mainBalance)
    const cashOutAmount = document.getElementById('cash-out-amount').value;
    // console.log(cashOutAmount)
    const confirmPassword = document.getElementById('confirm-password').value;
    // console.log(confirmPassword)

    if(confirmPassword === '1230'){
        const newBalance = Number(mainBalance) - Number(cashOutAmount);
        // console.log(newBalance)

        document.getElementById('main-balance').innerText = newBalance;
    }else{
        alert('Failed to Cash Out. Please try agin later.')
    }
});