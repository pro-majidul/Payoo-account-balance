document.getElementById('get-bonus-btn').addEventListener('click',function(event){
    event.preventDefault();
    const bonusPin = getInputTextValueById('bonus-pin');
    if(bonusPin == '2345'){
        const CooponCode = getInputTextValueById('coopon-code');
        if(CooponCode == '67E22'){
            const mainBallance = getTextById('total-prize');
            console.log(mainBallance);
            const addingBonusBallance = mainBallance + 100;
            document.getElementById('total-prize').innerText = addingBonusBallance ;
            document.getElementById('coopon-code').value = '';
            document.getElementById('bonus-pin').value = '';
            
        }else{
            alert('Your Cooopon Code doesnot match')
        }


    }else{
        alert('Invalid Pin Number');
    }
})