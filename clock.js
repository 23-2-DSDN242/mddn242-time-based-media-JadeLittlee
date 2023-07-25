/*
 * use p5.js to draw a clock on a 960x500 canvas
 */
function draw_clock(obj) {
  // draw your own clock here based on the values of obj:
  //    obj.hours goes from 0-23
  //    obj.minutes goes from 0-59
  //    obj.seconds goes from 0-59
  //    obj.millis goes from 0-999
  //    obj.seconds_until_alarm is:
  //        < 0 if no alarm is set
  //        = 0 if the alarm is currently going off
  //        > 0 --> the number of seconds until alarm should go off

  background(210); //  light grey
  textSize(40);
  textAlign(CENTER, CENTER);


  let Seconds = obj.seconds
  let Minutes = obj.minutes
  let hours = obj.hours

  // let Seconds_Radius = map(Seconds, 0, 59, 1, 150);
  //let MinutesY = map(Minutes, 0, 59, 1, 150);

  // noStroke();
  // text("Seconds: " + Seconds, width / 2, 200), 

  // fill(249, 140, 255);// pink
  // ellipse(width / 3, 350, 150);

  // fill(140, 255, 251) // blue
  // noStroke();
  // ellipse(width / 2, MinutesY, 100); // minutes moving up and down

  // fill(175, 133, 255); // purple
  // noStroke();
  // ellipse( width / 3 * 2, 350, Seconds_Radius); //circle expanding
 
  //Raindrops positioning
  let xposDrop = [30,30,50,50,80,100,120,150,160,160,190,210,240,250,260,280,300,300,350,350,380,380,390,390,450,510,550,550,560,580,590,600,600,610,650,660,670,680,700,710,720,730,760,770,790,800,840,850,860,880,900,900,930,920,820,10,290,130,200,330,20]; //x position for the rain drops for 0-59 seconds
  let yposDrop = [20,430,160,300,80,370,210,30,320,450,130,230,10,430,310,50,150,380,20,250,100,320,190,420,20,10,300,80,180,430,20,230,100,350,170,40,270,440,350,10,110,200,280,400,30,150,250,80,350,180,450,20,120,300,450,250,240,140,380,460,100]; //y position for the rain drops for 0-59 seconds

  drawWaterdrops (xposDrop[0],yposDrop[0]); //1 //30,20
  drawWaterdrops (xposDrop[1], yposDrop[1]); //2 //30,430
  drawWaterdrops (xposDrop[2], yposDrop[2]); //3 //50,160
  drawWaterdrops (xposDrop[3], yposDrop[3]); //4 //50,300
  drawWaterdrops (xposDrop[4], yposDrop[4]); //5 //80,80
  drawWaterdrops (xposDrop[5], yposDrop[5]); //6 //100,370
  drawWaterdrops (xposDrop[6], yposDrop[6]); //7 //120,210
  drawWaterdrops (xposDrop[7], yposDrop[7]); //8 //150,30
  drawWaterdrops (xposDrop[8], yposDrop[8]); //9 //160,320
  drawWaterdrops (xposDrop[9], yposDrop[9]); //10 //160,450
  drawWaterdrops (xposDrop[10], yposDrop[10]); //11 //190,130
  drawWaterdrops (xposDrop[11], yposDrop[11]); //12 //210,230
  drawWaterdrops (xposDrop[12], yposDrop[12]); //13 //240,10
  drawWaterdrops (xposDrop[13], yposDrop[13]); //14 //250,430
  drawWaterdrops (xposDrop[14], yposDrop[14]); //15 //260,310
  drawWaterdrops (xposDrop[15], yposDrop[15]); //16 //280,50
  drawWaterdrops (xposDrop[16], yposDrop[16]); //17 //300,150
  drawWaterdrops (xposDrop[17], yposDrop[17]); //18 //300,380
  drawWaterdrops (xposDrop[18], yposDrop[18]); //19 //350,20
  drawWaterdrops (xposDrop[19], yposDrop[19]); //20 //350,250
  drawWaterdrops (xposDrop[20], yposDrop[20]); //21 //380,100
  drawWaterdrops (xposDrop[21], yposDrop[21]); //22 //380,320
  drawWaterdrops (xposDrop[22], yposDrop[22]); //23 //390,190
  drawWaterdrops (xposDrop[23], yposDrop[23]); //24 //390,420
  drawWaterdrops (xposDrop[24], yposDrop[24]); //25 //450,20
  drawWaterdrops (xposDrop[25], yposDrop[25]); //26 //510,10
  drawWaterdrops (xposDrop[26], yposDrop[26]); //27 //550,300
  drawWaterdrops (xposDrop[27], yposDrop[27]); //28 //550,80
  drawWaterdrops (xposDrop[28], yposDrop[28]); //29 //560,180
  drawWaterdrops (xposDrop[29], yposDrop[29]); //30 //580,430
  drawWaterdrops (xposDrop[30], yposDrop[30]); //31 //590,20
  drawWaterdrops (xposDrop[31], yposDrop[31]); //32 //600,230
  drawWaterdrops (xposDrop[32], yposDrop[32]); //31 //600,100
  drawWaterdrops (xposDrop[33], yposDrop[33]); //32 //610,350
  drawWaterdrops (xposDrop[34], yposDrop[34]); //33 //650,170
  drawWaterdrops (xposDrop[35], yposDrop[35]); //34 //660,40
  drawWaterdrops (xposDrop[36], yposDrop[36]); //35 //670,270
  drawWaterdrops (xposDrop[37], yposDrop[37]); //36 //680,440
  drawWaterdrops (xposDrop[38], yposDrop[38]); //37 //700,350
  drawWaterdrops (xposDrop[39], yposDrop[39]); //38 //710,10
  drawWaterdrops (xposDrop[40], yposDrop[40]); //39 //720,110
  drawWaterdrops (xposDrop[41], yposDrop[41]); //40 //730,200
  drawWaterdrops (xposDrop[42], yposDrop[42]); //41 //760,280
  drawWaterdrops (xposDrop[43], yposDrop[43]); //42 //770,400
  drawWaterdrops (xposDrop[44], yposDrop[44]); //43 //790,30
  drawWaterdrops (xposDrop[45], yposDrop[45]); //44 //800,150
  drawWaterdrops (xposDrop[46], yposDrop[46]); //45 //840,250
  drawWaterdrops (xposDrop[47], yposDrop[47]); //46 //850,80
  drawWaterdrops (xposDrop[48], yposDrop[48]); //47 //860,350
  drawWaterdrops (xposDrop[49], yposDrop[49]); //48 //880,180
  drawWaterdrops (xposDrop[50], yposDrop[50]); //49 //900,450
  drawWaterdrops (xposDrop[51], yposDrop[51]); //50 //900,20
  drawWaterdrops (xposDrop[52], yposDrop[52]); //51 //930,120
  drawWaterdrops (xposDrop[53], yposDrop[53]); //52 //920, 300
  drawWaterdrops (xposDrop[54], yposDrop[54]); //53 //820,450
  drawWaterdrops (xposDrop[55], yposDrop[55]); //54 //10,250
  drawWaterdrops (xposDrop[56], yposDrop[56]); //55 //290,240
  drawWaterdrops (xposDrop[57], yposDrop[57]); //56 //130,140
  drawWaterdrops (xposDrop[58], yposDrop[58]); //57 //200,380
  drawWaterdrops (xposDrop[59], yposDrop[59]); //58 //330,460
  drawWaterdrops (xposDrop[60], yposDrop[60]); //59 //20,100
 
 

  //plant stalk
  let linex = 480;
  let liney = 75; //originally 55

  stroke(1, 50, 32); //dark green
  strokeWeight(8);
  line(linex, liney, linex, liney + 265);

  //Plant pot
  let quadx = 405;
  let quady = 370; //originally 350
  let rectx = 395;
  let recty = 340; //originally 320

  fill(0, 206, 209); //dark turquoise
  noStroke();
  //quad(10, 30, 80, 30, 70, 90, 20, 90); //10,30,80,30,70,90,20,90
  quad(quadx, quady, quadx + 150, quady, quadx + 130, quady + 100, quadx + 20, quady + 100); // 405, 350, 555, 350, 535, 450, 425, 450 //goes from right to left, x then y...
  rect(rectx, recty, 170, 30); //collar of plant pot //395, 320, 170, 30

  stroke(140, 255, 251); //light turquoise
  strokeWeight(5);
  line(395, 370, 565, 370); //line on collar of plant pot //395, 350, 565, 350

  ystep = 48
  for (let i = 0; i < 6; i++) {
    drawLeaf(425, 42 + (ystep * i));
  }

  for (let i = 0; i < 6; i++) {
    drawrightLeaf(535, 42 + (ystep * i));
  }


 

}

let leafx = 20;
let leafy = 20;
let Leafx = 70;
let dropx = 60;
let dropy = 60;

//left leaves function
function drawLeaf(leafx, leafy) {
  fill(18, 181, 121); //light green
  stroke(1, 50, 32); //dark green
  strokeWeight(1.5);
  beginShape();
  curveVertex(leafx, leafy); //20,20
  curveVertex(leafx, leafy); //20/, 20
  curveVertex(leafx + 10, leafy + 30); //30, 50
  curveVertex(leafx + 20, leafy + 50); //40,70
  curveVertex(leafx + 50, leafy + 50); //70,70
  curveVertex(leafx + 50, leafy + 30); //70,50
  curveVertex(leafx + 10, leafy + 10); //30, 30
  endShape(CLOSE);
}

//right leaves function
function drawrightLeaf(Leafx, leafy) {
  fill(18, 181, 121); //light green
  stroke(1, 50, 32); //dark green
  strokeWeight(1.5);
  beginShape();
  curveVertex(Leafx, leafy); //70,20
  curveVertex(Leafx, leafy); //70,20
  curveVertex(Leafx - 10, leafy + 30); //60,50
  curveVertex(Leafx - 20, leafy + 50); //50,70
  curveVertex(Leafx - 50, leafy + 50); //20,70
  curveVertex(Leafx - 50, leafy + 30); //20,50
  curveVertex(Leafx - 10, leafy + 10); //60,30
  endShape(CLOSE);
}

//   strokeWeight(5)
// point(70,20); //20 
// point(60,50); //30
// point(50,70); //40
// point(20,70); //70
// point(20,50); //70
// point(60,30); //30


 function drawWaterdrops(dropx, dropy) {

  fill(27, 149, 224);
  noStroke();
  beginShape();
  curveVertex(dropx,dropy); //top //60,60
  curveVertex(dropx, dropy); //top //60,60
  curveVertex(dropx + 5, dropy +25); //right side //65,85
  curveVertex(dropx, dropy + 30); //bottom //60,90
  curveVertex(dropx - 5, dropy + 25); //left side //55,85
  endShape(CLOSE);

//   //waterdrops
//   // strokeWeight(5);
//   // point(60, 60); //top
//   // point(75, 95); //right
//   // point(60, 110); //bottom
//   // point(45, 95); //left

//   //waterdrops

//   fill(27, 149, 224);
//   noStroke();
//   beginShape();
//   curveVertex(dropx,dropy); //top //60,60
//   curveVertex(dropx,dropy); //top //60,60
//   curveVertex(dropx + 15,dropy + 35); //right side //75,95
//   curveVertex(dropx, dropy + 50); //bottom //60,110
//   curveVertex(dropx - 15, dropy+35); //left side //45,95
//   endShape(CLOSE);

 }
