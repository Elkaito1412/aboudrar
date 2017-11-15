var music;
var fft;
var spectrum;

function preload(){
 music = new p5.AudioIn();
 music.start();
}
function setup() {
createCanvas(400,400);
fft = new p5.FFT(0.8,64);
}
function draw() {
background(0);
fill(0);
stroke(255);
var mapped = map(music.getLevel(0.9),0,1,0,width);
ellipse(width/2,height/2,mapped,mapped);
}