/*
 * @Author: Blue
 * @Date: 2019-05-25 17:05:45
 * @Last Modified by: Blue
 * @Last Modified time: 2020-04-25 14:34:04
 */


 let Colors2 :String[] = ['blue', 'green', 'white', 'pink'];
 let Colors3 :String[] = ['blue', ...Colors2];

 
 let Color4:any = { type:'blue', index:5 };
 let Color5:any = { type:'black', ...Color4};
 console.log( Color5 ); 
 
 // { type: 'blue', index: 5 } !!!从左向右处理、所以 type:black 会被覆盖

