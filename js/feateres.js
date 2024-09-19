document.getElementById('btn-cash-out').addEventListener('click', function(){
     const cashOut= document.getElementById('cash-out-form');
     const addMone= document.getElementById('add-mone-form');
     cashOut.classList.remove('hidden');
     addMone.classList.add('hidden')
     
     
    })
    
    // add mone form 

    document.getElementById('btn-add-money').addEventListener('click', function(){
    const cashOut= document.getElementById('cash-out-form');
   const addMone= document.getElementById('add-mone-form');
   addMone.classList.remove('hidden');
   cashOut.classList.add('hidden')
})