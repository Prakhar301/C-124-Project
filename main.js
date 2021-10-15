function setup(){
    canvas=createCanvas(400,400);
    canvas.position(500,100);
    video=createCapture(VIDEO);
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}
function gotPoses(results){
    if(results.length>0){
        console.log(results);
    }
}
function modelLoaded(){
    console.log("PoseNet Intialized");
}