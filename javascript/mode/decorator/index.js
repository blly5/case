/*
 * @Author: Blue 
 * @Date: 2019-07-15 15:02:31 
 * @Last Modified by: Blue
 * @Last Modified time: 2019-07-15 16:17:06
 */


//  Q&A 

/**
 * 解决实例和类之前的强耦合、当类改变时、实例也会随之改变。
 **/


let _log = console.log;

function log( v ) {
    return _log.apply(console, [v]);
};

log('done');

Function.prototype.after = function( afterfn ) {
    let _self = this;

    return {
        AOP() {
            var ret = _self.apply(this, arguments);
            afterfn.apply(this, arguments);
            return ret;
        }
    };
    
};



