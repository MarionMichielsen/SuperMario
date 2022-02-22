import Timer from './Timer.js';
import {loadLevel} from './loaders.js';
import {createMario} from './entities.js';
import {createMario2 } from './entities.js';
import {createCollisionLayer} from './layers.js';
import {setupKeyboard} from './input.js';
import { Mario2Go } from './traits/Go.js';
//import { getCurrentUser } from './login.js';


const canvas = document.getElementById('screen');
const context = canvas.getContext('2d');

// var userEmail = getEmail();
//user = getCurrentUser();
//console.log(user);
// console.log(userEmail);

//localStorage.getItem(current_user.email);

Promise.all([
    createMario(),
    createMario2(),
    loadLevel('1-1'),
])
.then(([mario, mario2, level]) => {
    mario2.pos.set(32,32);
   // var email = localStorage.getElementById("email");
   var email = "wqew"
    // const json = localStorage.getItem(email);
    // const obj = JSON.parse(json);

    // console.log(obj.posX);
    // console.log(obj.posY);
    
    mario.pos.set(64,64);
    mario2.pos.set(32,32);

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
                let user_position = new Array();
                var posX = event.offsetX;
                var posY = event.offsetY;
                user_position.push({
                    posX: posX,
                    posY: posY })
            //   localStorage.setItem(userEmail, JSON.stringify(user_position));
             //  console.log(localStorage.getItem(user))
             console.log(JSON.stringify(user_position))
             localStorage.setItem(email, JSON.stringify(user_position))
             console.log(JSON.stringify(localStorage.getItem(email)))

            }
              });
 
            })


    const timer = new Timer(1/60);
    timer.update = function update(user, deltaTime) {
        level.update(user, deltaTime);
        level.comp.draw(context);
    }


    timer.start();

    setTimeout (age, 3000);
    function age(){
        var xhr = new XMLHttpRequest()
      //  xhr.open("GET", "/js/data.json")
        xhr.open("GET", "http://localhost:3001/number")
        xhr.onload = function(){
        var data = JSON.parse(this.response)
        mario2.pos.set(data[0].x, data[0].y)
        }
      xhr.send()
      setTimeout(age, 3000)
      }

    })