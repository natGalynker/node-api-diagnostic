// Write a function to sum the numbers in a file.
//
// This function should take the name of a plain text file with one number per
// line, as in data/integers.txt.
// It should add all the numbers and pass the result as the second argument to
// the callback provided. e.g `callback(null, sum);`.
//
// Blank lines should be ignored.
// However, if there is a line with non-numeric content (e.g. "oops"),
// an Error should be passed as the first argument to the callback provided,
// e.g. `callback(new Error('line not a number'));`
//

'use strict';

const fs = require('fs'); // jshint ignore: line

let filename = process.argv[2];

const sumLines = (filename, callback) =>
  new Promise((resolve, reject) => {
  fs.readFile(filename, {encoding: 'utf8' }, (err, data) => {
    if(err) {
      reject(err);
    } else {
    resolve(data);
  }
});

readFile(filename)
.catch(err = {
  console.error(err);
  /* your response here */
  callback();
});

module.exports = {
  sumLines,
};
