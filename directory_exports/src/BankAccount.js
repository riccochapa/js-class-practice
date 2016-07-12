BankAccount = function(name) {
    this.name = name;
  }

  BankAccount.prototype.withdrawal = function() {
  console.log(this.name + ' withdrew from bank account balance.');
  }

  BankAccount.prototype.deposit = function() {
  console.log(this.name + ' makes a deposit.');
  }


module.exports = BankAccount;
