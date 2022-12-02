canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");

//Define the width & height of the rover image.



//background_image = "mars.jpg";

nas_bg_images = ["nasa_1.jpg", "nasa_2.jfif", "nasa_3.jfif"];

rover_image = "rover.png";

rover_x = 100;
rover_y = 100;
rover_width = 100;
rover_height = 90;

random_num= Math.floor(Math.random()*3);

background_image  = nas_bg_images[random_num];
//Create "add()" function
function add() {
    background_ImgTag = new Image();     //defining a variable with a new image
    background_ImgTag.onload = uploadBackground;      // setting a function, onloading this variable
    background_ImgTag.src = background_image;        // load image

    rover_ImgTag = new Image();  //defining a variable with a new image
    rover_ImgTag.onload = uploadrover; // setting a function, onloading this variable
    rover_ImgTag.src = rover_image;                                 // load image  

}
//Create "uploadBackground()" function.
function uploadBackground() {
    ctx.drawImage(background_ImgTag, 0, 0, canvas.width, canvas.height);               //Draw image of background
}

//Create "uploadrover()" function.

function uploadrover() {
    ctx.drawImage(rover_ImgTag, rover_x, rover_y, rover_width, rover_height);   //Draw image of rover
}






window.addEventListener("keydown", my_keydown);
function my_keydown(e) {
    keyPressed = e.keyCode;
    console.log(keyPressed);
    //Write code if keypressed is up. ASCII value of "up" arrow is 38.
    if (keyPressed == "37") {
        left();
        console.log("LEFT");
    }

    if (keyPressed == "38") {
        up();
        console.log("UP");
    }
    if (keyPressed == "39") {
        right();
        console.log("RIGHT");
    }
    if (keyPressed == "40") {
        down();
        console.log("DOWN");
    }

    //Write code if keypressed is down. ASCII value of "up" arrow is 40.





    //Additional Activity
    //Write the code for left and right arrow pressed. 
}

function up() {
    if (rover_y > 0) {
        rover_y = rover_y - 10;
        uploadBackground();
        uploadrover();
    }

}
function down() {
  if ( rover_y < 510) {
    rover_y = rover_y + 10;
    uploadBackground();
    uploadrover();
  }
}
function right() {
 
    if (rover_x < 700) {
        rover_x = rover_x + 10;
        uploadBackground();
        uploadrover();
    }



}
function left() {

    if (rover_x > 0) {
        rover_x = rover_x - 10;
        uploadBackground();
        uploadrover();
    }


}
