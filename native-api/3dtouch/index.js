/*
 * @Author: Blue
 * @Date: 2019-04-26 20:03:49
 */

    let body = document.querySelector('body');

    function touchLog( val ) {
        document.querySelector('body').innerHTML = '';
        let el = document.createElement('span');
        el.innerText = val;
        document.body.append( el );
    }

    function forEach( arr, callback ) {
        console.log(arr);
        return Array.prototype.forEach.call(arr, callback);
        return forEach( callback );
    };
    
    console.log('done');

    body.addEventListener('touchstart', (e) => {
       let touchs = e.targetTouches;
       touchLog(touchs[0].force);
    })
