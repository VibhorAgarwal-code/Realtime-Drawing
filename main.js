noseX=0;
noseY=0;
leftwristX=0;
rightwristX=0;
difference=0;
function setup(){
    canvas=createCanvas(550,550);
    canvas.center();

    video=createCapture(VIDEO);
    video.size(550,500);

    canvas.position(560,150);

    posenet=ml5.poseNet(video,modelLoaded);
    posenet.on('pose',gotPoses);
}
function draw(){
    background('#FFBC00');
    fill('#00FF00');
    stroke('#00FF00');
    square(noseX,noseY,difference);
    document.getElementById("size").innerHTML="Width and height of the square will be = "+difference+"px";
}
function modelLoaded(){
    console.log('Posenet is initialised');
}
function gotPoses(results){
    if(results.length>0){
        console.log(results);
        noseX=results[0].pose.nose.x;
        noseY=results[0].pose.nose.y;
        console.log("NoseX = "+ noseX+ "; NoseY = " +noseY);
        leftwristX=results[0].pose.leftWrist.x;
        rightwristX=results[0].pose.rightWrist.x;
        difference=floor(leftwristX-rightwristX);
        console.log("leftWristX = "+leftwristX+"; RightWristX = "+ rightwristX+"; difference = "+difference);
    }
}