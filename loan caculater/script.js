function calculateLoan() {
    loanAmountValue = document.getElementById("loan-amount").value;
  
    interestRateValue = document.getElementById("interest-rate").value;
  
    MonthsToPayValue = document.getElementById("months-to-pay").value;
   interest=(loanAmountValue*(interestRateValue*0.01)/MonthsToPayValue)
   monthlypayment=(loanAmountValue / MonthsToPayValue+interest).toFixed(4)

   document.getElementById("payment").innerHTML=`Montly payment: ${monthlypayment}`
  
}