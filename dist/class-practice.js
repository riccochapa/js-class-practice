'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var BankAccount = exports.BankAccount = function () {
  function BankAccount(name) {
    _classCallCheck(this, BankAccount);

    this.name = name;
  }

  _createClass(BankAccount, [{
    key: 'withdrawal',
    value: function withdrawal() {
      console.log(this.name + ' withdrew from bank account balance.');
    }
  }, {
    key: 'deposit',
    value: function deposit() {
      console.log(this.name + ' makes a deposit.');
    }
  }], [{
    key: 'balance',
    value: function balance(sumOfBalance) {
      console.log("balance: " + sumOfBalance.name);
    }
  }]);

  return BankAccount;
}();

var CheckingAccount = exports.CheckingAccount = function (_BankAccount) {
  _inherits(CheckingAccount, _BankAccount);

  function CheckingAccount() {
    _classCallCheck(this, CheckingAccount);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(CheckingAccount).apply(this, arguments));
  }

  _createClass(CheckingAccount, [{
    key: 'processCheck',
    value: function processCheck() {
      _get(Object.getPrototypeOf(CheckingAccount.prototype), 'processCheck', this).call(this);
      console.log(this.name + ' processed a check.');
    }
  }, {
    key: 'withdrawal',
    value: function withdrawal(withdraw) {
      _get(Object.getPrototypeOf(CheckingAccount.prototype), 'withdrawal', this).call(this);
      console.log(this.name + ' withdrew from checking $' + withdraw);
    }
  }], [{
    key: 'insufficientFundsFee',
    value: function insufficientFundsFee(fee) {
      console.log("Insufficient funds fee $" + fee);
    }
  }]);

  return CheckingAccount;
}(BankAccount);

var SavingsAccount = exports.SavingsAccount = function (_BankAccount2) {
  _inherits(SavingsAccount, _BankAccount2);

  function SavingsAccount() {
    _classCallCheck(this, SavingsAccount);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(SavingsAccount).apply(this, arguments));
  }

  _createClass(SavingsAccount, [{
    key: 'depositMonthlyInterest',
    value: function depositMonthlyInterest() {
      _get(Object.getPrototypeOf(SavingsAccount.prototype), 'depositMonthlyInterest', this).call(this);
      console.log(this.name + ' deposited monthly interest.');
    }
  }, {
    key: 'withdrawal',
    value: function withdrawal(withdraw) {
      _get(Object.getPrototypeOf(SavingsAccount.prototype), 'withdrawal', this).call(this);
      console.log(this.name + ' withdrew from savings $' + withdraw);
    }
  }], [{
    key: 'annualInterestRate',
    value: function annualInterestRate(percentage) {
      console.log("Annual interest rate " + percentage + "%");
    }
  }]);

  return SavingsAccount;
}(BankAccount);