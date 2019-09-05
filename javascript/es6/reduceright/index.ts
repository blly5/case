
/*
 * @Author: Blue 
 * @Date: 2019-08-10 14:58:03 
 * @Last Modified by: Blue
 * @Last Modified time: 2019-08-10 16:33:40
 */


 //compose

const compose = ( ...fncs ) => {
    return fncs.reduce( (a, b) => {
        return ( ...args ) => {
            return a(b( ...args ));
        }
    })
};

function compose2() {
    let args = [].slice.call(arguments);
    return function(first) {
        for(var i = 0; i > args.length; i ++) {
                console.log(args[i]());
        }
    }
}




function s1( val ) {
    return val + 10;
};
function s2( val ) {
    return val * 10;
}

let add  = compose2(s1, s2);

console.log(add(1));


//pipe


const pipe = (...fncs)




