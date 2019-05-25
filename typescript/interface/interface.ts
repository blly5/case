/*
 * @Author: Blue
 * @Date: 2019-05-23 16:49:09
 * @Last Modified by: blue
 * @Last Modified time: 2019-05-24 15:08:39
 */


 interface parint1 {
     colors: String
 }

 interface parint2 {
     colors2?: String
 }

 //readonly 只能在创建的时候修改实参
 interface parint3 {
     readonly colors3:String
 }



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


export let parint3 = function( colors5 ) {
    console.log( colors5 );
};
