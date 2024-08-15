let cor
let circuloX; //vertical
let circuloY; //horizontal

function setup() {
  
    createCanvas(400, 400);
    background("black");
   cor = color(random(0,255),random(0,255),random(0,300))
  circuloX = [0,0,0]
  circuloY = [random(height),random(height),random(height)]
  
    }
    
function draw() {
  
    fill(cor)
  
  
  console.log(circuloX.lenght);
  for(let qts in circuloX){
    console.log(qts)
    
    circle(circuloX[qts],circuloY[qts], 50);
    
    circuloX[qts] += random(0,3)
    circuloY[qts] += random(-3,+3)
    
    if(circuloX[qts] >= width)(
      circuloX[qts] = 0
      
    )
  }
  
  
  if(mouseIsPressed){
    cor = color(random(0,255),random(0,255),random(0,255),
                random(0,100))
  }
}
