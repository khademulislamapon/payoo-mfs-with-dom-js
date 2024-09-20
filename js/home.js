document.getElementById('btn-cash-out').addEventListener('click', function() {
    // event.preventDefault();
    // console.log('cash out :(')

    const dividerId = document.getElementById('divider-id');
    dividerId.classList.remove('hidden');

    const cashOutSection = document.getElementById('cash-out-section');
    cashOutSection.classList.remove('hidden');

    const addMoneySection = document.getElementById('add-money-section');
    addMoneySection.classList.add('hidden');
});

document.getElementById('btn-add-money').addEventListener('click', function() {
    // event.preventDefault();
    // console.log('cash out :(')

    const dividerId = document.getElementById('divider-id');
    dividerId.classList.remove('hidden');

    const cashOutSection = document.getElementById('cash-out-section');
    cashOutSection.classList.add('hidden');
    
    const addMoneySection = document.getElementById('add-money-section');
    addMoneySection.classList.remove('hidden');
});