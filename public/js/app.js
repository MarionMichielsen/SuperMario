

console.log("Hello World")
var i = 0;

document.addEventListener('DOMContentLoaded', function() {
    var buttonRandom = document.createElement('button');
    buttonRandom.type = 'button';
    buttonRandom.innerHTML = 'Click here to move green Mario randomly';
    buttonRandom.className = 'btn-styled';
    buttonRandom.onclick = (openData);

    var buttonSetPos = document.createElement('button');
    buttonSetPos.type = 'button';
    buttonSetPos.innerHTML = 'Click here to move green Mario to a set position';
    buttonSetPos.className = 'btn-styled';
 
    //button.onclick = function() {
        // …
   // };
 
    var container = document.getElementById('app');
    container.appendChild(buttonRandom);
    container.appendChild(buttonSetPos);
}, false);

function openData(){
        var data;

        var xhr = new XMLHttpRequest()
        xhr.open("GET", "/js/data.json")
        xhr.onload = function(){
            var data = JSON.parse(this.response)
            createRandomMove(data)
          }
        xhr.send()
 }

function createRandomMove(data){

    for (let i= 0; i<100, ++i;){
        let x = Math.floor(Math.random() * 200);
        let y = Math.floor(Math.random() * 200)
        let newData = {
            "x" : x,
            "y" : y,
        }
        data.push(newData);
        newData = JSON.stringify(data);
       
        fs.writeFile('data.json', newData, err => {
            // error checking
            if(err) throw err;
            
            console.log("New data added");
        });  
}
  
}

