/*
 * @Author: Blue
 * @Date: 2019-05-23 16:49:09
 * @Last Modified by: Blue
 * @Last Modified time: 2019-07-02 10:21:12
 */

interface fruit {
  readonly category: string;
  name: string;
  weight: number;
  sale: boolean;
}

class createFruit {
    constructor(config: fruit) {
        return config;
    }
}
let data = {
    category: "Aisa",
    name: "watermelon",
    weight: 1.5,
    sale: true,
  };
let myFruit = new createFruit(data);

console.log(myFruit);


// let fruit = {
//   category: "Aisa",
// };

// console.log(fruit);
