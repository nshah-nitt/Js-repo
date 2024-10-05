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
