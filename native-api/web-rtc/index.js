



navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia;

if(navigator.getUserMedia) {
    navigator.getUserMedia({
        audio: true,
        video: true
    }, parintView , e => {
        console.log(e);
    });
};

function parintView( stream ) {
    let view = document.querySelector('#view');
    console.log(view);
    view.srcObject = stream;
    video.onloadedmetadata = function(e) {
        // Do something with the video here.
     };
}



