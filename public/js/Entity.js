import {Vec2} from './math.js';

export class Trait {
    constructor(name) {
        this.NAME = name;
    }

    update() {
        console.warn('Unhandled update call in Trait');
    }
}

export default class Entity {
    constructor() {
        this.pos = new Vec2(0, 0);
        this.vel = new Vec2(0, 0);
        this.size = new Vec2(0, 0);

        this.traits = [];
    }

    addTrait(trait) {
        this.traits.push(trait);
        this[trait.NAME] = trait;
    }

    update(deltaTime) {
        this.traits.forEach(trait => {
            trait.update(this, deltaTime);
         //   this.updateMarioPosition(uuid, this.pos)
            
        });
    }
}

//     updateMarioPosition(uuid){
//         xhttp.open("POST", "https://marionmichielsen-backend.herokuapp.com/save");
//         xhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
//         console.log("trying new request: X:"+ posX+" Y: "+posY);
//         xhttp.send(JSON.stringify({ "uuid": uuid, "x":posX, "y":posY, })
// ;
// }

