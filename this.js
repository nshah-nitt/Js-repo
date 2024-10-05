/**
 * Explanation of keyword this with refernce to javascript classes
 * usually everything in js runs down to js objects and this in most of the cases 
   refers to the object using which property or method is called on.(mostly left side object ex: person
   getRoll()) - true for object.
   for class behaviour is slightly different and explained by below example
 */

class School{
    constructor(name,age){
        this.name = name
        this.age = age
    }

    getRoll(){
        return this.name
    }
    static getTotalstudents(){
        console.log(`we have ${this} student`)
    }
}

const a = new School("naman",23)
console.log(a.getRoll()) // GET ROLL WILL PRINT a object

// const b = a.getRoll
// console.log(b()) // This should throw error as it coming from a class with undefined this

class students extends School{
    constructor(name,age,fav_sub){
        super(name,age)
        this.fav_sub = fav_sub
    }
}

/**
 * if u want to call the method of one object on another u can use 
 * Call keyword for ex: 
 */

class Fruits{
    constructor(fruitName){
        this.fruitName = fruitName
    }

    getSeason(place){
        const month = ["January","Febuary","March","April","May","June","July","August","September","October","November","December"]

        let season = month[Math.floor(Math.random()*12)]


        return `${this.fruitName} is famous in ${season} in ${place}`
    }
}

const apple = new Fruits("Apple")
const season = apple.getSeason

const mango = new Fruits("Mango")
console.log(season.call(mango,"Uttar Pradesh")) // u can use the call mehtod on a function and pass some   params to it

// insted of using call which doesn't requires arguments to passed in a certain way 
// we can use apply method, which requires arguments to be passed as an array 

console.log(season.call(mango,["Varanasi"]))

/**
 * using call or apply create temporary bindings 
 * alternativelty we can use bind 
 */

const useBind = apple.getSeason.bind(mango) // context is permannetly bind 
console.log(useBind("UP"))

/**
 * we can also pass params and use bind in multiple ways, 
 * one such way is when u want to fix 
 * one argument of the function and want to call function of the other argument 
 */

function sum(a,b){
    return a+b
}

const addTwo = sum.bind(null,2) // we have bind the addTwo object to null and passed 2 as one the arguments
console.log(addTwo(10))

// traditional function creates global context for this
function sayHii(){
    console.log("Hey hii!!",this.fruitName)
    return "hii"
}

// arrow function doesn't create any context
const askHii = ()=>{
    console.log(this)
    return "hii"
}
const mangoHi = sayHii.bind(mango)
console.log(mangoHi())

class HappyDragons{
    constructor(name,clan){
        this.name = name
        this.clan = clan
    }

    // we cannot bind an object using arrow functions
    getScientificName = ()=>{
        return `${this.name} with clan ${this.clan} has a scientific name of lala sandos`
    }
    
    // conventional function can be bined to other objects
    getRealName(){
        return `${this.name} with clan ${this.clan} has a scientific name of lala sandos`
    }
}

const drag1 = new HappyDragons("Pinto","Sky Blue")
const drag2 = new HappyDragons("Alese","Moon Princess")

console.log(drag1.getScientificName.bind(drag2)(),"\n",drag1.getRealName.bind(drag2)())