/*
 * @Author: Blue 
 * @Date: 2020-04-25 14:31:00 
 * @Last Modified by: Blue
 * @Last Modified time: 2020-05-06 15:37:50
 */

let { log } = console;


let delay = time => {
    return done => {
      setTimeout(() => {
        done(null, time);
      }, time);
    }
};

let gn = function* () {
  let time;
  log('start');
  time = yield delay(300);
  log(time);
  time = yield delay(100);
  log(time);
  return 'end'
};


let run = (gn, res) => {
  let check = gn.next(res);
  if(check.done) {
    return false;
  }
  check.value((_, time) => {
    run(gn, time);
  })
};
run(gn());

