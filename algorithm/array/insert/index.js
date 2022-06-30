/*
 * @Author: Blue 
 * @Date: 2019-12-05 16:23:17 
 * @Last Modified by: Blue
 * @Last Modified time: 2019-12-06 15:50:09
 */

let Arr = [10, 20, 22, 11, 55, 40, 100];

function insertSoft(arr) {
  arr.forEach((i, idx) => {
    let key = arr[idx], j = idx - 1;
    while (arr[j] > key) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = key;
  });
  return arr;
};

console.log(Arr);
console.log(insertSoft(Arr));