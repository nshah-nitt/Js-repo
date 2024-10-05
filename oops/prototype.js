/**
 * what is prototype and why it is required: prototypes are basic mechanism which give javascript objects
 * the ability to inherit features and funtionality of each other
 * every single js object whether it's an array or object literal or instance of a class has their special
 * object called proto, proto has some share methods functionality which other objects can inherit from
 *
 */

class Dog{
    constructor(name,breed){
        this.name = name
        this.breed = breed
    }

    getRegion(){
        const Region = ['Australia','Canada','Russia','India','France']
        return `${this.name} belongs to ${Region[Math.floor(Math.random()*5)]}`
    }
}

const luccy = new Dog("luccy","Pamerian")
console.log(luccy)

/**
 * each time when we create a DOG object 
 * the method and constructors are usually store __proto__ object 
 * since this methods remains same for all the objects
 */

console.log(luccy.__proto__)

const obj = {
    name:'Candy',
    age:24,
    region:function(){
        const Region = ['Australia','Canada','Russia','India','France']
        return `${this.name} belongs to ${Region[Math.floor(Math.random()*5)]}`
    }
}


/**
 * let's define the constructor via function and 
 * try to use prototype to add the method over fucntional constructor
 */

function Dogs(name,breed){
    this.name = name
    this.breed = breed
}
            // called by new  (refer prototype.io for more clarity)
// function -------> prototype ------
//     |                             |
//     |                             |
//     ------------------------- constructor

let dog = new Dogs("fluffy","Pomerian")
// added prototype to function Dogs
Dogs.prototype.bark = function(){ 
    return `${this.name} says woof!`
}

// used again the constructor function attached to prototype to call new Dogs object
let old_dog = new dog.constructor("daisy","hutch")
console.log(old_dog)