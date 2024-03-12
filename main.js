var canvas=new fabric.Canvas("myCanvas");
var playerX=10;
var playerY=10;

var blockwidth=30;
var blockheight=30;

var playerObJ="";
var blockObJ="";

function playerUpdate(){
    fabric.Image.fromURL("player.png",function(Img){
        playerObJ=Img;

        playerObJ.scaleToWidth(150);
        playerObJ.scaleToHeight(140);
        playerObJ.set({
            top:playerY,
            left:playerX
        })
        canvas.add(playerObJ)
    })
}


function newImage(getImage){
    fabric.Image.fromURL(getImage,function(Img){
       blockObJ=Img;

       blockObJ.scaleToWidth(blockwidth);
       blockObJ.scaleToHeight(blockheight);
       blockObJ.set({
            top:playerY,
            left:playerX
        })
        canvas.add(blockObJ)
    })
}

window.addEventListener("keydown",myKeydown);
function myKeydown(e){
    keyPressed=e.keyCode;
    if (e.shiftKey ==true && keyPressed=="80") {
        blockwidth=blockwidth+10;
        blockheight=blockheight+10
        document.getElementById("width").innerHTML=blockwidth;
        document.getElementById("height").innerHTML=blockheight;
    }
    if (e.shiftKey ==true && keyPressed=="77") {
        blockwidth=blockwidth-10;
        blockheight=blockheight-10;
        document.getElementById("width").innerHTML=blockwidth;
        document.getElementById("height").innerHTML=blockheight;
    }
    

    if (keyPressed=="37") {
        left()
    }

    if (keyPressed=="38") {
        up()
    }

    if (keyPressed=="39") {
        right()
    }

    if (keyPressed=="40") {
        down()
    }

    if (keyPressed=="67") {
        newImage("cloud.jpg")
    }

    if (keyPressed=="68") {
        newImage("dark_green.png")
    }

    if (keyPressed=="71") {
        newImage("ground.png")
    }

    if (keyPressed=="76") {
        newImage("light_green.png")
    }

    if (keyPressed=="82") {
        newImage("roof.jpg")
    }

     if (keyPressed=="84") {
        newImage("trunk.jpg")
    }

     if (keyPressed=="85") {
        newImage("unique.png")
    }

     if (keyPressed=="87") {
        newImage("wall.jpg")
    }

     if (keyPressed=="89") {
        newImage("yellow_wall.png")
    }


}
function up(){
    if (playerY>=0) {
        playerY=playerY-blockheight;
        canvas.remove(playerObJ);
        playerUpdate()
    }
}

function down(){
    if (playerY<=290) {
        playerY=playerY+blockheight;
        canvas.remove(playerObJ);
        playerUpdate()
    }
}

function left(){
    if (playerX>0) {
        playerX=playerX-blockwidth;
        canvas.remove(playerObJ);
        playerUpdate()
    }
}

function right(){
    if (playerX<=900) {
        playerX=playerX+blockwidth;
        canvas.remove(playerObJ);
        playerUpdate()
    }
}