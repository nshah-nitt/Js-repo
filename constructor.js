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