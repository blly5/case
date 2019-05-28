/*
 * @Author: Blue
 * @Date: 2019-05-28 14:01:26
 * @Last Modified by: blue
 * @Last Modified time: 2019-05-28 14:01:26
 */

 //link: https://www.tslang.cn/docs/handbook/generics.html




//类型变量

function getColor<S>(type: S ): S {
    return type;
};

///////

let getColor1 = <S> (type:S) => {
    
}



