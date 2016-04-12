function generateFaces(){

var numberOfFaces=5;

var n=0;

var theLeftSide = document.getElementById("leftSide");
var theRightSide =document.getElementById("rightSide");
var theBody =document.getElementsByTagName("body")[0];



while(n< numberOfFaces){




var this_img = document.createElement("img");



var random_top = Math.floor(Math.random()* 400);
var random_left = Math.floor(Math.random()* 400);

this_img.style.top=random_top + "px";
this_img.style.left=random_left + "px";
this_img.src = "images/D.png";


theLeftSide.appendChild(this_img);

var leftSideImages = theLeftSide.cloneNode(true);

leftSideImages.removeChild(leftSideImages.lastChild);

var theRightSide = document.getElementById("rightSide").appendChild(leftSideImages);

n++;

}

theLeftSide.lastChild.onclick=
    function nextLevel(event){

        event.stopPropagation();

        numberOfFaces += 5;

        generateFaces();


};
   theBody.onclick = function gameOver() {

    alert("Game Over!");


    theBody.onclick = null;

    theLeftSide.lastChild.onclick = null;

     }; 

} 
