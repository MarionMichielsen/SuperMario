import Timer from "./Timer.js";
import { loadLevel } from "./loaders.js";
import { createMario } from "./entities.js";
import { createMario2 } from "./entities.js";
import { createCollisionLayer } from "./layers.js";
import { setupKeyboard } from "./input.js";


localStorage.setItem("id", JSON.stringify('{"id":"1"}'));
const uuid = localStorage.getItem("uuid");
let user_records = new Array();
user_records = JSON.parse(localStorage.getItem("users"))
  ? JSON.parse(localStorage.getItem("users"))
  : [];
console.log(localStorage.getItem("users"));

if (localStorage.getItem("uuid") === null) {
  const uuid = create_UUID();
  localStorage.setItem("uuid", JSON.stringify(uuid));
  console.log("New User, id: " + uuid);
  user_records.push(localStorage.getItem("uuid"));
  localStorage.setItem("users", JSON.stringify(user_records));
} else {
  console.log("Current User: " + uuid);
}

function create_UUID() {
  var dt = new Date().getTime();
  var uuid = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
    /[xy]/g,
    function (c) {
      var r = (dt + Math.random() * 16) % 16 | 0;
      dt = Math.floor(dt / 16);
      return (c == "x" ? r : (r & 0x3) | 0x8).toString(16);
      //   localStorage.setItem(uuid,JSON.stringify('"id":"${uuid}"'));
    }
  );
  // localStorage.setItem(uuid,JSON.stringify('"id":"${uuid}"'));
  return uuid;
}

// import express from 'express';
// import cors from 'corse';
// import bodyParser from '../node_modules/body-parser/index.js'
// const cors = require("cors")
// const express = require("express")
// var bodyParser = require('body-parser')

// const PORT = process.env.PORT || 3000
// const app = express()
// const router = express. Router(); 
// router. get('/save')

const canvas = document.getElementById("screen");
const context = canvas.getContext("2d");

// function savePosition(posX, posY) {
//   let data = {
//       uuid: uuid,
//       x: posX,  
//       y: posY
//   };
//   fetch("/save", {
//       headers: {
//           'Accept': 'application/json',
//           'Content-Type': 'application/json'
//       },
//       method: "POST",
//       body: JSON.stringify(data)
//   }).then((response) => {
//       response.text().then(function (data) {
//           let result = JSON.parse(data);
//           console.log(result)
//       });
//   }).catch((error) => {
//       console.log(error)
//   });
// }

Promise.all([createMario(), createMario2(), loadLevel("1-1")]).then(
  ([mario, mario2, level]) => {
    mario.pos.set(64, 64);
    mario2.pos.set(32, 32);

    level.comp.layers.push(createCollisionLayer(level));

    level.entities.add(mario);
    level.entities.add(mario2);

    // let xGreen = new Map();
    // xGreen.set(uuid,mario.pos.getX())
    // let yGreen = new Map();
    // yGreen.set(uuid,mario.pos.getX())

  //   $.post('/save', () => {
  //     x : mario.pos.getX();
  // })



    const input = setupKeyboard(mario);
    input.listenTo(window);


    ["mousedown", "mousemove"].forEach((eventName) => {
      canvas.addEventListener(eventName, (event) => {
        if (event.buttons === 1) {
          mario.vel.set(0, 0);
          let posX= event.offsetX;
          let posY = event.offsetY;
          mario.pos.set(event.offsetX, event.offsetY);
          
          const xhttp = new XMLHttpRequest();
          xhttp.open("GET", "http://localhost:3001/save");
          xhttp.send();
          xhttp.open("POST", "http://localhost:3001/save");
          xhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
          console.log("trying new request");
          xhttp.send(JSON.stringify({ 
            "uuid": uuid, "x":posX, "y":posY,
          }));

        //   let request = new XMLHttpRequest();
        //   request.open("POST", "http://localhost:3001/save");
        //   console.log("trying to send request")
        //   request.onload = function(){
    
        //   body= 
        //   [
        //      {"uuid": uuid,
        //       "x": posX,
        //      "y": posY,
        //     },
        //   ]
        //   console.log(body)
        //   request.send(body);
        // }
          //event.preventDefault()

          // xGreen.set(uuid,event.offsetX)
          // yGreen.set(uuid,event.offsetY)
       //   console.log("Moved to:" +xGreen.get(uuid));
        //  player.setPositionX(event.offsetX)
        //  player.setPositionX(event.offsetY)

          //     let user_position = new Array();
          //     var posX = event.offsetX;
          //     var posY = event.offsetY;
          //     user_position.push({
          //         posX: posX,
          //         posY: posY })
          //  console.log(JSON.stringify(user_position))
          //  localStorage.setItem(email, JSON.stringify(user_position))
          //  console.log(JSON.stringify(localStorage.getItem(email)))
          }
      
    });
  })
    // export function getXPosition(){
    //   return posX
    // }
    // export function getYPosition(){
    //   return posY
    // }


    const timer = new Timer(1 / 60);
    timer.update = function update(user, deltaTime) {
      level.update(user, deltaTime);
      level.comp.draw(context);
      age();
    };

    timer.start();

   // setTimeout(age, 1/60);

    function isCurrentUser(otherPlayer){
      if (!otherPlayer.uuid===uuid){
        mario2.pos.set(xGreen.get(otherPlayer.uuid),yGreen.get(otherPlayer.uuid))
      }
      else if (otherPlayer.uuid === uuid)
      mario2.pos.set(100,100);
    }

    function age() {
      user_records.forEach(isCurrentUser);

      // var xhr = new XMLHttpRequest();
      // xhr.open("GET", "http://localhost:3001/number");
      // xhr.onload = function () {
      //   var data = JSON.parse(this.response);
      //   mario2.pos.set(data[0].x, data[0].y);
      }
     // xhr.send();

  }
  )
  

