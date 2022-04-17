function preload() {}

function setup() {
    canvas = createCanvas(600, 600);
    canvas.position(110, 250);
    video = createCapture(VIDEO);
    video.hide();

    tint_color = "";
}

function draw() {
    image(video, 150, 150, 300, 300);
    stroke(155, 205, 105);


    circle(480, 120, 50);
    circle(480, 480, 50);
    circle(108, 480, 50);
    circle(100, 120, 50);
    fill(255, 204, 0);

    rect(90, 145, 15, 320);
    rect(100, 800, 15, 100);
    rect(480, 145, 15, 310);
    rect(200, 800, 15, 800);


}

function take_snapshot() {
    save('student_name.png');
}

function filter_tint() {
    tint_color = document.getElementById("color_name").value;
}