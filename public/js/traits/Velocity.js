import {Trait} from '../Entity.js';

export default class Velocity extends Trait {
    constructor() {
        super('velocity');
    }

    update(user, entity, deltaTime) {
        entity.pos.x += entity.vel.x * deltaTime;
        entity.pos.y += entity.vel.y * deltaTime;
        localStorage.setItem(user, JSON.stringify(entity.pos.y, entity.pos.y));
    }
}
