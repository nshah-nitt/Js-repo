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
