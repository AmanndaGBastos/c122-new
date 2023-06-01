noseX=0
noseY=0

diference=0
rightWristX=0
leftWristX=0

function setup(){
    video=createCapture(VIDEO);
    video.size(550,500);
    canvas=createCanvas(550,550);
    canvas.position(560,150);

    poseNet=ml5.poseNet(video,modelLoaded) //importando a função poseNet
    poseNet.on("pose",gotposes) //ativando a funçao do PoseNet
}
function modelLoaded(){
    console.log("PoseNet is initialized")
}
function gotposes(results){
    if (results.length>0){
        console.log(results)
    noseX=results[0].pose.nose.x
    noseY=results[0].pose.nose.noseY
    console.log(" noseX = "+noseX + " noseY = "+noseY)

    rightWristX=results[0].pose.rightWrist.x
    leftWristX=results[0].pose.leftWrist.x
    diference=floor(leftWristX-rightWristX)// diferença de posiçao dos pulsos (distancia)
    console.log(" rightWristX = "+rightWristX + " leftWristX = "+leftWristX+ "diference" + diference)

    }

}
function draw(){
  background(2, 138, 242) 
  document.getElementById("square_side").innerHTML="Largura e Altura serão: "+diference 
fill(255, 0, 225)
stroke(255, 0, 225)
square(noseX,noseY,diference)
}