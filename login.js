document.getElementById('login-btn').addEventListener('click', function(){
    // email input field 
    const inputFieldElement = document.getElementById('input-field');
    const inputField = inputFieldElement.value;
    console.log(inputField);

    // password input field
    const passwordFieldElement = document.getElementById('password-field');
    const passwordField = passwordFieldElement.value;
    console.log(passwordField);

    // email and password check is login
    if(inputField === 'joyanta@gmail.com' && passwordField === 'joyanta'){
        window.location.href = 'deposit.html'
    }
    else{
        alert('Please enter your correct email and password');
    }
    
});

