nosex=0;
nosey=0;
difference=0;
leftWristx=0;
rightWristx=0;

function setup()
{
  video=createCapture(VIDEO);
  video.size(550,500);

  canvas=createCanvas(550,500);
  canvas.position(560,100);

 posenet=ml5.poseNet(video,modelLoaded);
posenet.on('pose',gotPoses)

}


function modelLoaded()
{
    console.log("Model is initialized");

}

function gotPoses(results)
{
    if (results.length>0) 
    {
      console.log(results);  

      nosex=results[0].pose.nose.x;
      nosey=results[0].pose.nose.y;
      
      leftWristx=results[0].pose.leftWrist.x;
      rightWristx=results[0].pose.rightWrist.x;

      difference=floor(leftWristx - rightWristx);
    }
}



function draw()
{
    background('#969A97');
    fill("yellow")
    stroke("red")

    document.getElementById("square_side").innerHTML="Width and Height of The square Wil Be="+ difference+"px";
    square(nosex,nosey,difference);

}