document.getElementById('withdraw-btn').addEventListener('click', function(){
    // withdraw input field
    const withdrawFieldElement = document.getElementById('withdraw-field');
    const withdrawFieldString = withdrawFieldElement.value;
    const newWithdrawField = parseFloat(withdrawFieldString);
    // clear the input field
    withdrawFieldElement.value = '';

    // typeof check
    if(isNaN(newWithdrawField)){
        alert('Please provide your number');
        return;
    }

    // previous withdraw
    const previousWithdrawElement = document.getElementById('previous-withdraw');
    const previousWithdrawString = previousWithdrawElement.innerText;
    const previousWithdraw = parseFloat(previousWithdrawString);

    // previous Balance
    const previousBalanceElement = document.getElementById('previous-Balance');
    const previousBalanceString = previousBalanceElement.innerText;
    const previousBalance = parseFloat(previousBalanceString);

    // total low balance with a withdrawal balance high (alert)
    if(newWithdrawField > previousBalance){
        alert('Low Balance');
        return;
    }

    // previous withdraw + new withdraw = total Sum
    const totalWithdraw = previousWithdraw + newWithdrawField;
    previousWithdrawElement.innerText = totalWithdraw;

    // previous Balance - new withdraw = (total)
    const totalBalance = previousBalance - newWithdrawField;
    previousBalanceElement.innerText = totalBalance;
});