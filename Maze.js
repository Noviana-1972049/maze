var canvasKita = document.querySelector("#canvas1");
var ctx = canvasKita.getContext("2d"); 
var imageDataSaya = ctx.getImageData(0,0,canvasKita.width, canvasKita.height);
ctx.putImageData(imageDataSaya, 0,0);

function gbr_titik(dataTemp, posisi, warna){
    var index; 
    let {r,g,b,a} = warna;
    let {x,y} = posisi;
    index = 4 * (Math.ceil(x)+(Math.ceil(y)*canvasKita.width));
    dataTemp.data[index] = r  
    dataTemp.data[index+1] = g  
    dataTemp.data[index+2] = b 
    dataTemp.data[index+3] = a
}

function kotak(imageData, posisi, warna){
    let {r,g,b,a} = warna;
    let {x,y} = posisi;
    for (var i=0; i<30; i++) {
        for(var j = 0;j<30;j++){
            gbr_titik(imageData,{x: x+i, y: y+j}, {r:r,g:g,b:b,a:a});
        }
    }
}

function garis_samping(imageData, posisi, warna, pjg){
    let {r,g,b,a} = warna;
    let {x,y} = posisi;
    for (var i=0; i<pjg; i++) {
        for(var j = 0;j<2;j++){
            gbr_titik(imageData,{x: x+i, y: y+j}, {r:r,g:g,b:b,a:a});
        }
    }
}

function garis_bawah(imageData, posisi, warna, lbr){
    let {r,g,b,a} = warna;
    let {x,y} = posisi;
    for (var i=0; i<2; i++) {
        for(var j = 0;j<lbr;j++){
            gbr_titik(imageData,{x: x+i, y: y+j}, {r:r,g:g,b:b,a:a});
        }
    }
}

function garis(){
    garis_bawah(imageDataSaya, {x: 10, y: 10}, {r: 99, g: 99, b: 99, a: 255}, 840)
    garis_bawah(imageDataSaya, {x: 860, y: 10}, {r: 99, g: 99, b: 99, a: 255}, 840)
    garis_samping(imageDataSaya, {x: 10, y: 10}, {r: 99, g: 99, b: 99, a: 255}, 850)
    garis_samping(imageDataSaya, {x: 10, y: 850}, {r: 99, g: 99, b: 99, a: 255}, 40)
    garis_samping(imageDataSaya, {x: 90, y: 850}, {r: 99, g: 99, b: 99, a: 255}, 770)
    garis_samping(imageDataSaya, {x: 10, y: 50}, {r: 99, g: 99, b: 99, a: 255}, 160)
    garis_samping(imageDataSaya, {x: 330, y: 50}, {r: 99, g: 99, b: 99, a: 255}, 160)
    garis_samping(imageDataSaya, {x: 530, y: 50}, {r: 99, g: 99, b: 99, a: 255}, 160)
    garis_samping(imageDataSaya, {x: 730, y: 50}, {r: 99, g: 99, b: 99, a: 255}, 90)
    garis_bawah(imageDataSaya, {x: 490, y: 50}, {r: 99, g: 99, b: 99, a: 255}, 40)
    garis_bawah(imageDataSaya, {x: 690, y: 10}, {r: 99, g: 99, b: 99, a: 255}, 40)
    garis_bawah(imageDataSaya, {x: 730, y: 50}, {r: 99, g: 99, b: 99, a: 255}, 80)
    garis_samping(imageDataSaya, {x: 50, y: 90}, {r: 99, g: 99, b: 99, a: 255}, 120)
    garis_bawah(imageDataSaya, {x: 90, y: 90}, {r: 99, g: 99, b: 99, a: 255}, 80)
    garis_bawah(imageDataSaya, {x: 50, y: 90}, {r: 99, g: 99, b: 99, a: 255}, 120)
    garis_bawah(imageDataSaya, {x: 130, y: 130}, {r: 99, g: 99, b: 99, a: 255}, 80)
    garis_samping(imageDataSaya, {x: 50, y: 210}, {r: 99, g: 99, b: 99, a: 255}, 80)
    garis_bawah(imageDataSaya, {x: 170, y: 50}, {r: 99, g: 99, b: 99, a: 255}, 40)
    garis_bawah(imageDataSaya, {x: 170, y: 170}, {r: 99, g: 99, b: 99, a: 255}, 80)
    garis_samping(imageDataSaya, {x: 10, y: 250}, {r: 99, g: 99, b: 99, a: 255}, 160)
    garis_bawah(imageDataSaya, {x: 210, y: 10}, {r: 99, g: 99, b: 99, a: 255}, 40)
    garis_bawah(imageDataSaya, {x: 210, y: 10}, {r: 99, g: 99, b: 99, a: 255}, 40)
    garis_bawah(imageDataSaya, {x: 290, y: 10}, {r: 99, g: 99, b: 99, a: 255}, 40)
    garis_bawah(imageDataSaya, {x: 250, y: 50}, {r: 99, g: 99, b: 99, a: 255}, 40)
    garis_samping(imageDataSaya, {x: 210, y: 90}, {r: 99, g: 99, b: 99, a: 255}, 650) 
    garis_samping(imageDataSaya, {x: 170, y: 130}, {r: 99, g: 99, b: 99, a: 255}, 280)
    garis_samping(imageDataSaya, {x: 490, y: 130}, {r: 99, g: 99, b: 99, a: 255}, 240)
    garis_samping(imageDataSaya, {x: 50, y: 290}, {r: 99, g: 99, b: 99, a: 255}, 120)
    garis_samping(imageDataSaya, {x: 530, y: 170}, {r: 99, g: 99, b: 99, a: 255}, 240)
    garis_samping(imageDataSaya, {x: 170, y: 170}, {r: 99, g: 99, b: 99, a: 255}, 240)
    garis_samping(imageDataSaya, {x: 210, y: 210}, {r: 99, g: 99, b: 99, a: 255}, 160)
    garis_bawah(imageDataSaya, {x: 210, y: 210}, {r: 99, g: 99, b: 99, a: 255}, 120)
    garis_bawah(imageDataSaya, {x: 210, y: 210}, {r: 99, g: 99, b: 99, a: 255}, 120)
    garis_bawah(imageDataSaya, {x: 170, y: 290}, {r: 99, g: 99, b: 99, a: 255}, 40)
    garis_bawah(imageDataSaya, {x: 450, y: 130}, {r: 99, g: 99, b: 99, a: 255}, 200) 
    garis_bawah(imageDataSaya, {x: 490, y: 130}, {r: 99, g: 99, b: 99, a: 255}, 200)
    garis_bawah(imageDataSaya, {x: 370, y: 210}, {r: 99, g: 99, b: 99, a: 255}, 320)
    garis_bawah(imageDataSaya, {x: 410, y: 170}, {r: 99, g: 99, b: 99, a: 255}, 200)
    garis_bawah(imageDataSaya, {x: 770, y: 130}, {r: 99, g: 99, b: 99, a: 255}, 40)
    garis_samping(imageDataSaya, {x: 450, y: 330}, {r: 99, g: 99, b: 99, a: 255}, 40)
    garis_samping(imageDataSaya, {x: 410, y: 370}, {r: 99, g: 99, b: 99, a: 255}, 120)
    garis_bawah(imageDataSaya, {x: 810, y: 130}, {r: 99, g: 99, b: 99, a: 255}, 80)
    garis_samping(imageDataSaya, {x: 570, y: 210}, {r: 99, g: 99, b: 99, a: 255}, 240)
    garis_bawah(imageDataSaya, {x: 530, y: 170}, {r: 99, g: 99, b: 99, a: 255}, 200) 
    garis_bawah(imageDataSaya, {x: 50, y: 290}, {r: 99, g: 99, b: 99, a: 255}, 160) 
    garis_samping(imageDataSaya, {x: 770, y: 250}, {r: 99, g: 99, b: 99, a: 255}, 90)
    garis_bawah(imageDataSaya, {x: 810, y: 250}, {r: 99, g: 99, b: 99, a: 255}, 40)
    garis_bawah(imageDataSaya, {x: 690, y: 290}, {r: 99, g: 99, b: 99, a: 255}, 120)
    garis_bawah(imageDataSaya, {x: 650, y: 290}, {r: 99, g: 99, b: 99, a: 255}, 80)
    garis_bawah(imageDataSaya, {x: 810, y: 330}, {r: 99, g: 99, b: 99, a: 255}, 80)
    garis_samping(imageDataSaya, {x: 650, y: 290}, {r: 99, g: 99, b: 99, a: 255}, 40)
    garis_bawah(imageDataSaya, {x: 770, y: 250}, {r: 99, g: 99, b: 99, a: 255}, 120)
    garis_bawah(imageDataSaya, {x: 730, y: 250}, {r: 99, g: 99, b: 99, a: 255}, 120)
    garis_bawah(imageDataSaya, {x: 570, y: 210}, {r: 99, g: 99, b: 99, a: 255}, 280)
    garis_bawah(imageDataSaya, {x: 610, y: 250}, {r: 99, g: 99, b: 99, a: 255}, 120)
    garis_samping(imageDataSaya, {x: 610, y: 250}, {r: 99, g: 99, b: 99, a: 255}, 120)
    garis_samping(imageDataSaya, {x: 730, y: 370}, {r: 99, g: 99, b: 99, a: 255}, 40)
    garis_samping(imageDataSaya, {x: 570, y: 410}, {r: 99, g: 99, b: 99, a: 255}, 240)
    garis_samping(imageDataSaya, {x: 410, y: 410}, {r: 99, g: 99, b: 99, a: 255}, 120)
    garis_bawah(imageDataSaya, {x: 530, y: 410}, {r: 99, g: 99, b: 99, a: 255}, 120)
    garis_bawah(imageDataSaya, {x: 610, y: 450}, {r: 99, g: 99, b: 99, a: 255}, 40)
    garis_bawah(imageDataSaya, {x: 650, y: 410}, {r: 99, g: 99, b: 99, a: 255}, 120)
    garis_samping(imageDataSaya, {x: 570, y: 490}, {r: 99, g: 99, b: 99, a: 255}, 40)
    garis_samping(imageDataSaya, {x: 410, y: 410}, {r: 99, g: 99, b: 99, a: 255}, 120)
    garis_samping(imageDataSaya, {x: 530, y: 530}, {r: 99, g: 99, b: 99, a: 255}, 120)
    garis_samping(imageDataSaya, {x: 690, y: 450}, {r: 99, g: 99, b: 99, a: 255}, 120)
    garis_samping(imageDataSaya, {x: 730, y: 490}, {r: 99, g: 99, b: 99, a: 255}, 80)
    garis_samping(imageDataSaya, {x: 450, y: 450}, {r: 99, g: 99, b: 99, a: 255}, 40)
    garis_bawah(imageDataSaya, {x: 450, y: 450}, {r: 99, g: 99, b: 99, a: 255}, 120)
    garis_bawah(imageDataSaya, {x: 490, y: 450}, {r: 99, g: 99, b: 99, a: 255}, 120)
    garis_bawah(imageDataSaya, {x: 410, y: 410}, {r: 99, g: 99, b: 99, a: 255}, 120)
    garis_samping(imageDataSaya, {x: 370, y: 530}, {r: 99, g: 99, b: 99, a: 255}, 40)
    garis_bawah(imageDataSaya, {x: 730, y: 490}, {r: 99, g: 99, b: 99, a: 255}, 200) 
    garis_bawah(imageDataSaya, {x: 690, y: 450}, {r: 99, g: 99, b: 99, a: 255}, 240)
    garis_bawah(imageDataSaya, {x: 810, y: 490}, {r: 99, g: 99, b: 99, a: 255}, 320)
    garis_bawah(imageDataSaya, {x: 770, y: 530}, {r: 99, g: 99, b: 99, a: 255}, 200)
    garis_samping(imageDataSaya, {x: 330, y: 570}, {r: 99, g: 99, b: 99, a: 255}, 200)
    garis_samping(imageDataSaya, {x: 570, y: 570}, {r: 99, g: 99, b: 99, a: 255}, 120)
    garis_bawah(imageDataSaya, {x: 570, y: 570}, {r: 99, g: 99, b: 99, a: 255}, 80)
    garis_bawah(imageDataSaya, {x: 610, y: 570}, {r: 99, g: 99, b: 99, a: 255}, 120)
    garis_bawah(imageDataSaya, {x: 330, y: 410}, {r: 99, g: 99, b: 99, a: 255}, 240)
    garis_bawah(imageDataSaya, {x: 370, y: 610}, {r: 99, g: 99, b: 99, a: 255}, 40)
    garis_bawah(imageDataSaya, {x: 410, y: 570}, {r: 99, g: 99, b: 99, a: 255}, 170)
    garis_samping(imageDataSaya, {x: 330, y: 650}, {r: 99, g: 99, b: 99, a: 255}, 40)
    garis_samping(imageDataSaya, {x: 450, y: 610}, {r: 99, g: 99, b: 99, a: 255}, 40)
    garis_samping(imageDataSaya, {x: 570, y: 690}, {r: 99, g: 99, b: 99, a: 255}, 40)
    garis_samping(imageDataSaya, {x: 690, y: 690}, {r: 99, g: 99, b: 99, a: 255}, 40)
    garis_samping(imageDataSaya, {x: 490, y: 730}, {r: 99, g: 99, b: 99, a: 255}, 280)
    garis_bawah(imageDataSaya, {x: 490, y: 610}, {r: 99, g: 99, b: 99, a: 255}, 80)
    garis_bawah(imageDataSaya, {x: 450, y: 610}, {r: 99, g: 99, b: 99, a: 255}, 200)
    garis_bawah(imageDataSaya, {x: 530, y: 570}, {r: 99, g: 99, b: 99, a: 255}, 120)
    garis_bawah(imageDataSaya, {x: 650, y: 610}, {r: 99, g: 99, b: 99, a: 255}, 120)
    garis_samping(imageDataSaya, {x: 610, y: 770}, {r: 99, g: 99, b: 99, a: 255}, 200)
    garis_samping(imageDataSaya, {x: 610, y: 810}, {r: 99, g: 99, b: 99, a: 255}, 160)
    garis_bawah(imageDataSaya, {x: 610, y: 770}, {r: 99, g: 99, b: 99, a: 255}, 40)
    garis_bawah(imageDataSaya, {x: 570, y: 730}, {r: 99, g: 99, b: 99, a: 255}, 120)
    garis_bawah(imageDataSaya, {x: 490, y: 730}, {r: 99, g: 99, b: 99, a: 255}, 80)
    garis_bawah(imageDataSaya, {x: 530, y: 770}, {r: 99, g: 99, b: 99, a: 255}, 40)
    garis_samping(imageDataSaya, {x: 490, y: 810}, {r: 99, g: 99, b: 99, a: 255}, 40)
    garis_bawah(imageDataSaya, {x: 370, y: 730}, {r: 99, g: 99, b: 99, a: 255}, 120)
    garis_bawah(imageDataSaya, {x: 330, y: 730}, {r: 99, g: 99, b: 99, a: 255}, 120)
    garis_samping(imageDataSaya, {x: 290, y: 690}, {r: 99, g: 99, b: 99, a: 255}, 120) 
    garis_bawah(imageDataSaya, {x: 290, y: 290}, {r: 99, g: 99, b: 99, a: 255}, 520)
    garis_bawah(imageDataSaya, {x: 330, y: 250}, {r: 99, g: 99, b: 99, a: 255}, 160)
    garis_samping(imageDataSaya, {x: 250, y: 250}, {r: 99, g: 99, b: 99, a: 255}, 80)
    garis_samping(imageDataSaya, {x: 170, y: 330}, {r: 99, g: 99, b: 99, a: 255}, 40)
    garis_bawah(imageDataSaya, {x: 250, y: 250}, {r: 99, g: 99, b: 99, a: 255}, 120)
    garis_bawah(imageDataSaya, {x: 130, y: 330}, {r: 99, g: 99, b: 99, a: 255}, 130)
    garis_bawah(imageDataSaya, {x: 90, y: 330}, {r: 99, g: 99, b: 99, a: 255}, 130)
    garis_bawah(imageDataSaya, {x: 250, y: 250}, {r: 99, g: 99, b: 99, a: 255}, 120)
    garis_samping(imageDataSaya, {x: 130, y: 370}, {r: 99, g: 99, b: 99, a: 255}, 120)
    garis_samping(imageDataSaya, {x: 170, y: 410}, {r: 99, g: 99, b: 99, a: 255}, 120)
    garis_samping(imageDataSaya, {x: 170, y: 810}, {r: 99, g: 99, b: 99, a: 255}, 120)
    garis_samping(imageDataSaya, {x: 170, y: 770}, {r: 99, g: 99, b: 99, a: 255}, 40)
    garis_samping(imageDataSaya, {x: 50, y: 730}, {r: 99, g: 99, b: 99, a: 255}, 200)
    garis_bawah(imageDataSaya, {x: 170, y: 770}, {r: 99, g: 99, b: 99, a: 255}, 40)
    garis_bawah(imageDataSaya, {x: 250, y: 730}, {r: 99, g: 99, b: 99, a: 255}, 40)
    garis_bawah(imageDataSaya, {x: 50, y: 730}, {r: 99, g: 99, b: 99, a: 255}, 80)
    garis_bawah(imageDataSaya, {x: 90, y: 770}, {r: 99, g: 99, b: 99, a: 255}, 80)
    garis_bawah(imageDataSaya, {x: 90, y: 650}, {r: 99, g: 99, b: 99, a: 255}, 80)
    garis_bawah(imageDataSaya, {x: 170, y: 650}, {r: 99, g: 99, b: 99, a: 255}, 40)
    garis_bawah(imageDataSaya, {x: 130, y: 730}, {r: 99, g: 99, b: 99, a: 255}, 120)
    garis_samping(imageDataSaya, {x: 90, y: 650}, {r: 99, g: 99, b: 99, a: 255}, 80)
    garis_samping(imageDataSaya, {x: 130, y: 690}, {r: 99, g: 99, b: 99, a: 255}, 160)
    garis_samping(imageDataSaya, {x: 50, y: 610}, {r: 99, g: 99, b: 99, a: 255}, 160)
    garis_samping(imageDataSaya, {x: 50, y: 570}, {r: 99, g: 99, b: 99, a: 255}, 160)
   // garis_samping(imageDataSaya, {x: 10, y: 690}, {r: 99, g: 99, b: 99, a: 255}, 40)
    garis_bawah(imageDataSaya, {x: 50, y: 610}, {r: 99, g: 99, b: 99, a: 255}, 80)
    garis_bawah(imageDataSaya, {x: 50, y: 410}, {r: 99, g: 99, b: 99, a: 255}, 160)
    garis_bawah(imageDataSaya, {x: 90, y: 410}, {r: 99, g: 99, b: 99, a: 255}, 120)
    garis_bawah(imageDataSaya, {x: 170, y: 410}, {r: 99, g: 99, b: 99, a: 255}, 120)
    garis_bawah(imageDataSaya, {x: 130, y: 410}, {r: 99, g: 99, b: 99, a: 255}, 80)
    garis_bawah(imageDataSaya, {x: 210, y: 450}, {r: 99, g: 99, b: 99, a: 255}, 120)
    garis_bawah(imageDataSaya, {x: 250, y: 450}, {r: 99, g: 99, b: 99, a: 255}, 160)
    garis_bawah(imageDataSaya, {x: 210, y: 610}, {r: 99, g: 99, b: 99, a: 255}, 40)
    garis_bawah(imageDataSaya, {x: 250, y: 610}, {r: 99, g: 99, b: 99, a: 255}, 40)
    garis_samping(imageDataSaya, {x: 90, y: 530}, {r: 99, g: 99, b: 99, a: 255}, 80)
    garis_samping(imageDataSaya, {x: 210, y: 450}, {r: 99, g: 99, b: 99, a: 255}, 40)
    garis_samping(imageDataSaya, {x: 210, y: 650}, {r: 99, g: 99, b: 99, a: 255}, 40)

}



