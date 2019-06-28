
const jpeg       = require('jpeg-js');
const fs         = require('fs');
const img        = fs.readFileSync('./pictrue/1.jpeg');

let rawImgData   = jpeg.decode( img ); 

console.log(rawImgData);

    // fs.writeFile('./t1.txt', rawImgData ,function(){});




