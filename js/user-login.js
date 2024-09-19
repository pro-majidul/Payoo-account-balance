document.getElementById('user-login-btn').addEventListener('click', function (event) {
    event.preventDefault();
    const userPin = document.getElementById('user-login-pin').value;
   if(userPin==='1234'){
    window.location.href = "./user-Account.html";
   }
   else{
    alert("invalid user Number or Pin Number");
   }

})

