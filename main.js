function preload()
{
}


function setup()
{
    canvas=createCanvas(600 , 500)
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
}

function draw()
{
    image(video , 0 , 0 , 600 , 500);

    fill("orange");
    circle(50, 50, 80);
    rect(91, 40, 450, 15);

    fill("red");
    circle(550, 50, 80);
    rect(545, 89, 15, 330);

    fill("gold");
    circle(550, 450, 80);
    rect(91, 440, 420, 15);

    fill("yellowGreen");
    circle(50, 450, 80);
    rect(45, 91, 15, 320);
}

function take_snapshot()
{
    save('photo.png');
}