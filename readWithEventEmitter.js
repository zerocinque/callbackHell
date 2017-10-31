let EventEmitter = require('events').EventEmitter;
let emitter = new EventEmitter;
let fs = require('fs');

emitter.on('start_read', function (fileName) {
    console.log('started reading file...\n\n');
    fs.readFile(fileName, 'utf8', function (err, data) {
        if (err){
            console.log(err);
        }
        console.log(data);
    });
});

emitter.emit('start_read', 'README.md');
emitter.emit('start_read', 'syncRead.js');