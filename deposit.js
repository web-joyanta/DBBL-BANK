document.getElementById('deposit-btn').addEventListener('click', function(){
    // deposit Field input
    const depositFieldElement = document.getElementById('deposit-field');
    const depositFieldString = depositFieldElement.value;
    const newDepositField = parseFloat(depositFieldString)
    // clear the input field
    depositFieldElement.value = '';

    // typeof check
    if(isNaN(newDepositField)){
        alert('Please provide your number');
        return;
    }

    // previous deposit
    const previousDepositElement = document.getElementById('previous-deposit');
    const previousDepositString = previousDepositElement.innerText;
    const previousDeposit = parseFloat(previousDepositString);

    // previous Deposit + new Deposit = total Sum
    const totalDeposit = previousDeposit + newDepositField;
    previousDepositElement.innerText = totalDeposit;

    // previous Balance
    const previousBalanceElement = document.getElementById('previous-Balance');
    const previousBalanceString = previousBalanceElement.innerText;
    const previousBalance = parseFloat(previousBalanceString);

    // previous Balance + new Deposit = total Sum
    const totalBalance = previousBalance + newDepositField;
    previousBalanceElement.innerText = totalBalance;
    
});