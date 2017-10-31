let Promise = require('bluebird');

let fs = Promise.promisifyAll(require('fs'));

fs.readFileAsync('readWithPromise.js', 'utf8')
    .then(function (data) {
        console.log(data);
    })
    .then(function () {
        console.log('pluto');
    })
    .catch(function (err) {
    console.log(err);
});

console.log('pippo');

