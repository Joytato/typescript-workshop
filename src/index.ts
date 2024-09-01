import {getSquares} from './map';
import {getLongWords} from './filter';
import {printFruits} from './foreach';
import {getFirstThreeCharacters} from './slice';

console.log('Try npm run lint/fix!');

const longString =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ut aliquet diam.';

const trailing = 'Semicolon';

const why = {am: 'I tabbed?'};

const iWish = "I didn't have a trailing space...";

const sicilian = true;

const vizzini = sicilian ? !sicilian : sicilian;

const re = /foo {3}bar/;

export function doSomeStuff(
  withThis: string,
  andThat: string,
  andThose: string[]
) {
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
console.log(getLongWords(words));

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
printFruits(fruits);

// Array of numbers sqaured using map
const numberArray = [1, 2, 3, 4, 5];
console.log(getSquares(numberArray));

// String sliced to extract first 3 characters
const str = 'Potato corner is the best!';
console.log(getFirstThreeCharacters(str));
