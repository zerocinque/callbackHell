let fs = require('fs');
fs.readFile('asyncRead.js', 'utf8', function(err, data){
    if(err){
        consol.log(err);
    }
    console.log(data);
});

console.log('pippo');

