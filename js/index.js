
$(".danceParty").click(function() {
  // assign each named color a random number 0-255
  var red = Math.floor(Math.random() * 255);
  var green = Math.floor(Math.random() * 255);
  var blue = Math.floor(Math.random() * 255);

var randomRGBA = "rgba(" + red + "," + green + "," + blue + ",1)";

//Set new background color with randomRGBA
$("#edm").css("background", randomRGBA);
});
