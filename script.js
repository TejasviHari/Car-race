canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

rover_x=350;
rover_y=350;

rover_height=100;
rover_width=90;

background_img="background.jpg";
rover_img="car.png";

function add(){
    background_imgTag=new Image();
    background_imgTag.onload=uploadbackround;
    background_imgTag.src=background_img;

    rover_imgTag=new Image();
    rover_imgTag.onload=uploadrover;
    rover_imgTag.src=rover_img; 
}

function uploadbackround(){
    ctx.drawImage(background_imgTag,0,0,canvas.width,canvas.height);
}

function uploadrover(){
    ctx.drawImage(rover_imgTag,rover_x,rover_y,rover_width,rover_height);
}


