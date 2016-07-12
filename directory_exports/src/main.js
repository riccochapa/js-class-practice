var BankAccount = require("./BankAccount.js");
var CheckingAccount = require("./CheckingAccount.js");
var SavingsAccount = require("./SavingsAccount.js");

var acc1 = new SavingsAccount("Jimmy Jonas");
var acc2 = new CheckingAccount('Debbie Boone');
var acc3 = new BankAccount("Tommy Sanss");

acc1.processFee(222);
acc2.processCheck(33);
console.log(acc3.name);
