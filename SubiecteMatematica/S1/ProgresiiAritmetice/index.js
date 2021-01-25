function hideButtons()
{
	$(".butoane").css("display" , "none");
}

function ShowMediaAritmetica()
{
	$(".mediaAritmetica").css("display" , "block");
	hideButtons();
}

function ShowSuma()
{
	$(".suma").css("display" , "block");
	hideButtons();
}

function inputCreate(clas , placeholder , functie)
{
	var content1 = "";
	content1 += "<div class=\" input-group NELEMENT\" style=\"display: inline-block; width: 60px;\">";
	content1 += "<input class=\"form-control " + clas + "\" placeholder=\" " + placeholder + "\" onchange=\"" + functie + "\"></div>";
	return content1;
}

var content;

function CalculeazaRezultat(){
		var an , a1 , r , s = 0;
		an = parseFloat($('.nElement').val());
		a1 = parseFloat($('.pElement').val());
		r = parseFloat($('.RAZA').val());
		
		while(an > a1)
		{
			s += an;
			an -= r;
		}
		
		s += a1;
			$('.pAritmetica').html("<h2 class=\"text-center\">" + a1 + ' + ' + (a1 + r) + ' + ' + (a1 + r + r) + ' + ... + ' + $('.nElement').val() + " = " + s + "</h2>");
	}
	
function CalculeazaNElement()
{
	var n , an , a1 , r , s;
		a1 = parseFloat($('.pElement').val());
		r = parseFloat($('.RAZA').val());
		s = parseFloat($('.rezultat').val());
		
		n = (-1 * (2*a1 - r) + Math.sqrt(Math.pow((2*a1 - r) , 2) + 8 * r * s))/(2*r); //EPIC FORMULA
		
		an = a1 + (n-1)*r;
		
		$('.pAritmetica').html("<h2 class=\"text-center\">" + a1 + ' + ' + (a1 + r) + ' + ' + (a1 + r + r) + ' + ... + ' + an + " = " + s + "</h2>");
}


$(function(){
	
	$(".pElement3").change(function(){
			var content = "a<sub>n</sub> = " + (parseFloat($('.pElement1').val()) + parseFloat($('.pElement3').val()))/2;
			$('.pElement2').html(content);
			console.log(content);
		});
	
	$('.RAZA').change(function(){
		content = "";
		r = parseFloat($('.RAZA').val());
		var a1 = parseFloat($('.pElement').val());
		content += "<h2 class=\"text-center\">";
		content += a1 + ' + ';
		content += (a1 + r) + ' + ' + (a1 + r + r) + ' + ... + ' + inputCreate('nElement' ,'', 'CalculeazaRezultat()') + ' = ' + inputCreate('rezultat' , '','CalculeazaNElement()');
		$('.pAritmetica').html(content + "</h2>");
	});
	
});