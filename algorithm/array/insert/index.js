/*
 * @Author: Blue 
 * @Date: 2019-12-05 16:23:17 
 * @Last Modified by: Blue
 * @Last Modified time: 2019-12-06 15:50:09
 */


const arr = [21, 10, 2, 3, 100, 99, 22];


function insertionSort(arr) {
  arr.forEach((current, index) => {
    let preIndex = index - 1;
    while (preIndex >= 0 && arr[preIndex] > current) {
      arr[preIndex + 1] = arr[preIndex];
      preIndex--;
    }
    arr[preIndex + 1] = current;
  })
  return arr;
};


const result = insertionSort(arr)

console.log(result);