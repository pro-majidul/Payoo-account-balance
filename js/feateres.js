


// add money form 

document.getElementById('btn-add-money').addEventListener('click', function () {
   const cashOut = document.getElementById('cash-out-form');
   const addMone = document.getElementById('add-mone-form');
   const transferAmount = document.getElementById('transfer-Amount-form');
   const bonusCard = document.getElementById('get-bonus-card');
   const payBillCard = document.getElementById('pay-bill-card');
   payBillCard.classList.add('hidden')
   bonusCard.classList.add('hidden')
   transferAmount.classList.add('hidden')
   addMone.classList.remove('hidden');
   cashOut.classList.add('hidden')
   const billAmountCard = document.getElementById('bill-amount-form');
   billAmountCard.classList.add('hidden')
})

// cash out form 


document.getElementById('btn-cash-out').addEventListener('click', function () {
   const cashOut = document.getElementById('cash-out-form');
   const addMone = document.getElementById('add-mone-form');
   const transferAmount = document.getElementById('transfer-Amount-form');
   const bonusCard = document.getElementById('get-bonus-card');
   const payBillCard = document.getElementById('pay-bill-card');
   payBillCard.classList.add('hidden')
   bonusCard.classList.add('hidden')
   transferAmount.classList.add('hidden')
   cashOut.classList.remove('hidden');
   addMone.classList.add('hidden')
   const billAmountCard = document.getElementById('bill-amount-form');
   billAmountCard.classList.add('hidden')


})


// transfer Money
document.getElementById('btn-transfer-money').addEventListener('click', function () {
   const cashOut = document.getElementById('cash-out-form');
   const addMone = document.getElementById('add-mone-form');
   const transferAmount = document.getElementById('transfer-Amount-form');
   const bonusCard = document.getElementById('get-bonus-card');
   const payBillCard = document.getElementById('pay-bill-card');
   payBillCard.classList.add('hidden')
   bonusCard.classList.add('hidden')
   transferAmount.classList.remove('hidden');
   cashOut.classList.add('hidden')
   addMone.classList.add('hidden')
   const billAmountCard = document.getElementById('bill-amount-form');
   billAmountCard.classList.add('hidden')

})



// get bonus 
document.getElementById('btn-get-bonus').addEventListener('click', function () {
   const cashOut = document.getElementById('cash-out-form');
   const addMone = document.getElementById('add-mone-form');
   const transferAmount = document.getElementById('transfer-Amount-form');
   const bonusCard = document.getElementById('get-bonus-card');
   const payBillCard = document.getElementById('pay-bill-card');
   payBillCard.classList.add('hidden')
   bonusCard.classList.remove('hidden')
   transferAmount.classList.add('hidden');
   cashOut.classList.add('hidden')
   addMone.classList.add('hidden')
   const billAmountCard = document.getElementById('bill-amount-form');
   billAmountCard.classList.add('hidden')

})

// pay bill

document.getElementById('btn-pay-bill').addEventListener('click', function () {
   const cashOut = document.getElementById('cash-out-form');
   const addMone = document.getElementById('add-mone-form');
   const transferAmount = document.getElementById('transfer-Amount-form');
   const bonusCard = document.getElementById('get-bonus-card');
   const payBillCard = document.getElementById('pay-bill-card');
   payBillCard.classList.remove('hidden')
   bonusCard.classList.add('hidden')
   transferAmount.classList.add('hidden');
   cashOut.classList.add('hidden')
   addMone.classList.add('hidden')

})