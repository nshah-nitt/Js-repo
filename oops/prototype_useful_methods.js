let animal = {
    species:"Dog",
    breeding:"multiple",
    canTalk:false,
    sound:"Wooh Wooh!",
    breed(){
        return "pamerian"
    }
}

const new_animal = Object.create(animal) // this will create a empty object with protoype as animal object
const proto = Object.getPrototypeOf(new_animal) // get the prototype for the passed object
// Object.setPrototypeOf(new_animal,{ // set the prototype for the passed object
//     species:"Stray Dog"
// })
// console.log(Object.getPrototypeOf(new_animal))
console.log(animal.isPrototypeOf(new_animal)) // check whether the object is prototype for the passed object 