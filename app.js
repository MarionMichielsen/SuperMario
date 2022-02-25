//import {getXPosition, getYPosition} from '../public/js/main.js'


const cors = require("cors")
const express = require("express")
var bodyParser = require('body-parser')

const PORT = process.env.PORT || 3001
const app = express()

//app.use('healthcheck', require('./routes/healthcheck.routes'));
app.use(express.urlencoded({ extended: true}));
app.use(cors())
app.use(bodyParser.json())


app.get('/', (req,res) =>{
  res.json('hi')
})
// router.post('/save',  (req, res) => {
//   console.log(req.body)
//   res.send('yep')
// })

app.post("/save", (req, res)=>{
  headers={http_status:200, "cache-control": "no-cache"}
  body= 
  [
     {
  // "x": createRandomNumber(),
  // "y": createRandomNumber(),
      "x": getXPosition(),
     "y": getYPosition(),
    }
  ]
  res.set('Content-Type', 'application/json')
  res.status(200).send(body)
})


function createRandomNumber(){
        return Math.floor(Math.random() * 200);     
}

app.listen(PORT , ()=>{
  console.log('STARTED LISTENING ON PORT ${PORT}')
});


setTimeout(age, 10)

  function age(){
    // var xhr = new XMLHttpRequest()
    // xhr.open("GET", "/get_position")
    // xhr.onload = function(){
    //     var data = JSON.parse(this.response)
    //   //  saveGreenPosition();
    //   }
    // xhr.send()
    // setTimeout(age, 10)
}


// document.addEventListener('DOMContentLoaded', function() {
//     var buttonRandom = document.createElement('button');
//     buttonRandom.type = 'button';
//     buttonRandom.innerHTML = 'Click here to move green Mario randomly';
//     buttonRandom.className = 'btn-styled';
//   //  buttonRandom.onclick = (openData);

//     var buttonSetPos = document.createElement('button');
//     buttonSetPos.type = 'button';
//     buttonSetPos.innerHTML = 'Click here to move green Mario to a set position';
//     buttonSetPos.className = 'btn-styled';
 
//     //button.onclick = function() {
//         // …
//    // };
 
//     var container = document.getElementById('app');
//     container.appendChild(buttonRandom);
//     container.appendChild(buttonSetPos);
// }, false);
