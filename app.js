const cors = require("cors")
const express = require("express")
var bodyParser = require('body-parser')

const PORT = process.env.PORT || 3001
const app = express()
let uuid ;
let x ;
let y ;

//app.use('healthcheck', require('./routes/healthcheck.routes'));
app.use(express.urlencoded({ extended: true}));
app.use(cors())
app.use(bodyParser.json())

app.post("/save", (req, res)=>{
  headers={http_status:200, "cache-control": "no-cache"}
  console.log('TRYING to get data from frontend to backend')
  uuid = req.body.uuid;
  x = req.body.x;
  y = req.body.y;
  console.log("Y "+y);
  console.log("Z " +x)
  console.log("UUID: "+uuid)

  res.set('Content-Type', 'application/json')
})

app.get("/save", (req, res)=>{
  headers={http_status:200, "cache-control": "no-cache"}
  body= 
  [
    {
      "uuid": uuid,
      "x": x,
      "y": y,
    }
  ]
  res.set('Content-Type', 'application/json')
  res.status(200).send(body)
  console.log("trying to send data back to frontend")
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