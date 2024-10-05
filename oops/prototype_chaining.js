/**
 * chaining prototype in javascript
 */

let grandParents = {
    dna:"89#f34#hux__#22Hu",
    year:"1600-2000's",
    greet:function (){
        return 'holla sigostha'
    }
}

let parents = {
    year:"1970's - current",
    greet:function(){
        return "Hey folks"
    },
    __proto__:grandParents
}
 let children = {
    year:"2000's - current",
    greet:function(){
        return "hey ya!"
    },
    __proto__:parents
 }

 console.log(children.__proto__.__proto__.__proto__) 
 /**
  * We can chain the prototype object until base object prototype is called 
  * which would be nothing but object.prototype
  * so here if we do children.dna 
  * the execution will look for the property in children, then in the prototype of children i.e. parents 
  * if property is not in parents it will look into parents prototype i.e. grandparents 
  * if it is again unable to find the property in grandparents 
  * it will look in grandparents.prototype i.e. Object.prototype
  * if it is not even present in the Object.prototype
  * the execution will stop and undefined would be 
  * printed
  */

 class Books{
    constructor(name,author){
        this.name = name
        this.author = author
    }

    getVersion(){
        return "the recent version of the book is release in 2009"
    }
 }

 class Novels extends Books{
    constructor(genre,name,author){
        super(name,author)
        this.genre = genre
    }
 }

//  Novels --- > prototype (methods,properties,prototype(parent class)) --- > Books ----> prototype (methods,properties,prototype(Object.prototype)) ----> a typical example of prototype chaining through inheritance 

// __proto__ vs prototype

// Note 
/* prototype is defined on the constructor function which is nothing but a object
 whereas __proto__ is internal implementation in js which is used to point to that object
 */