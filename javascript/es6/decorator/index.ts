
/*
 * @Author: Blue 
 * @Date: 2019-07-12 16:58:48 
 * @Last Modified by: Blue
 * @Last Modified time: 2019-07-23 14:50:29
 */


 //1. decorator
 @B
 class A {
   static isTest() {
      console.log(`is A`);
   }
 };

 function B(target) {
    target.isTest = true;
    console.log(target);
 };

console.log(A.isTest);

//true

// function C(target) {
//    target.test = true;
// }

// function D() {}
// D = C(D) || D;

// console.log(D.test); true


//2. 多个参数

function E( isTest ) {
   return function( target ) {
      target.isTest = isTest;
      target.testMsg = function(testMsg) {
         alert(testMsg);
      }
   }
};
@E(true)
class F {
   static isTest = false;
   static testMsg = {};
};
console.log(F.isTest);

// F.testMsg('halo');   true, alert('halo')


//3. prototype

@H
class G {
   static isTest = false;   
};
function H( target ) {
   target.prototype.isTest = 'halo';
};
let I = new G();

// console.log(I.isTest);  halo

class J {
   @readOnly
   name() {
      return 'halo';
   }
};

function readOnly(target, name, descriptor) {
   descriptor.writable = false;
   return descriptor;
}

readOnly(J.prototype, 'name', descriptor);
