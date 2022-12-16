status = "";

function setup(){
    canvas = createCanvas(500, 400);
    canvas.position(390, 300);
    camera = createCapture(VIDEO);
    camera.hide();
    camera.size(500, 400);
}

function start(){
    model = ml5.objectDetector('cocossd', modelloaded);
    document.getElementById("status").innerHTML = "Status = Detecting Object";
    input = document.getElementById("input_id").value;

}

function modelloaded(){
    console.log("model is ready to work");
    status = true;
}

function draw(){
    image(camera, 0, 0, 500, 400);
}