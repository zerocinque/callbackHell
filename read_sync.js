let fs = require('fs');
let fileContent = fs.readFileSync('read_sync.js', 'utf8');

console.log(fileContent);
console.log('something else');