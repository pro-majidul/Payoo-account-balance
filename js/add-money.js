document.getElementById('add-money-btn').addEventListener('click', function (event) {
    event.preventDefault();
    

    const addMoneyPin = document.getElementById('add-money-pin').value;
    if (addMoneyPin === '2345') {
        const addMoneyNumber = document.getElementById('add-money-number').value;
        const addMoneyPrize = parseFloat(addMoneyNumber);
        const  totalPrize = document.getElementById('total-prize');
        const totalPrizeValue = totalPrize.innerText;
        const totalPrizeNumber = parseFloat(totalPrizeValue);
        const allAmount = addMoneyPrize + totalPrizeNumber;
        totalPrize.innerText= allAmount;
        document.getElementById('add-money-number').value= '';
        document.getElementById('add-money-pin').value = '';

    }
    else {
        alert('Invalid Pin Number')
    }
})