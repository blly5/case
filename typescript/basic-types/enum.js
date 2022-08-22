"use strict";
exports.__esModule = true;
exports.likeFruits = exports.fruits = void 0;
var fruits;
(function (fruits) {
    fruits[fruits["apple"] = 0] = "apple";
    fruits[fruits["orange"] = 1] = "orange";
    fruits[fruits["mango"] = 2] = "mango";
})(fruits = exports.fruits || (exports.fruits = {}));
;
var likeFruits;
(function (likeFruits) {
    likeFruits[likeFruits["mango"] = 1] = "mango";
    likeFruits[likeFruits["watermelon"] = 2] = "watermelon";
})(likeFruits = exports.likeFruits || (exports.likeFruits = {}));
;
console.log(fruits);
console.log(likeFruits);
