let fs = require('fs');
let fileContent = fs.readFileSync('syncRead.js', 'utf8');

console.log(fileContent);
console.log('something else');