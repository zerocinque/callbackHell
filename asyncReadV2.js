let fs = require('fs');


let fileContent = function(err, data){
    if(err){
        console.log(err);
    }
    console.log(data);
};


fs.readFile('asyncReadV2.js', 'utf8', fileContent);
