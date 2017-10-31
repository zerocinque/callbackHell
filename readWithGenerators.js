"use strict";

let fs = require('fs');
let co = require('co');

co(function* () {
    let file = yield readFile('readWithGenerators.js');
    console.log(file);
    console.log('I am after file read even though its Async');
});

function readFile(filename) {
    return function (callback) {
        fs.readFile(filename, 'utf8', callback);
    }
}