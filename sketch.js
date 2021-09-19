var imgs = [];
var avgImg;
var numOfImages = 30;
var r = 0;
var g = 0;
var b = 0;
var index;


//////////////////////////////////////////////////////////
function preload() { // preload() runs once
    for (i=0; i<=29; i++){
    
        imgs.push(loadImage('assets/' + i + '.jpg'));
    }
}
//////////////////////////////////////////////////////////
function setup() {
    createCanvas(1024, 512);
    pixelDensity(1);
    avgImg = createGraphics(512, 512);

}
//////////////////////////////////////////////////////////
function draw() {
    background(125);
    image(imgs[1],0,0);
    for(i=0; i<imgs.length;i++){
        imgs[i].loadPixels();
        
                
    }

    avgImg.loadPixels();

    
    for (i=0;i<avgImg.width;i++){
        for(j=0;j<avgImg.height;j++){

            index = (avgImg.width*j + i)*4;
            r = 0.0;
            g = 0.0;
            b = 0.0;
            for (k=0; k<imgs.length;k++){

                r += imgs[k].pixels[index];
                g += imgs[k].pixels[index+1];
                b += imgs[k].pixels[index+2];

            }
            avgImg.pixels[index] = r/imgs.length;
            avgImg.pixels[index+1] = g/imgs.length;
            avgImg.pixels[index+2] = b/imgs.length;
            avgImg.pixels[index+3] = 255;

        }
    }

    
    avgImg.updatePixels();
    image(avgImg, imgs[0].width, 0, imgs[0].width, imgs[0].height);
    noLoop();
}




