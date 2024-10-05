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