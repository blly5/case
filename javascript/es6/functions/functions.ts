/*
 * @Author: Blue
 * @Date: 2019-05-29 15:25:10
 * @Last Modified by: blue
 * @Last Modified time: 2019-05-29 15:25:10
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


//对象字面量

function getColor12( key, val ) {
    return { [key]:val };
};