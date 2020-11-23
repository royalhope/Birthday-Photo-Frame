function preload() {

}

function setup() {
  canvas = createCanvas(300, 300);
  canvas.center();
  video = createCapture(VIDEO);
  video.hide();
}

function draw() {
  image(video, 0, 0, 300, 300);

  rect(30, 20, 55, 55);

  rect(15, 105, 55, 55, 20);

}

function take_snapshot() {
    save('photo_frame.png');
}