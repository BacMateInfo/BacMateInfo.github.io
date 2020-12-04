$(function(){

unghi = $('.unghi').val();

console.log(unghi);

var canvas = document.getElementsByClassName('cercTrigonometric')[0];

canvas.setAttribute("width" , parseFloat(window.innerWidth) * 1 + "px");
canvas.setAttribute("height" , parseFloat(window.innerWidth) * 0.5 + "px");

var cursor = canvas.getContext("2d");

cursor.beginPath();


cursor.strokeStyle = '#000000';
cursor.lineWidth = 3;

cursor.arc(parseFloat(window.innerWidth)/2 , parseFloat(window.innerHeight)/3 ,  200 , 0 , 2 * Math.PI);
///////////
cursor.moveTo(parseFloat(window.innerWidth)/2 , parseFloat(window.innerHeight)/3);
cursor.font = "30px Times New Roman";
cursor.fillText("π/2" , parseFloat(window.innerWidth)/2 - 20 , parseFloat(window.innerHeight)/3 - 215);

cursor.lineTo(parseFloat(window.innerWidth)/2, parseFloat(window.innerHeight)/3 - 200);
////////////
cursor.moveTo(parseFloat(window.innerWidth)/2 , parseFloat(window.innerHeight)/3);

cursor.fillText("π" , parseFloat(window.innerWidth)/2 - 225 , parseFloat(window.innerHeight)/3 + 10);

cursor.lineTo(parseFloat(window.innerWidth)/2 - 200, parseFloat(window.innerHeight)/3);
/////////////
cursor.moveTo(parseFloat(window.innerWidth)/2 , parseFloat(window.innerHeight)/3);

cursor.fillText("0" , parseFloat(window.innerWidth)/2 + 210 , parseFloat(window.innerHeight)/3  - 10);
cursor.fillText("2π" , parseFloat(window.innerWidth)/2 + 210 , parseFloat(window.innerHeight)/3  + 30);

cursor.lineTo(parseFloat(window.innerWidth)/2 + 200, parseFloat(window.innerHeight)/3);
//////////
cursor.moveTo(parseFloat(window.innerWidth)/2 , parseFloat(window.innerHeight)/3);

cursor.fillText("3π/2" , parseFloat(window.innerWidth)/2 - 30 , parseFloat(window.innerHeight)/3 + 230);
console.log(unghi);
cursor.lineTo(parseFloat(window.innerWidth)/2, parseFloat(window.innerHeight)/3 + 200);


//////////
cursor.stroke();

$('.unghi').change(function(){
	
	cursor.clearRect(0, 0, canvas.width, canvas.height);
	
	unghi = $('.unghi').val();
	cursor.beginPath();
	cursor.lineWidth = 3;
	unghi = unghi/57.2958;
	cursor.moveTo(parseFloat(window.innerWidth)/2 , parseFloat(window.innerHeight)/3);
	cursor.strokeStyle = '#ff0000';
	cursor.lineTo(parseFloat(window.innerWidth)/2 + 200 * Math.cos(unghi), parseFloat(window.innerHeight)/3 + -200 * Math.sin(unghi));
	cursor.stroke();

cursor.beginPath();
cursor.strokeStyle = '#000000';
cursor.lineWidth = 3;

cursor.arc(parseFloat(window.innerWidth)/2 , parseFloat(window.innerHeight)/3 ,  200 , 0 , 2 * Math.PI);
///////////
cursor.moveTo(parseFloat(window.innerWidth)/2 , parseFloat(window.innerHeight)/3);
cursor.font = "30px Times New Roman";
cursor.fillText("π/2" , parseFloat(window.innerWidth)/2 - 20 , parseFloat(window.innerHeight)/3 - 215);

cursor.lineTo(parseFloat(window.innerWidth)/2, parseFloat(window.innerHeight)/3 - 200);
////////////
cursor.moveTo(parseFloat(window.innerWidth)/2 , parseFloat(window.innerHeight)/3);

cursor.fillText("π" , parseFloat(window.innerWidth)/2 - 225 , parseFloat(window.innerHeight)/3 + 10);

cursor.lineTo(parseFloat(window.innerWidth)/2 - 200, parseFloat(window.innerHeight)/3);
/////////////
cursor.moveTo(parseFloat(window.innerWidth)/2 , parseFloat(window.innerHeight)/3);

cursor.fillText("0" , parseFloat(window.innerWidth)/2 + 210 , parseFloat(window.innerHeight)/3  - 10);
cursor.fillText("2π" , parseFloat(window.innerWidth)/2 + 210 , parseFloat(window.innerHeight)/3  + 30);

cursor.lineTo(parseFloat(window.innerWidth)/2 + 200, parseFloat(window.innerHeight)/3);
//////////
cursor.moveTo(parseFloat(window.innerWidth)/2 , parseFloat(window.innerHeight)/3);

cursor.fillText("3π/2" , parseFloat(window.innerWidth)/2 - 30 , parseFloat(window.innerHeight)/3 + 230);
console.log(unghi);
cursor.lineTo(parseFloat(window.innerWidth)/2, parseFloat(window.innerHeight)/3 + 200);


//////////
cursor.stroke();

});

});
