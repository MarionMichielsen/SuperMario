import Entity from './Entity.js';
import Go from './traits/Go.js';
import Jump from './traits/Jump.js';
import Velocity from './traits/Velocity.js';
import {loadMarioSprite} from './sprites.js';
import { loadMario2Sprite } from './sprites.js';

export function createMario() {
    return loadMarioSprite()
    .then(sprite => {
        const mario = new Entity();
        mario.size.set(14, 16);

        mario.addTrait(new Go());
        mario.addTrait(new Jump());
        //mario.addTrait(new Velocity());

        mario.draw = function drawMario(context) {
            sprite.draw('idle', context, this.pos.x, this.pos.y);
        }

        return mario;
    });
}
    export function createMario2() {
        return loadMario2Sprite()
        .then(sprite => {
            const mario2 = new Entity();
            mario2.size.set(14, 16);
    
            mario2.addTrait(new Go());
            mario2.addTrait(new Jump());
            //mario.addTrait(new Velocity());
    
            mario2.draw = function drawMario(context) {
                sprite.draw('idle', context, this.pos.x, this.pos.y);
            }
    
            return mario2;
        });
    }
