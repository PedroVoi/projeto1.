function setup() {
    createCanvas(700, 700);
       background("grey");
  
  }
    
  function draw() {
    
  
  
      stroke("blue");
      fill("crimson");
  
      if(mouseIsPressed){
       circle(mouseX, mouseY, 30, 30);
      }
  }