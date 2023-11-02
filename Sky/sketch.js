let skyColorsFrom = [];
let skyColorsTo = [];
let skyColorsLerpA = [];
let skyColorsLerpB = [];
let skyColorsLerpC = [];
let skyColorsLerpD = [];
let skyEllipse = [];
let skyLerpEllipseA = [];
let skyLerpEllipseB = [];
let skyLerpEllipseC = [];
let skyLerpEllipseD = [];
let brushWidth;
let brushAmount;


function setup() {
  createCanvas(windowWidth, windowHeight);

  //Define the color arrays for lerpColor().

  //The colors are: [0]navy blue, [1]sea green, [2]bright yellow, [3]orange red, [4]dark red
  skyColorsFrom.push(color(62, 84, 143), color(125, 155, 147), color(255, 214, 101), 
  color(193, 113, 67), color(205, 74, 74));

  //The colors are: [0]sea green, [1]bright yellow, [2]orange red
  skyColorsTo.push(color(125, 155, 147), color(255, 214, 101), color(193, 113, 67), color(205, 74, 74));

  //Build four arrays: skyColorLerp A/B/C/D to contain the lerpColor() results between the 
  //skyColorsFrom[] and skyColorsTo[]

  //A
  for(let i = 1; i < 8; i++){

    skyColorsLerpA.push(lerpColor(skyColorsFrom[0], skyColorsTo[0], i * 0.125));

  }

  //B
  for(let i = 1; i < 8; i++){

    skyColorsLerpB.push(lerpColor(skyColorsFrom[1], skyColorsTo[1], i * 0.125));

  }

  //C
  for(let i = 1; i < 8; i++){

    skyColorsLerpC.push(lerpColor(skyColorsFrom[2], skyColorsTo[2], i * 0.125));

  }

  //D
  for(let i = 1; i < 8; i++){

    skyColorsLerpD.push(lerpColor(skyColorsFrom[3], skyColorsTo[3], i * 0.125));

  }

  //The brushWidth of the ellipse is 1/64 of the height of canvas.
  brushWidth = height / 64;

  //The amount of brush is the window's width divides the brush's width.
  brushAmount = width / brushWidth;
}

function draw() {

  // //Test of drawing a series of circles using for loop
  // fill(0);
  // for(let i = brushWidth / 2; i < width; i+= brushWidth){

  //   for(let j = brushWidth / 2; j < height / 2; j+= brushWidth){

  //     circle(i, j, brushWidth);

  //   }
  // }

  drawSkyEllipse();

  // //Test of if the lerpColor between skyColorsFrom[] and skyColorsTo[] works.

  // // [Y]
  // //Replace the *skyColorsLerpA* to test different arrays.
  // for(let i = 0; i < skyColorsLerpA.length; i++){

  //   //Replace the *skyColorsLerpA* to test different arrays.
  //   fill(skyColorsLerpA[i]);
  //   ellipse(100, i * 100, 100);

  // }
 
}

function windowResized(){
  //Adjust canvas size and redraw the shape with a new size when the window is resized
  clear();
  resizeCanvas(windowWidth, windowHeight);
  brushWidth = height / 64;
  brushAmount = width / brushWidth;
  drawSkyEllipse();
}

//Draw the first line of ellipses using lerpColor() and color arrays.
function drawSkyEllipse() {
  for (let i = 0; i < skyColorsFrom.length; i++) {

    for (let j = 0; j < brushAmount; j++) {

      noStroke();
      fill(skyColorsFrom[i]);
      skyEllipse.push(ellipse(brushWidth / 2 + brushWidth * j, brushWidth / 2 + height / 8 * i, brushWidth));

    }

  }

  for (let i = 0; i < 7; i++) {

    for (let j = 0; j < brushAmount; j++) {

      fill(skyColorsLerpA[i]);
      skyLerpEllipseA.push(ellipse(brushWidth / 2 + brushWidth * j, brushWidth / 2 + brushWidth * (i + 1), brushWidth));

    }

  }

  for (let i = 0; i < 7; i++) {

    for (let j = 0; j < brushAmount; j++) {

      fill(skyColorsLerpB[i]);
      skyLerpEllipseB.push(ellipse(brushWidth / 2 + brushWidth * j, brushWidth / 2 + brushWidth * (i + 9), brushWidth));

    }

  }

  for (let i = 0; i < 7; i++) {

    for (let j = 0; j < brushAmount; j++) {

      fill(skyColorsLerpC[i]);
      skyLerpEllipseC.push(ellipse(brushWidth / 2 + brushWidth * j, brushWidth / 2 + brushWidth * (i + 17), brushWidth));

    }



  }

  for (let i = 0; i < 7; i++) {

    for (let j = 0; j < brushAmount; j++) {

      fill(skyColorsLerpD[i]);
      skyLerpEllipseD.push(ellipse(brushWidth / 2 + brushWidth * j, brushWidth / 2 + brushWidth * (i + 25), brushWidth));

    }

  }
}


