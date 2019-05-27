/*
 * @Author: Blue
 * @Date: 2019-05-27 16:37:47
 * @Last Modified by: blue
 * @Last Modified time: 2019-05-27 16:37:47
 */


 function getColor( type ){
    this.color = type;
    this.getType = function() {
        console.log( this.color );
    }
 };

 let c1 = new getColor('blue');     
 let c2 = new getColor('black');    
 c1.getType();                      //blue
 c2.getType();                      //black
 

//getType 方法可以复用 

getColor.prototype.getType2 = function(){
    console.log( this.color );
}



let c3 = new getColor('pink');     
let c4 = new getColor('white');    

c3.getType2();                     //pink
c4.getType2();                     //white

c3.getType2 === c4.getType2        //true

c3.constructor === getColor        //true

//从上面看出 getType2 方法是 构造函数的属性, constructor 则是prototype指向那个对象、constructor是prototype上的属性、所以也可以实例对象调用


//
