'use strict';
Object.defineProperty(exports, '__esModule', {value: true});
exports.hello = hello;
const world = 'world';
function hello(who) {
  if (who === void 0) {
    who = world;
  }
  return 'Hello '.concat(who, '! ');
}
console.log(hello());
console.log(hello('Joy'));
