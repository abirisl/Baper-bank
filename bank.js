document.getElementById('login-submit').addEventListener('click',function(){
    const emailField = document.getElementById('user-email');
    const emailInput = emailField.value;
//    password
    const passwordField = document.getElementById('user-password');
    const passwordInput = passwordField.value;
   
    if(emailInput=='mehedi338@gmail.com' && passwordInput=='secret'){
       window.location.href= 'banking.html';
    }
    
})



