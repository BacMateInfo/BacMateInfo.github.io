
$(function(){

unghi = $('.unghi').val();

console.log(unghi);

var canvas = document.getElementsByClassName('cercTrigonometric')[0];

canvas.setAttribute("width" , parseFloat(window.innerWidth) * 1 + "px");
canvas.setAttribute("height" , parseFloat(window.innerHeight) * 1 + "px");

var cursor = canvas.getContext("2d");

cursor.beginPath();


cursor.strokeStyle = '#000000';
cursor.lineWidth = 3;

cursor.arc(parseFloat(window.innerWidth)/2 , parseFloat(window.innerHeight)/2.5 ,  window.innerWidth * 0.15 , 0 , 2 * Math.PI);
///////////
cursor.moveTo(parseFloat(window.innerWidth)/2 , parseFloat(window.innerHeight)/2.5);
cursor.font = "30px Times New Roman";
cursor.fillText("π/2" , parseFloat(window.innerWidth)/2 - 20 , parseFloat(window.innerHeight)/2.5 - window.innerWidth * 0.15 - 15);

cursor.lineTo(parseFloat(window.innerWidth)/2, parseFloat(window.innerHeight)/2.5 - window.innerWidth * 0.15);
////////////
cursor.moveTo(parseFloat(window.innerWidth)/2 , parseFloat(window.innerHeight)/2.5);

cursor.fillText("π" , parseFloat(window.innerWidth)/2 - window.innerWidth * 0.15 - 25 , parseFloat(window.innerHeight)/2.5 + 10);

cursor.lineTo(parseFloat(window.innerWidth)/2 - window.innerWidth * 0.15, parseFloat(window.innerHeight)/2.5);
/////////////
cursor.moveTo(parseFloat(window.innerWidth)/2 , parseFloat(window.innerHeight)/2.5);

cursor.fillText("0" , parseFloat(window.innerWidth)/2 + window.innerWidth * 0.15 + 10 , parseFloat(window.innerHeight)/2.5  - 10);
cursor.fillText("2π" , parseFloat(window.innerWidth)/2 + window.innerWidth * 0.15 + 10 , parseFloat(window.innerHeight)/2.5  + 30);

cursor.lineTo(parseFloat(window.innerWidth)/2 + window.innerWidth * 0.15, parseFloat(window.innerHeight)/2.5);
//////////
cursor.moveTo(parseFloat(window.innerWidth)/2 , parseFloat(window.innerHeight)/2.5);

cursor.fillText("3π/2" , parseFloat(window.innerWidth)/2 - 30 , parseFloat(window.innerHeight)/2.5 + window.innerWidth * 0.15 + 30);
console.log(unghi);
cursor.lineTo(parseFloat(window.innerWidth)/2, parseFloat(window.innerHeight)/2.5 + window.innerWidth * 0.15);


//////////
cursor.stroke();

$('.unghi').change(function(){
	
	cursor.clearRect(0, 0, canvas.width, canvas.height);
	
	
cursor.beginPath();
cursor.strokeStyle = '#000000';
cursor.lineWidth = 3;

cursor.arc(parseFloat(window.innerWidth)/2 , parseFloat(window.innerHeight)/2.5 ,  window.innerWidth * 0.15 , 0 , 2 * Math.PI);
///////////
cursor.moveTo(parseFloat(window.innerWidth)/2 , parseFloat(window.innerHeight)/2.5);
cursor.font = "30px Times New Roman";
cursor.fillText("π/2" , parseFloat(window.innerWidth)/2 - 20 , parseFloat(window.innerHeight)/2.5 -  window.innerWidth * 0.15 - 15);

cursor.lineTo(parseFloat(window.innerWidth)/2, parseFloat(window.innerHeight)/2.5 - window.innerWidth * 0.15);
////////////
cursor.moveTo(parseFloat(window.innerWidth)/2 , parseFloat(window.innerHeight)/2.5);

cursor.fillText("π" , parseFloat(window.innerWidth)/2 -  window.innerWidth * 0.15 - 25 , parseFloat(window.innerHeight)/2.5 + 10);

cursor.lineTo(parseFloat(window.innerWidth)/2 - window.innerWidth * 0.15, parseFloat(window.innerHeight)/2.5);
/////////////
cursor.moveTo(parseFloat(window.innerWidth)/2 , parseFloat(window.innerHeight)/2.5);

cursor.fillText("0" , parseFloat(window.innerWidth)/2 +  window.innerWidth * 0.15 + 10 , parseFloat(window.innerHeight)/2.5  - 10);
cursor.fillText("2π" , parseFloat(window.innerWidth)/2 +  window.innerWidth * 0.15 + 10 , parseFloat(window.innerHeight)/2.5  + 30);

cursor.lineTo(parseFloat(window.innerWidth)/2 + window.innerWidth * 0.15, parseFloat(window.innerHeight)/2.5);
//////////
cursor.moveTo(parseFloat(window.innerWidth)/2 , parseFloat(window.innerHeight)/2.5);

cursor.fillText("3π/2" , parseFloat(window.innerWidth)/2 - 30 , parseFloat(window.innerHeight)/2.5 +  window.innerWidth * 0.15 + 30);
console.log(unghi);
cursor.lineTo(parseFloat(window.innerWidth)/2, parseFloat(window.innerHeight)/2.5 + window.innerWidth * 0.15);


//////////
cursor.stroke();

	
	unghi = $('.unghi').val();
	cursor.beginPath();
	cursor.lineWidth = 3;
	unghi = unghi/57.2958;
	cursor.moveTo(parseFloat(window.innerWidth)/2 , parseFloat(window.innerHeight)/2.5);
	cursor.strokeStyle = '#ff0000';
	
	var x = parseFloat(window.innerWidth)/2 + window.innerWidth * 0.15 * Math.cos(unghi);
	var y = parseFloat(window.innerHeight)/2.5 + -window.innerWidth * 0.15 * Math.sin(unghi);
	
	cursor.lineTo(x, y);
	
	cursor.stroke();
	cursor.beginPath();
	cursor.strokeStyle = '#0000FF';
	
	cursor.moveTo(parseFloat(window.innerWidth)/2 + window.innerWidth * 0.15 * Math.cos(unghi), parseFloat(window.innerHeight)/2.5 + -window.innerWidth * 0.15 * Math.sin(unghi) + 2);
	cursor.font = "25px Times New Roman";
	
	var lineLen = window.innerWidth * 0.15 * Math.cos(unghi);
	
	cursor.fillText("sin(" + unghi*57.2958 + ")" , parseFloat(window.innerWidth)/2 + window.innerWidth * 0.15 * Math.cos(unghi) - lineLen, parseFloat(window.innerHeight)/2.5 + -window.innerWidth * 0.15 * Math.sin(unghi) - 5);
	cursor.lineTo(parseFloat(window.innerWidth)/2 + window.innerWidth * 0.15 * Math.cos(unghi) , parseFloat(window.innerHeight)/2.5);
	
	cursor.moveTo(parseFloat(window.innerWidth)/2 + window.innerWidth * 0.15 * Math.cos(unghi), parseFloat(window.innerHeight)/2.5 + -window.innerWidth * 0.15 * Math.sin(unghi) + 2);
	
	cursor.fillText("cos(" + unghi*57.2958 + ")" , parseFloat(window.innerWidth)/2 + window.innerWidth * 0.15 * Math.cos(unghi) - 40, parseFloat(window.innerHeight)/2.5 + 22);
	cursor.lineTo(parseFloat(window.innerWidth)/2 ,parseFloat(window.innerHeight)/2.5 + -window.innerWidth * 0.15 * Math.sin(unghi) + 2);
	
	cursor.stroke();
	
	$('.sin').html("sin(" + unghi*57.2958 + ") = " + Math.sin(unghi));
	console.log(unghi);
	$('.cos').html("cos(" + unghi*57.2958 + ") = " + Math.cos(unghi));
	$('.tg').html("tg(" + unghi*57.2958 + ") = " + Math.tan(unghi));
	$('.ctg').html("ctg(" + unghi*57.2958 + ") = " + 1/Math.cos(unghi));


});

});
