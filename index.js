// assignment
/**
 * create a bank account class which
 * 1. can be intialize with zero account balance
 * 2. have use name and account number
 * 3. create withdraw and deposit function
 * 4. handler function should be properly defined so as to restrict user making invalid transactions
 */

class Account {
  constructor(name, account, amount = 0) {
    this.name = name;
    this.account = account;
    this.amount = amount;
  }

  withdrawAmount(amount) {
    if (this.amount < amount)
      throw new Error(
        `Insuffcient balance\n Your Current Balance is $${this.amount}`
      );

    this.amount = this.amount - amount;

    return `Withdrawn $${amount}\n New Balance is ${this.amount}`;
  }

  depositAmount(amount) {
    if (amount <= 0)
      throw new Error(
        `Invalid Entry: Amount cannot be negative\nYour Current Balance is ${this.amount}`
      );

    this.amount = this.amount + amount;

    return `deposited $${amount}\n New Balance is ${this.amount}`;
  }
}
try {
  const a1 = new Account("Naman", "naman123", 43);
  console.log(a1.withdrawAmount(10));
  console.log(a1.withdrawAmount(10));
  console.log(a1.withdrawAmount(10));
  console.log(a1.withdrawAmount(10));
  console.log(a1.depositAmount(300));
  console.log(a1.depositAmount(-303));
} catch (error) {
  console.log(error);
}

/**
 * assignment
 * 1. create a class person with first name and last name as a property
 * 2. create a getter and setter function which will display full name and can assign full name
 */

class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  set fullName(fullname) {
    let fname = fullname.split(" ")[0];
    let lname = fullname.split(" ")[1];
    this.firstName = fname;
    this.lastName = lname;
  }
}

let p1 = new Person("Naman", "Shah");
console.log(p1.fullName);
p1.fullName = "Chris Benoit";
console.log(p1.fullName);
