function normala()
{
	$('.Norm').css("display" , "table");
	$('.Stanga').css("display" , "none");
	$('.Dreapta').css("display" , "none");
}
function stanga()
{
	$('.Norm').css("display" , "none");
	$('.Stanga').css("display" , "table");
	$('.Dreapta').css("display" , "none");
}

function dreapta()
{
	$('.Norm').css("display" , "none");
	$('.Stanga').css("display" , "none");
	$('.Dreapta').css("display" , "table");
}

function calculeazaDerivata()
{
	var rezultat = math.derivative($('.l').val() , 'x').toString();
	rezultat = rezultat.replace("*" , "\\cdot");
	rezultat = "\\(" + rezultat + "\\)";
	$('.rezultat').html(rezultat);
	renderMathInElement(document.body);
}