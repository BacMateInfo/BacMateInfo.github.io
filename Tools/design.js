function hexToRgb(hex) {
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : null;
}

var inverted = 0;

function Invert()
{
	if(inverted == 0){
		$(":root").css("--color1", "#333");
		$(":root").css("--color2", "#eee");
		$(":root").css("--colorbg", "#222");
		$(".invert").css("filter" , "invert(100%)");
		inverted = 1;
	}
	else {
		$(":root").css("--color1", "#eee");
		$(":root").css("--color2", "#333");
		$(":root").css("--colorbg", "#fff");
		$(".invert").css("filter" , "invert(0)");
		inverted = 0;
	}
}