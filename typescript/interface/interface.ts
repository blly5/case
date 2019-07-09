/*
 * @Author: Blue
 * @Date: 2019-05-23 16:49:09
 * @Last Modified by: Blue
 * @Last Modified time: 2019-07-02 10:21:12
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



//optionbags mode

interface parint4Value {
    color: String,
    num  : Number
}

function parint4( type: parint4Value ): { color:String } {
    let { color, num } = type;
    return { color };
}


interface parint5Value {
    color?: String,
    num   : Number,
    tag   : String
}

// function parint5(config: parint5Value):{ color:String } {
//     if(config.colo) {   //属性“colo”在类型“parint5Value”上不存在。你是否指的是“color”?
//         return { color:config.color };
//     }
// }



//readOnly


//只读参数
function parint3( type: {readonly color: number } ) {
    //  type.color = '213';
    // Cannot assign to 'color' because it is a read-only property.ts(2540)
    console.log(type);
 };

//只读数组
let arr: number[] = [5, 55, 555];
let readOnlyArr: ReadonlyArray<any> = arr;

//readOnly作为一个变量、可以使用const、属性可以使用readOnly;



interface parint6Value {
    color?: String,
    Num  ?: Number
};

function parint5( config: parint6Value ) {
    
};

let myParint =  parint5({colo:'12'}  as parint6Value );

interface parint7Value {
    color?: String,
    Num  ?: Number
};


