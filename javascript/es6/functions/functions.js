/*
 * @Author: Blue
 * @Date: 2019-05-29 15:25:10
 * @Last Modified by: Blue
 * @Last Modified time: 2019-07-16 17:57:48
 */


function getColor11() {
    this.type = 'Orange'
    this.index = 10
    this.add = function() {
        setInterval(() => {
            this.index ++;
        }, 1000);
    }

    this.get = function() {
        console.log( this.index )
    }
    this.get2 = () => {
        console.log( this.index )
    }
};


let call = ( key, ...args ) => context => context[key]( ...args );


//修改对象字面量name

function getColor12( key, val ) {
    return { [key]:val };
};

//defineProprty             https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty

let data = {
    key: Math.random()
};

function listen( obj ) {
    for(let o in obj) {
        Object.defineProperty( obj, o , {
            get() {
                console.log('done');
            },
            set() {
                console.log(`set`);
            }
        })
    }
};
listen( data );

console.log( data.key );
console.log( data.key );

