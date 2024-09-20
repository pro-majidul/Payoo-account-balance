
document.getElementById('btn-transfer').addEventListener('click', function (event) {
    event.preventDefault();
    const transferPin = getInputTextValueById('transfer-pin');
    if (transferPin == '2345') {
        const transferBallance = getInputTextValueById('transfer-balance');
        const mainBallance = getTextById('total-prize');
        console.log('mainBallance', mainBallance);
        const remainingBallance = mainBallance - transferBallance;
        console.log('remainingBallance' , remainingBallance);
        if(remainingBallance < 0){
            alert('You cant transfer ballance');
            return
        }
        document.getElementById('total-prize').innerText = remainingBallance;
        document.getElementById('transfer-pin').value = '';
        document.getElementById('transfer-balance').value = '';
    }else{
        alert('invalid Pin Number')
    }
})