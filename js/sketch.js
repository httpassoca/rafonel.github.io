
var triangles = [];
var canvas;
function setup() {
    canvas = createCanvas(windowWidth,windowHeight);
    // canvas.class('hide-on-med-and-up');
    canvas.id('CANVAO');
    canvas.parent('secPerfil');
    setInterval(CreateTriangle,3000);
    angleMode(DEGREES);
    
    

}


function draw() {
    clear();
    for (var i = triangles.length - 1; i >= 0; i--) {
        if(triangles[i].isAlive()){
            triangles[i].update();
            triangles[i].show();
        }
    }
}

function CreateTriangle(){
    star = new Triangle();
    append(triangles, star);
}
function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
  }