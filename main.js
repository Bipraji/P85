//Create a reference for canvas 
canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");
//Give specific height and width to the car image
g_car_width = 75;
g_car_height = 100;
background_image = "parkingLot.jpg";
greencar_image = "car2.png";

//Set initial position for a car image.
g_car_x = 5;
g_car_y = 225;

function add() {
	
	background_image_tag = new Image();
	background_image_tag.onload = uploadBackground
	background_image_tag.src = background_image;

	g_car_imgtag = new Image();
	g_car_imgtag.onload = uploadgreencar;
	g_car_imgtag.src = greencar_image;

}

function uploadBackground() {
	
	ctx.drawImage(background_image_tag, 0, 0, canvas.width, canvas.height);

}

function uploadgreencar() {

	ctx.drawImage(g_car_imgtag, g_car_x, g_car_y, g_car_width, g_car_height)

}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}

function up()
{
	g_car_y = g_car_y - 5;
	uploadBackground();
	uploadgreencar();
}

function down()
{
	g_car_y = g_car_y + 5;
	uploadBackground();
	uploadgreencar();
}

function left()
{
	g_car_x = g_car_x - 5;
	uploadBackground();
	uploadgreencar();

}

function right()
{
	g_car_x = g_car_x + 5;
	uploadBackground();
	uploadgreencar();
}
