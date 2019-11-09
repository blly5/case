/*
 * @Author: Blue
 * @Date: 2019-04-26 20:03:49
 */

 //可以依据3dTouch压力的,来获取物品重量

let body = document.querySelector('body');

function onTouchStartMove(e) {
    e.preventDefault();
    checkForce(e);
};
function onTouchEnd(e) {
    e.preventDefault();
};
function checkForce(e) {
    document.querySelector('#value').innerHTML = e.touches[0].force;
};

body.addEventListener('touchstart', onTouchStartMove, false);
body.addEventListener('touchmove', onTouchStartMove, false);
body.addEventListener('touchend', onTouchEnd, false);