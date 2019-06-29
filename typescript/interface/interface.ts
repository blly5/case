/*
 * @Author: Blue
 * @Date: 2019-05-23 16:49:09
 * @Last Modified by: Blue
 * @Last Modified time: 2019-06-29 18:01:48
 */

 //必传接口
 interface parint1Value {
     color: String
 }

function parint1( type: parint1Value ) {
    return type;  
};

//可传接口
 interface parint2Value {
     color ?: String
 }

function parint2( type:parint2Value ) {
    return type;
};

//只读参数
 function parint3( type: {readonly color: number } ) {
    //  type.color = '213';
    // Cannot assign to 'color' because it is a read-only property.ts(2540)
    console.log(type);
 };


//只读数组

let arr: number[] = [5, 55, 555];
const readOnlyArr: ReadonlyArray<any> = arr;


