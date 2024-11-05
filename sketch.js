let font;  //載入字型文字
let points = [];  //轉成點狀文字
let angle =0
let r=10
// ==================================================
function preload(){  //在執行setup()前，必須先做此函數執行，主要先載入字型
    //為載入在fonts資料夾內的PlaywriteGBS-VariableFont_wght.ttf字型
    font = loadFont("fonts/PlaywriteGBS-VariableFont_wght.ttf") 
}
//===================================================


function setup() {
  createCanvas(windowWidth,windowHeight);
  angleMode(DEGREES)
  background('#fefae0')
  // ================================================
  points = font.textToPoints("TKUET", -300, 80, 200, {
    sampleFactor:0.1
  }); //轉成文字圖檔，放在(0, 200)位置，圖形大小為200，sampleFactor為點數距離大小。值越小點越少
  // ================================================
}

function draw() {
  //background(220);
  background('#fefae0')
  noFill() //不填滿顏色
  stroke(255) //線的顏色
  strokeWeight(3)
  rectMode(CENTER)
 
  //宣告變數
  var rect_width = 50 +mouseX/10 //方形寬度
  var bc_width = 50 +mouseX/10  //大園寬度
  var sc_width = 25 +mouseX/100 //小圓寬度
//for迴圈
  for (let j=0;j<20;j=j+1){ //設定 i 值,從0開始(x值)
    for(let i=0;i<40;i=i+1){ //設定 j 值,從0開始(y值)
      if(i<5){
        stroke('#669bbc')
       }else{
        stroke('#d4a373')
       }
      rect(25+50*i,25+50*j,rect_width) 
      ellipse(25+50*i,25+50*j,bc_width) 
      ellipse(50+50*i,50+50*j,sc_width) 
    }
  }
     
  
  translate(width/2,height/2)
  rotate(frameCount%360)//依照framecount除以360求餘數 旋轉
  for (let i=0; i<points.length-1; i++) { 
    //text(str(i),points[i].x,points[i].y) //在()座標上,顯示一個數字
    //fill('#cdb4db') //圓
    //noStroke()
    strokeWeight(10)
    //ellipse(points[i].x+r*sin(angle+i*10),pointsr[i].y+r*sin(angle+i*10),10)
    //stroke('#540b0e')
    strokeWeight(10) //線粗細
    let r = map(sin(frameCount),-1,1,50,255) //對應到50~255
    let g = map(sin(frameCount/4),-1,1,50,255) //對應到50~255
    let b = map(sin(frameCount/2),-1,1,50,255) //對應到50~255
    stroke(r,g,b)
    line(points[i].x,points[i].y,points[i+1].x,points[i+1].y) //線 晃動
    //rotate(sin(angle-2*j)*40)
 } 
  // ================================================
  angle=angle+10
}
