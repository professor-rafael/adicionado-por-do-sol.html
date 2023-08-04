function setup() {
    createCanvas(400, 400);
  }
  
  function draw() {
    background(220);
  }
  let posicaoVertical;
  
  function setup() {
    createCanvas(500, 500);  
    posicaoVertical = 250;
  }
  
  function draw() {
    if(posicaoVertical < 500){
      background("lightblue");
      posicaoVertical=posicaoVertical
      +1;
    }else {
      background("black");
    }
    fill("orange");
    circle(250,posicaoVertical,300);
    fill("darkblue");
    rect(0, 250, 500, 350);
    fill("khaki");
    rect(0, 400, 500, 100);
  
  }