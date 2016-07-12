var BankAccount = require("./BankAccount.js");

var CheckingAccount = function(name) {
  BankAccount.call(this,name);
}

CheckingAccount.prototype = Object.create(BankAccount.prototype);

CheckingAccount.prototype.processCheck = function(amount) {
  console.log(this.name + ' processed a check for $' + amount);
};

module.exports = CheckingAccount;
