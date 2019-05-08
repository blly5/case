/*
 * @Author: Blue
 * @Date: 2019-04-26 20:03:49
 */

    let body = document.querySelector('body');
    
    let eachList = (arr, cb) => {
        return arr.forEach(cb);
    };

    let logTouch = (tcnum) => {
        let logel = document.createElement('span');
        logel.innerText = tcnum;
        body.append(logel);
    };

    body.addEventListener('touchstart', (e) => {
        let touchs = eachList(e.targetTouches, logTouch(Touch.force) );
    })


    ///
    class countTime {
        countTime = 0;
        endTime = 0;
        actionTime = 0;
        callback = null;

        constructor (count, callback) {
            this.countTime = count;
            this.callback = callback;
        }

        action() {
            this.actionTime = new Date().getTime();
            requestAnimationFrame(() => {
                if( new Date().getTime() > this.actionTime + this.countTime ) {
                    return this.callback();
                }
                this.action();
            })
        }
        stop() {
            
        }
    };

    let test = new countDown(2000,function(){
        alert('done');
    });
    test.action();