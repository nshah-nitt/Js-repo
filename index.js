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

/**
 * Getters and Setters exercise
 * Create a class UserProfile that encapsulates a user's profile information.
 * This class should have fields for username, email, and birthdate. Use getters and setters when creating these fields. Use setters to validate that the username is a non-empty string, the email includes an '@' symbol, and the birthdate is a valid date string.
 * If the username is an empty string or not a string - throw an error with the message of 'Invalid username.'
 * If the email does not include a @ character - throw an error with the message of 'Invalid email.'
 * If the birthdate is not a valid date string (for example '1990-01-01') - throw an error with the message of 'Invalid birthdate.'
 * Make sure to also use the setters that you write (with the implemented validations) in the constructor function of the class, so it also validates the fields when the object is initially created from the class (i.e., when the constructor function is initially executed).
 */


class UserProfile{

    constructor(username,email,birthdate){
        this.username = username
        this.email = email
        this.birthdate = birthdate
    }
    

    get username(){
        return this._username
    }
    set username(name){
        if(typeof(name) !== "string" || name.length === 0) throw new Error("Invalid username.");
        
        this._username = name
    }

    get email(){
        return this._email
    }

    set email(mail){
        if(!mail.includes("@")) throw new Error("Invalid email.");
        this._email = mail   
    }

    get birthdate(){
        return this._birthdate
    }
    
    set birthdate(date){
        if(isNaN(Date.parse(date))) throw new Error("Invalid birthdate.");
        this._birthdate = date
    }
}

const person1 = new UserProfile("naman","namanshah2275@gmail.com","1999-100-19")
console.log(person1.username,person1.email,person1.birthdate)


/**
 * assignment for this keyword
 * Write a function called greetFluffy, which should return the string "Hello Fluffy Meowson". Add the necessary code to invoke the greet function, but instead of returning "Hello Butters Cluckly", return "Hello Fluffy Meowson" . Do not modify the fluffy object above
 */

const butters = {
  firstName: "Butters",
  lastName: "Cluckly",
  greet: function(){
      return `Hello ${this.firstName} ${this.lastName}`
  }
}

const fluffy = {
  firstName: "Fluffy",
  lastName: "Meowson",
}

function greetFluffy(){
  // Invoke the greet method but instead of returning "Hello Butters Cluckly", return "Hello Fluffy Meowson". Do not modify the fluffy object above. 

  return butters.greet.bind(fluffy)()
}


/**
 * In the Timer class, modify the start method to log the tick property at one - second intervals correctly
 * and add a stop method to clear the interval.
 * The timer should stop after 5 ticks.
 * 
 * 
 * here is the started code 
 * class Timer {
  constructor() {
    this.tick = 0;
    this.timerId = null;
  }
 
  start() {
    this.timerId = setInterval(function () {
      console.log(this.tick++);
    }, 1000);
  }
}
 */

class Timer {
  constructor() {
    this.tick = 0;
    this.timerId = null;
  }

  start() {
    this.timerId = setInterval(this.incrementTick.bind(this), 1000);
    if(this.tick === 5){
      clearInterval(this.timerId)
    }
  }

  incrementTick(){
    console.log(this.tick)
    this.tick += 1
    return this.tick 
  }
}

const a = new Timer()
a.start()
if(this.tick === 5) a