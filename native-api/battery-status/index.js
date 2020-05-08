/*
 * @Author: Blue 
 * @Date: 2020-05-08 15:52:21 
 * @Last Modified by: Blue
 * @Last Modified time: 2020-05-08 16:21:24
 */



let log = (...info) => {
  let el = document.createElement('div');
  el.innerHTML = `${info.join('')}`;
  document.querySelector('.log').append(el);
};

if (navigator.getBattery) {
  navigator.getBattery().then(function (status) {
    log('charging: ', status.charging);
    log('chargingTime: ', status.chargingTime);
    log('dischargingTime: ', status.dischargingTime);
    log('level: ', status.level * 100 + '%');


    status.addEventListener('chargingchange', function () {
      log('charging: ', status.charging);
    })

    status.addEventListener('dischargingtimechange', function () {
      log('chargingTime: ', status.chargingTime);
    })

    status.addEventListener('levelchange', function () {
      log('level: ', status.level * 100 + '%');
    })


  })
} else {
  log.append('not support')
}
