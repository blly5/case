/*
 * @Author: Blue 
 * @Date: 2019-06-29 13:55:50 
 * @Last Modified by: Blue
 * @Last Modified time: 2019-06-29 15:31:31
 */

//link: https://www.tslang.cn/docs/handbook/enums.html


//Number
enum Colors30 { sky, land, glaxy };
// 1 2 3 ...

// function quest( des:String, index, type ) {
//     console.log( `${ des }`, index, type );
// };

// quest('colorType:', Colors30.sky, Colors30[0] );
// colorType: 0 sky

//String
enum Color31 { sky = 'blue', land = 'black', glaxy = 'gary' };


//mixed
enum Color32 { sky = 'blue', land = 0, glaxy, spark };

//{ '0': 'land', '1': 'glaxy', '2': 'spark', sky: 'blue', land: 0, glaxy: 1, spark: 2 }


// question

// Color32.sky = 12;
//Cannot assign to 'sky' because it is a read-only

enum Color33 { sky, land = 1*5, glaxy = 1<<3 };


console.log(Color32);