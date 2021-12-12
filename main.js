left_wrist_x = 0;
right_wrist_x = 0;
nose_x = 0;
nose_y = 0;
difference = 0;

function setup(){
    video = createCapture(VIDEO);
    video.size(550, 500);

    canvas = createCanvas(550, 550);
    canvas.position(560, 150);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function draw(){
    background('#ADD8E6');
    textSize(difference);
    document.getElementById("font-size-text").innerHTML = "Font size of the text will be = "+ difference + "px";
    fill("#FFE787");
    text('Anshul', 50, 400);
}
function modelLoaded(){
    console.log("poseNet is initialized!");
}
function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        left_wrist_x = results[0].pose.leftWrist.x;
        right_wrist_x = results[0].pose.rightWrist.x;

        nose_x = results[0].pose.nose.x;
        nose_y = results[0].pose.nose.y;

        difference = floor(left_wrist_x - right_wrist_x);
    }
}