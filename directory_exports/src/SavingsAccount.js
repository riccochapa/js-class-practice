var BankAccount = require("./BankAccount.js");

var SavingsAccount = function(name) {
  BankAccount.call(this,name);
}

SavingsAccount.prototype = Object.create(BankAccount.prototype);

SavingsAccount.prototype.processFee = function(fee) {
  console.log(this.name + ' paid a fee of ' + fee);
};

module.exports = SavingsAccount;
