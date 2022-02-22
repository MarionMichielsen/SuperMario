var currentUser = "red";


function checkLogin(){
let email,psw;
email=document.getElementById("emailLogin").value;

psw=document.getElementById("pswLogin").value;

let user_records=new Array();
user_records=JSON.parse(localStorage.getItem("users"))?JSON.parse(localStorage.getItem("users")):[]

if(user_records.some((v)=>{return v.email==email && v.psw==psw}))
{
  alert("Login Pass");
  let current_user=user_records.filter((v)=>{return v.email==email && v.psw==psw})[0]
 localStorage.setItem('name',current_user.name);
 localStorage.setItem('email',current_user.email);
 window.location.href="game.html"
}
else
{
  alert('Login Fail');
}

}

function saveData() {
  let name, email, psw;
  name = document.getElementById("name").value;
  email = document.getElementById("email").value;
  posX = 0;
  posY = 0;

  psw = document.getElementById("psw").value;

  let user_records = new Array();
  user_records = JSON.parse(localStorage.getItem("users"))
    ? JSON.parse(localStorage.getItem("users"))
    : [];
  if (
    user_records.some((v) => {
      return v.email == email;
    })
  ) {
    alert("That user already exists");
  } else {
      key= email;
      user_records.push({
      name: name,
      email: email,
      psw: psw,
      posX: posX,
      posY, posY
    });
    setCurrentUser(name);
    localStorage.setItem(key, JSON.stringify(user_records));
  }
 // showData();
}

function setCurrentUser(name){
    currentUser = name;
}
export function getCurrentUser(){
    return currentUser;
}



// function showData() {
//   document.getElementById("showUsers").innerHTML = "";
//   let user_records = new Array();
//   user_records = JSON.parse(localStorage.getItem("users"))
//     ? JSON.parse(localStorage.getItem("users"))
//     : [];
//   if (user_records) {
//     for (let i = 0; i < user_records.length; i++) {
//       let addDiv = document.createElement("div");
//       addDiv.className = "row";
//       addDiv.innerHTML =
//         '  <div class="col-sm-4" style="padding: 10px;">' +
//         user_records[i].name +
//         '</div><div class="col-sm-4" style="padding: 10px;">' +
//         user_records[i].email +
//         '</div><div class="col-sm-4" style="padding: 10px;">' +
//         user_records[i].psw +
//         "</div>";
//       document.getElementById("showUsers").appendChild(addDiv);
//     }
//   }
// }
