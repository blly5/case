/*
 * @Author: Blue
 * @Date: 2019-05-23 16:49:09
 * @Last Modified by: Blue
 * @Last Modified time: 2019-06-29 18:27:47
 */
function parint1(type) {
    return type;
}
;
function parint2(type) {
    return type;
}
;
//optionbags mode
function parint4() {
}
//只读参数
function parint3(type) {
    //  type.color = '213';
    // Cannot assign to 'color' because it is a read-only property.ts(2540)
    console.log(type);
}
;
//只读数组
var arr = [5, 55, 555];
var readOnlyArr = arr;
