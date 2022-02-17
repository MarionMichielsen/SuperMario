import Timer from './Timer.js';
import {loadLevel} from './loaders.js';
import {createMario} from './entities.js';
import {createMario2 } from './entities.js';
import {createCollisionLayer} from './layers.js';
import {setupKeyboard} from './input.js';
import { Mario2Go } from './traits/Go.js';

const canvas = document.getElementById('screen');
const context = canvas.getContext('2d');

Promise.all([
    createMario(),
    createMario2(),
    loadLevel('1-1'),
])
.then(([mario, mario2, level]) => {
    mario2.pos.set(32,32);
    mario.pos.set(64, 64);

    level.comp.layers.push(createCollisionLayer(level));

    level.entities.add(mario);
    level.entities.add(mario2);

    const input = setupKeyboard(mario);
    input.listenTo(window);

    ['mousedown', 'mousemove'].forEach(eventName => {
        canvas.addEventListener(eventName, event => {
            if (event.buttons === 1) {
                mario.vel.set(0, 0);
                mario.pos.set(event.offsetX, event.offsetY);
            }
        });
    });


    const timer = new Timer(1/60);
    timer.update = function update(deltaTime) {
        level.update(deltaTime);
        level.comp.draw(context);
    }


    timer.start();

    setTimeout (age, 3000);

    var i = 0;

    function age(){
        var xhr = new XMLHttpRequest()
        xhr.open("GET", "/js/data.json")
        xhr.onload = function(){
          var data = JSON.parse(this.response)
          mario2.pos.set(data[i].x, data[i].y)
          ++i;
        }
      xhr.send()
      setTimeout(age, 3000)
      }


   // timer2.start();
});

