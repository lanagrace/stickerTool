let mySelect;
let c;
let img1, img2, img3, img4;
let input, button, greeting, label;
let message = "";
let a, b, d, e;
let images = [];
let paper;
var canvas;

function preload(){
  
  img1 = loadImage('/assets/Asset 2.png')
  img2 = loadImage('/assets/Asset 3.png')
  img3 = loadImage('/assets/Asset 4.png')
  img4 = loadImage('/assets/Asset 5.png')
  paper = loadImage('/assets/paper.jpg')
  
  
}

function setup() {
  // Create a dropdown and place it beneath the canvas.
  canvas = createCanvas(420, 500);
  canvas.parent("p5container");
  mySelect = createSelect();
  // sticker dropdown 
  mySelect.position(width - 50, 150);
  mySelect.style('background-color', '#c63e69')  //#7192BE
  mySelect.style('border-radius', '10%')
  mySelect.style('font-size', '14pt')
  mySelect.style('font-family', 'Gochi Hand')
  mySelect.style('padding', '5px')
  mySelect.style('color', 'white')

  //background(255, 252, 242);
  
  //blendMode(OVERLAY)
 
  background(paper)
  console.log('1 ' + paper.width + ', '+ paper.height)
  
  imageMode(CENTER)
  angleMode(DEGREES)
  // sticker options
  mySelect.option('bow');
  mySelect.option('heart');
  mySelect.option('candy');
  mySelect.option('cake');

  // Set the selected option to "bear".
  mySelect.selected('bow');
  label = createElement('h2', "Select a sticker");
  label.style('font-family', 'Gochi Hand')
  label.position(width - 50, 120);
  label.style('color', 'white')
  label.style('background-color', 'transparent')
  
  //text input
  //input = createInput();
  //input.position(width + 20, 50);

  //button = createButton('submit');
  //button.position(input.x+170, input.y);
  //button.mousePressed(greet);
  
  button = createButton('clear');
  button.position(width + 20, height+90);
  button.mousePressed(clearCanvas);
  //let col = color(200,255,255);
  button.style('background-color', '#c63e69');  //#EBC3DB - pink #7192BE

  //greeting = createElement('h4', "What's on your mind");
  //greeting.position(width + 20, 10);

  
  textAlign(CENTER);
  textSize(50);
}

function draw() {
  //ellipse(mouseX, mouseY, 50) 
  
  for (let i = images.length -1; i >= 0; i--){
    //images[i].update();
    images[i].display()
  }
  push()
  fill(0)
  textAlign(LEFT);
  textStyle(BOLD)
  textFont('Gochi Hand');
  textSize(24)
  text(message, width/4+30, height/3);
  pop()
  
  frameRate(10)
 
  
}

function mouseClicked() {

  if (mySelect.value() == "bow") {
   // a = image(img1, mouseX, mouseY, 50, 60);
    img1.resize(70, 80)
   
    a = new Bubble(mouseX, mouseY, img1)
    
    images.push(a)
  } else if (mySelect.value() == "heart") {
    //b = image(img2, mouseX, mouseY, 50, 60);
    img2.resize(70, 80)
    b = new Bubble(mouseX, mouseY, img2)
    
    images.push(b)
  } else if (mySelect.value() == "candy") {
    //c = image(img3, mouseX, mouseY, 50, 60);
    img3.resize(80, 40)
    d = new Bubble(mouseX, mouseY, img3)
    
    images.push(d)
  }

  else if (mySelect.value() == "cake") {
    //c = image(img3, mouseX, mouseY, 50, 60);
    img4.resize(70, 80)
    e = new Bubble(mouseX, mouseY, img4)
    
    images.push(e)
  }
  return false; 

}

function greet() {
  const name = input.value();
 // greeting.html('hello ' + name + '!');
  push()
  fill(0)
  input.value('');
  textAlign(CENTER);
  textStyle(BOLD)
  textFont('Courier New');
  textSize(18)
  text(name, width/2, height/2);
  pop()
  }

function keyPressed(){
	// First check if the key is something we want to type.
  if (key.length == 1 && key.match(/[\S,\ ,\n]/)) {
    message = message + key;
  // Otherwise, if it is the backspace key remove one charater.
  } else if (keyCode == BACKSPACE || keyCode == DELETE){
  
   //background(paper);
   paper.resize(width, height)
   image(paper, width/2, height/2)
  // console.log('2 ' + paper.x + ', '+ paper.y)
   message = message.substr(0, message.length - 1);
    
	// If it is the enter key, then add a newline.
  } else if (keyCode == ENTER){
  	message += "\n";
  }
  return false;
}

function clearCanvas(){
  //paper.resize(width*2, height*3)
  //background(paper)
  paper.resize(width, height)
  image(paper, width/2, height/2)
  console.log('3 ' + paper.width + ', '+ paper.height)
  
  images = []
  message = []
}

function Bubble(x, y, img){
  this.x = x;
  this.y = y;
  this.img = img;
  
  this.display = function(){
    imageMode(CENTER)
    image(this.img, this.x, this.y);
  }
}