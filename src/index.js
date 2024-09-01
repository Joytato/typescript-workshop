'use strict';
Object.defineProperty(exports, '__esModule', {value: true});
exports.doSomeStuff = doSomeStuff;
const map_1 = require('./map');
const filter_1 = require('./filter');
const foreach_1 = require('./foreach');
const slice_1 = require('./slice');
console.log('Try npm run lint/fix!');
const longString =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ut aliquet diam.';
const trailing = 'Semicolon';
const why = {am: 'I tabbed?'};
const iWish = "I didn't have a trailing space...";
const sicilian = true;
const vizzini = sicilian ? !sicilian : sicilian;
const re = /foo {3}bar/;
function doSomeStuff(withThis, andThat, andThose) {
  //function on one line
  if (!andThose.length) {
    return false;
  }
  console.log(withThis);
  console.log(andThat);
  console.dir(andThose);
  console.log(longString, trailing, why, iWish, vizzini, re);
  return;
}
// Array of words filtered to find words with more than 5 letters
const words = [
  'Bleak',
  'Prick',
  'Fiddle',
  'Diamond',
  'Green',
  'Shine',
  'Aluminium',
  'Wool',
  'Luxury',
  'Luscious',
];
console.log((0, filter_1.getLongWords)(words));
// Array of fruits displayed using forEach
const fruits = [
  'Banana',
  'strawberry',
  'grape',
  'apple',
  'orange',
  'watermelon',
  'blueberry',
  'lemon',
  'peach',
  'avocado',
  'pineapple',
  'cherry',
  'cantaloupe',
  'raspberry',
  'pear',
  'lime',
  'blackberry',
  'clementine',
  'mango',
  'plum',
];
(0, foreach_1.printFruits)(fruits);
// Array of numbers sqaured using map
const numberArray = [1, 2, 3, 4, 5];
console.log((0, map_1.getSquares)(numberArray));
// String sliced to extract first 3 characters
const str = 'Potato corner is the best!';
console.log((0, slice_1.getFirstThreeCharacters)(str));
