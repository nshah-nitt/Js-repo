/**
 * chaining prototype in javascript
 */

class birds{
    constructor(name,sound){
        this.name = name
        this.sound = sound
    }

    getSound(){
        return `${this.name} sound ${this.sound} !!`
    }
}

