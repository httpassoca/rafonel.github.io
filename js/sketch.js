
const triangles = [];
const frmRate = 30;
let section;
function setup() {
    section = select('#secPerfil')
    frameRate(frmRate);
    const canvas = createCanvas(section.size().width,section.size().height);
    // canvas.class('hide-on-med-and-up');
    canvas.id('CANVAO');
    // canvas.parent('secPerfil');
    setTimeout(CreateTriangle,1500)
    setInterval(function(){
        if(triangles.length < 12)
        CreateTriangle();
        // console.log(triangles)
        // console.log(CountAliveTriangles());
    },3000);
    angleMode(DEGREES);
}


function draw() {
    clear();
    for (var i = triangles.length - 1; i >= 0; i--) {
        if(triangles[i].isAlive()){
            triangles[i].update();
            triangles[i].show();
        }else{
            triangles.splice(i,1);
        }
    }
}
function CountAliveTriangles(){
    let sum = 0
    for (let i in triangles){
        if (triangles[i].isAlive()){
            sum += 1;
        }
    }
    return (sum + '-' + triangles.length);
}
function CreateTriangle(){
    star = new Triangle();
    append(triangles, star);
}
function windowResized() {
    resizeCanvas(section.size().width , section.size().height);
  }