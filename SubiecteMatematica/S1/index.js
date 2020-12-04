$(function(){
var canvas = document.getElementsByClassName('cercTrigonometric')[0];

canvas.setAttribute("width" , parseFloat(window.innerWidth) * 1 + "px");
canvas.setAttribute("height" , parseFloat(window.innerWidth) * 0.5 + "px");

var cursor = canvas.getContext("2d");

cursor.beginPath();

cursor.lineWidth = 3;

cursor.arc(parseFloat(window.innerWidth)/2 , parseFloat(window.innerHeight)/3 ,  200 , 0 , 2 * Math.PI);
///////////
cursor.moveTo(parseFloat(window.innerWidth)/2 , parseFloat(window.innerHeight)/3);
cursor.font = "30px Times New Roman";
cursor.fillText("π/2" , parseFloat(window.innerWidth)/2 - 20 , parseFloat(window.innerHeight)/2 - 370);

cursor.lineTo(parseFloat(window.innerWidth)/2, parseFloat(window.innerHeight)/3 - 200);
////////////
cursor.moveTo(parseFloat(window.innerWidth)/2 , parseFloat(window.innerHeight)/3);

cursor.lineTo(parseFloat(window.innerWidth)/2 - 200, parseFloat(window.innerHeight)/3);
/////////////
cursor.moveTo(parseFloat(window.innerWidth)/2 , parseFloat(window.innerHeight)/3);

cursor.lineTo(parseFloat(window.innerWidth)/2 + 200, parseFloat(window.innerHeight)/3);
//////////
cursor.moveTo(parseFloat(window.innerWidth)/2 , parseFloat(window.innerHeight)/3);

cursor.lineTo(parseFloat(window.innerWidth)/2, parseFloat(window.innerHeight)/3 + 200);
//////////
cursor.stroke();

});
