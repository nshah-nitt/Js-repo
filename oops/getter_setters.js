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