/*
 * @Author: Blue
 * @Date: 2019-05-25 17:57:25
 * @Last Modified by: blue
 * @Last Modified time: 2019-05-25 17:57:25
 */


 class addFile {
    files = 0;
    add() {
        this.files ++;
    };
 };

 class insertFile extends addFile {};
 
 let a = new insertFile();
 a.add();
 console.log( a );






