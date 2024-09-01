'use strict';
Object.defineProperty(exports, '__esModule', {value: true});
exports.printFruits = void 0;
const printFruits = function (fruits) {
  fruits.forEach((fruit, index) => {
    console.log(''.concat(index + 1, '. ').concat(fruit));
  });
};
exports.printFruits = printFruits;
