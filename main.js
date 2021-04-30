function setup() {
	canvas = createCanvas(1240,336);
	canvas.parent('canvas');
	canvas.size();
	canvas.hide();
}
function draw() {
	game()
}	
noseX="";
noseY="";
game_status="";
function game(){
console.log("noseX = "+ noseX + "noseY= "+ noseY);
  instializeInDraw();
}
function gotPoses(results){
	if(results.length > 0)
	{
		noseX= results[0].pose.nose.x;
		noseY= results[0].pose.nose.y;
		console.log(results);
	}
	}
	function modelLoaded(){
		console.log("modelLoaded");
	}
