export class BankAccount {
  constructor(name) {
    this.name = name;
  }

  static balance(sumOfBalance){
    console.log("balance: " + sumOfBalance.name);
  }

  withdrawal() {
    console.log(this.name + ' withdrew from bank account balance.')
  }

  deposit() {
  console.log(this.name + ' makes a deposit.');
  }

}

 export class CheckingAccount extends BankAccount {
    processCheck() {
  	 super.processCheck();
      console.log(this.name + ' processed a check.');
    }

    withdrawal(withdraw) {
  	 super.withdrawal();
      console.log(this.name + ' withdrew from checking $' + withdraw);
    }

   static insufficientFundsFee(fee){
     console.log("Insufficient funds fee $" + fee);
   }

  }

  export class SavingsAccount extends BankAccount {

    depositMonthlyInterest() {
      super.depositMonthlyInterest();
        console.log(this.name + ' deposited monthly interest.');
    }

    withdrawal(withdraw) {
  	 super.withdrawal();
      console.log(this.name + ' withdrew from savings $' + withdraw);
    }

  static annualInterestRate(percentage){
    console.log("Annual interest rate " + percentage + "%");
    }

  }
