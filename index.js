// Basics of the class (sytatic sugar in js recenty added in ES5)

class Triangle{
    sayHii(){
        return "hey this is triangle class"
    }
}

let t1 = new Triangle()
console.log(t1.sayHii())

// constructors in javascript class is used for 
// 1. for assigning properties
// 2. validate data 

class EquiTriangle{
    constructor(side){
        if(side <= 0) throw new Error("side cannot be less than or equal to zero");
        
        this.side = side
    }

    getArea(){
        let a = this.side**2
        return parseFloat(Math.sqrt(3)*a/4).toFixed(2)
    }

    getPerimeter(){
        return this.side*3
    }
}
try {
    let t2 = new EquiTriangle(1)
    console.log(t2.getArea())
} catch (error) {
    console.log(error)
}

// assignment
/**
 * create a bank account class which
 * 1. can be intialize with zero account balance
 * 2. have use name and account number
 * 3. create withdraw and deposit function
 * 4. handler function should be properly defined so as to restrict user making invalid transactions
 */

class Account{
    constructor(name,account,amount=0){
        this.name = name
        this.account = account
        this.amount = amount
    }

    withdrawAmount(amount){
        if(this.amount < amount) throw new Error(`Insuffcient balance\n Your Current Balance is $${this.amount}`);

        this.amount = this.amount-amount

        return `Withdrawn $${amount}\n New Balance is ${this.amount}`
    }

    depositAmount(amount){
        if(amount <= 0) throw new Error(`Invalid Entry: Amount cannot be negative\nYour Current Balance is ${this.amount}`);

        this.amount = this.amount+amount

        return `deposited $${amount}\n New Balance is ${this.amount}`
    }
}
try {
    const a1 = new Account('Naman','naman123',43)
    console.log(a1.withdrawAmount(10))
    console.log(a1.withdrawAmount(10))
    console.log(a1.withdrawAmount(10))
    console.log(a1.withdrawAmount(10))
    console.log(a1.depositAmount(300))
    console.log(a1.depositAmount(-303))

} catch (error) {
    console.log(error)
}

/**
 * Inheritance in javascript classes
 * 1. Using inheritance we can copy the properties of the parent class into the child class
 * 2. for inheritance we use the keyword extends
 */

// In this example we have created a new class rigth triangle which will inherit all the properties from the parent class
class rightTriangle extends EquiTriangle{
    constructor(side,sidea){
        super(side)
        this.sidea = sidea
    }
    getArea(){
        return parseFloat(Math.sqrt(this.side**2+this.sidea**2)).toFixed(2)
    }
}

let rt1 = new rightTriangle(3,4)
console.log(rt1.getArea())


/**
 * static proprties and method are not binded on the object insted they belong to a class 
 * and can be accessed by all object of that class
 * this when called inside static method will return class object instead of return an instance of the class which is the general behaviour with normal methods
 */

/**
 * use case of static method :
 * to group similar functionality together
 * to create a factory nethods which helps in creating new instance of the method
 */

class Mammals{
    constructor(name,species){
        this.name = name
        this.species = species
    }

    static greekName = 'mamalia'

    static info(){
        return "Do you know !!! All mammals are warm blooded "
    }
}

let m1 = new Mammals('Humans','Homo sapiens')

console.log(m1,Mammals.greekName,Mammals.info())

/**
 * getter and setter 
 */

class Circle{
    constructor(__radius){
        this.__radius = __radius
    }

    get diameter(){
        return this.__radius*2
    }
}


const circle = new Circle(4)
console.log(circle,circle.diameter)
circle.__radius = 19
console.log(circle.diameter)

/**
 * assignment 
 * 1. create a class person with first name and last name as a property 
 * 2. create a getter and setter function which will display full name and can assign full name 
 */


class Person{
    constructor(firstName,lastName){
        this.firstName = firstName
        this.lastName = lastName
    }

    get fullName(){
        return `${this.firstName} ${this.lastName}`
    }

    set fullName(fullname){
        let fname = fullname.split(' ')[0]
        let lname = fullname.split(' ')[1]
        this.firstName = fname
        this.lastName = lname
    }
}

let p1 = new Person('Naman','Shah')
console.log(p1.fullName)
p1.fullName = 'Chris Benoit'
console.log(p1.fullName)

/**
 * public and private field and private methods
 */

class cat{
    numLegs = 4 // numLegs is a public field here 
    #owner; // owner here is private class field
    constructor(name,owner){
        this.name = name
        this.#owner = owner
    }

    #amputateLeg(){
        this.numLegs -= 1 
        return this.numLegs
    }

    getOwner(){
        return this.#owner
    }
}

const c1 = new cat("Persian","Naman")
console.log(c1.numLegs,c1.getOwner())
const c2 = new cat("Himalayan")
console.log(c2.numLegs)

/**
 * static initialization block
 * whenever we want to intiliaze static property based on some complex logic 
 * we can use static intialization block
 */

class dbconnection{
    env = "production"
    static connection;
    static prodConn(){
        return {
            'host':'xyz@abc.com',
            'port':5432,
            'username':'myhost',
            'password':'myhost@123'
        }
    }

    static nonprodConn(){
         return {
            'host':'xyz.ebiz@abc.com',
            'port':5432,
            'username':'myhost',
            'password':'myhost@123'
        }
    }

    static{
        if(env === "production"){
            this.connection = this.prodConn()
        }
        else{
            this.connection = this.nonprodConn()
        }
    }
}