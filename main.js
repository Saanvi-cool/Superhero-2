var canvas=new fabric.Canvas("my_canvas");
block_width=200;
block_height=300;
player_x=10;
player_y=5;
var player_object="";
var block_object="null";
function player_update(){
    fabric.Image.fromURL("player.png",function(img){
        player_object=img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(150);
        player_object.set({
            top:player_y,
            left:player_x
        });
        canvas.add(player_object);
           });



}
function new_block_image(block_image){
    fabric.Image.fromURL(block_image,function (img){
        block_object=img;
        block_object.scaleToWidth(block_width);
        block_object.scaleToHeight(block_height);
        block_object.set({
            top:player_y,
            left:player_x
        });
        canvas.add(block_object);
    });

}
window.addEventListener("keydown",mykeydown);
function mykeydown(e){
    keypress=e.keyCode;
    if(e.shiftKey==true&&keypress=='80'){
    block_width=block_width+10;
    block_height=block_height+10;
    document.getElementById("block_width").innerHTML=block_width;
    document.getElementById("block_height").innerHTML=block_height;
    console.log("shift and p pressed together");
    }
    if(e.shiftKey==true&&keypress=='77'){
        block_height=block_height-10;
        block_width=block_width-10;
        document.getElementById("block_width").innerHTML=block_width;
        document.getElementById("block_height").innerHTML=block_height;
        console.log("shift and m pressed together");
    }
   
    if(keypress=='87'){
        new_block_image('Final_output.png');
    }
}