canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d")

background_img="download.jpg";

carblue_width=100;
carblue_height=90;
carblue_img="Bluecar.png";
carblue_x=10;
carblue_y=10;

cargreen_width=100;
cargreen_height=90;
cargreen_img="Greencar.png";
cargreen_x=10;
cargreen_y=10;


function add(){
    background_imgTag = new Image(); 
    background_imgTag.onload = uploadBackground;
    background_imgTag.src = background_img;


    carblue_imgTag = new Image(); 
    carblue_imgTag.onload = uploadrover;
    carblue_imgTag.src = carblue_img;

    cargreen_imgTag = new Image(); 
    cargreen_imgTag.onload = uploadrover;
    cargreen_imgTag.src = cargreen_img;
}

function uploadBackground(){
    ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}

function uploadrover(){
    ctx.drawImage(carblue_imgTag, car_x, carblue_y, carblue.width, carblue.height);

    ctx.drawImage(cargreen_imgTag, cargreen_x, cargreen_y, rover.width, rover.height);
}

window.addEventListener("keydown", my_keydown);
function my_keydown(e){
    keypressed=e.keyCode;

    console.log(keypressed);
    if(keypressed=="37"){
        carblue_left();
        console.log("left arrow key");
    }
    if(keypressed=="38"){
        carblue_up();
        console.log("up arrow");
    }
    if(keypressed=="39"){
        carblue_right();
        console.log("right arrow key");
    }
    if(keypressed=="40"){
        carblue_down();
        console.log("down arrow key");
    }
    if(keypressed=="87"){
        cargreen_w();
        console.log("w key");
    }
    if(keypressed=="65"){
        cargreen_a();
        console.log("a key");
    }
    if(keypressed=="83"){
        cargreen_s();
        console.log("s key");
    }
    if(keypressed=="68"){
        cargreen_d();
        console.log("d key");
    }
}

function carblue_up()
{

    if(carblue_y >= 0){
        carblue_y = carblue_y -10;
        console.log("When up arrow is pressed, x = " + carblue_x +"| y = " + carblue_y)
        uploadBackground();
        uploadcarblue();
        uploadcargreen();

    }
}
function carblue_down()
{

    if(carblue_y >= 500){
        carblue_y = carblue_y +10;
        console.log("When down arrow key is pressed, x = " + carblue_x +"| y = " + carblue_y)
        uploadBackground();
        uploadcarblue();
        uploadcargreen();
    }
}
function carblue_left()
{

    if(carblue_x >= 0){
        carblue_x = carblue_x -10;
        console.log("When left arrow key is pressed, x = " + carblue_x +"| y = " + carblue_y)
        uploadBackground();
        uploadcarblue();
        uploadcargreen();

    }
}
function carblue_right()
{

    if(carblue_x >= 500){
        carblue_x = carblue_x +10;
        console.log("When right arrow key is pressed, x = " + carblue_x +"| y = " + carblue_y)
        uploadBackground();
        uploadcarblue();
        uploadcargreen();
    }
}
function cargreen_w()
{

    if(cargreen_y >= 0){
        cargreen_y = cargreen_y -10;
        console.log("When w key is pressed, x = " + cargreen_x +"| y = " + cargreen_y)
        uploadBackground();
        uploadcarblue();
        uploadcargreen();

    }
}
function cargreen_s()
{

    if(cargreen_y >= 500){
        cargreen_y = cargreen_y +10;
        console.log("When s key is pressed, x = " + cargreen_x +"| y = " + cargreen_y)
        uploadBackground();
        uploadcarblue();
        uploadcargreen();
    }
}
function cargreen_a()
{

    if(cargreen_x >= 0){
        cargreen_x = cargreen_x -10;
        console.log("When a key is pressed, x = " + cargreen_x +"| y = " + cargreen_y)
        uploadBackground();
        uploadcarblue();
        uploadcargreen();

    }
}
function cargreen_d()
{

    if(cargreen_x >= 500){
        cargreen_x = cargreen_x +10;
        console.log("When d key is pressed, x = " + cargreen_x +"| y = " + cargreen_y)
        uploadBackground();
        uploadcarblue();
        uploadcargreen();
    }
}