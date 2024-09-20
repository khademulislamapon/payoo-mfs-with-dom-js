document.getElementById('btn-login').addEventListener('click', function(event) {
    // console.log('Haica amara');
    event.preventDefault();

    const mobileNumber = document.getElementById('mobile-number').value;
    const pinNumber = document.getElementById('pin-number').value;
    console.log('Pin:', pinNumber, 'Number:', mobileNumber);

    if(mobileNumber === '01800000000' && pinNumber === '1230'){
        console.log('Yor are logged in');
        window.location.href = '/home.html';
    }else{
        alert('wrong phone number or pin')
    }
});

