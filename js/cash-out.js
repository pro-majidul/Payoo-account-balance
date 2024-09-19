document.getElementById('cash-out-btn').addEventListener('click', function (event) {
    event.preventDefault();

    const cashOutPin = document.getElementById('cash-out-pin').value ;
    if(cashOutPin === '2345'){
        const cashOutAmount = document.getElementById('cash-out-amount').value ;
        const cashOutNumber = parseFloat(cashOutAmount);
        const totalAmount =document.getElementById('total-prize').innerText;
        const totalAmountNumber = parseFloat(totalAmount);

        const RemainingBallance = totalAmountNumber - cashOutNumber;
        
        if(RemainingBallance <0){
            alert('You cant buy else')
        }else{

            document.getElementById('total-prize').innerText = RemainingBallance;
        }
        document.getElementById('cash-out-amount').value = '';
        document.getElementById('cash-out-pin').value = '';


    }
    else{
        alert('invalid Pin Number')
    }
})