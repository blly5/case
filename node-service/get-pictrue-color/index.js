
const getPixels = require('get-pixels');

getPixels('./pictrue/1.jpeg', function(err, pixels) {
    
    let { data } = pixels;
    console.log( data );
})
