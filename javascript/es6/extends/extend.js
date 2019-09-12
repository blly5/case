/*
 * @Author: Blue
 * @Date: 2019-05-25 17:57:25
 * @Last Modified by: blue
 * @Last Modified time: 2019-05-25 17:57:25
 */


 //Class

 class addNub {
    files = 0;
    add() {
        this.files ++;
    };
 };

 class insertFile extends addNub {
     files = 2;
 };
 
 let a = new insertFile();


//call

function addNub2() {
    this.files = 0;
    this.add = function() {
        this.files ++;
    }
};

function insertFile2() {
    this.files = 4;
};

let a2 = new insertFile2();
addNub2.call( a2 );


//prototype

function addNum3() {
    this.files = 0;
    this.add = function() {
        this.files ++;
    }
};

function insertFile3(){};

insertFile3.prototype = new addNum3();

let a3 = new insertFile3();


//Object.create

function addNum4() {
    this.files = 0;
    this.add = function() {
        this.files ++;
        console.log( this );
    }
};

let a4 = Object.create(addNum4 );

