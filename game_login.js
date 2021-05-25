function adduser(){

var player_1=document.getElementById("nameinput1").value;
var player_2=document.getElementById("nameinput2").value;

localStorage.setItem("player_1",player_1);
localStorage.setItem("player_2",player_2);

window.location="game_page.html";
}