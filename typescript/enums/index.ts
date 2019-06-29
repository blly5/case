/*
 * @Author: Blue 
 * @Date: 2019-06-29 13:55:50 
 * @Last Modified by: Blue
 * @Last Modified time: 2019-06-29 14:25:18
 */

//link: https://www.tslang.cn/docs/handbook/enums.html


//Number
enum Colors30 { sky, land, glaxy };
// 1 2 3 ...

function quest( des:String, index, type ) {
    console.log( `${ des }`, index, type );
};

quest('colorType:', Colors30.sky, Colors30[0] );

// colorType: 0 sky

//String
enum Color31 { sky = 'blue', land = 'black', glaxy = 'gary' };






