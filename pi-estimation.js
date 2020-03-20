// Alticator 2020

var pointX;
var pointY;
var container = new rect(10, 0, 25, 50, "white");
var containerCircle = new circle(10 + 25 / 2, 0 + 25, 25, "black");
var piEstimation;
var points = {
	inside: 0,
	outside: 0,
	total: 0
};
//var gameLoop = setInterval(game, 10);
game();


function getId(id) {
	return document.getElementById(id);
}

function game() {
	for (var i = 0; i < 2; i++) {
		pointX = random(0, 2500);
		pointY = random(0, 5000);
		pointX = pointX / 100;
		pointY = pointY / 100;
		new circle(pointX + 10, pointY, 0.5, "red");
		if (Math.sqrt((pointX-containerCircle.x)*(pointX-containerCircle.x) + (containerCircle.y-pointY)*(containerCircle.y-pointY)) < containerCircle.radius) {
			points.inside++;
		}
		else {
			points.outside++;
		}
		points.total++;
	}
	piEstimation = points.inside / points.total * 4;
	getId("pointsOutside").innerHTML = points.outside;
	getId("pointsInside").innerHTML = points.inside;
	getId("piEstimation").innerHTML = piEstimation;
	updateAll();
}