

var nameOne = document.getElementById("header1");
var nameTwo = document.getElementById("header2");
var userName = prompt("i would like to know your name 😊");
let value = "";
function USER (){
  
  if(userName === value ){
  
  nameOne.innerHTML="Dear,";
  }
  else{
    nameOne.innerHTML =`${userName} 👋,`;
  }
  
  
}
USER();

   
  
