// / handle deposit button event
document.getElementById('deposit-btn').addEventListener('click', function(){
    // get the amount deposited
    const depositField= document.getElementById('deposit-input');
    const newDepositAmount= depositField.value;

    const depositTotal= document.getElementById('deposit-total');
    const previousAmount= depositTotal.innerText;
    const newTotalAmount=parseFloat(previousAmount) + parseFloat(newDepositAmount);
    depositTotal.innerText= newTotalAmount;
    depositField.value='';
    

    // update account balance

    const balanceTotal = document.getElementById('balance-total');
    const balanceAmount= balanceTotal.innerText;
    const totalAmount= newTotalAmount + parseFloat(balanceAmount);
    balanceTotal.innerText= totalAmount
})


// handle withdrow button event

document.getElementById('withdraw-btn').addEventListener('click', function(){
    const withdrawfield= document.getElementById('withdraw-input');
    const newWithdrawAmount= withdrawfield.value;
    

    const withdrawTotal= document.getElementById('withdrow-total');
    const previousWithdraw= withdrawTotal.innerText;
    const newTotalwithdraw= parseFloat(previousWithdraw) + parseFloat(newWithdrawAmount);
    withdrawTotal.innerText= newTotalwithdraw;
    withdrawfield.value= '';


    const totalBalance= document.getElementById('balance-total');
    const amountBalance= totalBalance.innerText;
    const amountTotal= parseFloat(amountBalance) - newTotalwithdraw;
    totalBalance.innerText= amountTotal;

    
})


