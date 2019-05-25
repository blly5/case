/*
 * @Author: Blue
 * @Date: 2019-05-25 17:05:32
 * @Last Modified by: blue
 * @Last Modified time: 2019-05-25 17:05:32
 */


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