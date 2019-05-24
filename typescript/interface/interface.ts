/*
 * @Author: Blue
 * @Date: 2019-05-23 16:49:09
 * @Last Modified by: blue
 * @Last Modified time: 2019-05-24 15:08:39
 */


function parint( colors:{ sky:String } ) {
    console.log( colors.sky );
};

let colors = {
    sky:  'blue',
    tree: 'green'
};

let colors2 = {
    sky: true,
    tree: false
};

parint( colors );

// parint( colors2 );
//类型“{ sky: boolean; tree: boolean; }”的参数不能赋给类型“{ sky: String; }”的参数。



