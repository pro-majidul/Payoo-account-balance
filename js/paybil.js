document.getElementById('Pay-bill-btn').addEventListener('click', function (event) {
    event.preventDefault();
    const userId = getInputTextValueById('user-id');
    const billerId = getInputTextValueById('biller-id');
    if (userId == '01746637704' && billerId == '607397') {
        const payBillCard = document.getElementById('pay-bill-card');
        payBillCard.classList.add('hidden')
        const billAmountCard = document.getElementById('bill-amount-form');
        billAmountCard.classList.remove('hidden')
        // paybill amount section style
        document.getElementById('bill-confirm-btn').addEventListener('click',function(event){
            event.preventDefault();
            const billAmount = getInputTextValueById('bill-amount');
            const billerPin = getInputTextValueById('bill-pin');
            if(billerPin == '2345'){
                const mainBallance = getTextById('total-prize');
                const remainingBalance = mainBallance - billAmount;
                if(remainingBalance < 0){
                    alert('you cant pay money becouse you dont have suffecient ballance');
                    return
                }
                document.getElementById('total-prize').innerText = remainingBalance;
                document.getElementById('bill-amount').value = '';
                document.getElementById('bill-pin').value = '';

            }else{
                alert('Pin Number Doesnt match')
            }
        })

    }else{
        alert('Biller ID or User ID not Match')
    }

})