var checkingBalance = 0;
var savingsBalance = 0;

// replace window.onload
$(function() {
  $("#checkingDeposit").click(depositChecking);
  $("#savingsDeposit").click(depositSaving);
  $("#checkingWithdraw").click(withdrawChecking);
  $("#savingsWithdraw").click(withdrawSaving);
  updateDisplay();
});

  // Add deposit functionality to checking
  function depositChecking() {
    var amount = $("#checkingAmount").val();
    amount = parseInt(amount);
    checkingBalance = amount + checkingBalance;
    updateDisplay();
  }

  // Add deposit functionality to savings
  function depositSaving() {
    var amount = $("#savingsAmount").val();
    amount = parseInt(amount);
    savingsBalance = amount + savingsBalance;
    updateDisplay();
  }

  function withdrawChecking() {
    var amount = $("#checkingAmount").val();
    amount = parseInt(amount);
    balances = withdrawFunds(amount, checkingBalance, savingsBalance);
    checkingBalance = balances[0];
    savingsBalance = balances[1];
    updateDisplay();
  }

  function withdrawSaving() {
    var amount = $("#savingsAmount").val();
    amount = parseInt(amount);
    balances = withdrawFunds(amount, savingsBalance, checkingBalance);
    savingsBalance = balances[0];
    checkingBalance = balances[1];
    updateDisplay();
  }

function withdrawFunds(amount, primary, secondary) {
  if(amount <= primary) {
    primary = primary - amount;
  }
  else if((amount > primary) && (amount <= (secondary + primary))) {
    secondary = (primary + secondary) - amount;
    primary = 0;
  }
  return [primary, secondary];
}

function updateDisplay() {
  var element = $("#checkingBalance");
  if(checkingBalance <= 0)
    element.addClass("zero");
  else
    element.removeClass("zero");

  var element2 = $("#savingsBalance");
  if(savingsBalance <= 0)
    element2.addClass("zero");
  else
    element2.removeClass("zero");

// These can all be switched
  $("#checkingBalance").text("$" + checkingBalance);
  $("#savingsBalance").text("$" + savingsBalance);
  $("#checkingAmount").val("");
  $("#savingsAmount").val("");
}