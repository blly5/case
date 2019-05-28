/*
 * @Author: Blue
 * @Date: 2019-05-28 14:01:26
 * @Last Modified by: blue
 * @Last Modified time: 2019-05-28 14:01:26
 */

 //link: https://www.tslang.cn/docs/handbook/functions.html


 function getColor([type, index] : [String, Number] ) {
     return [type, index];
 };

getColor(['Sky', 0]);

////////

function getColor2( types: {type:String, index:Number } ) {
    return { ...types };
};

getColor2({ type:'Sky', index:2 });

////////

function getColor3( types:{ type:String, index:Number } ) {
    let { type:getType, index:getIndex }:{type:String, index:Number} = types;
};
getColor3({ type:'Sky', index:2 });


//retrunType

function getColor4( type:String, index:String ):Boolean {
    return !!type
};

let getColor5 = function(type:String, index:String):Boolean {
    return !!type
}


//parameters


//必须传入参数

function getColor6(type:String, index:String):String {
    return ` ${ type} ${index} `
};


//可选参数 ?

function getColor7(type:String, index?:String) {
    return type;
}

//默认值 = 

function getColor8(type:String, index = '5' ):String {
    return `${type} ${index}`
}

//默认参数置前 =

function getColor9 (type = 'blue', index:String) {
    return type;
};

getColor9(undefined, '10');


//剩余参数

function getColor10 (index:String ,...type:String[] ) {
    console.log(index, type );
}


//this ...