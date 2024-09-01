'use strict';
Object.defineProperty(exports, '__esModule', {value: true});
exports.getLongWords = void 0;
const getLongWords = function (longWords) {
  return longWords.filter(word => {
    return word.length > 5;
  });
};
exports.getLongWords = getLongWords;
