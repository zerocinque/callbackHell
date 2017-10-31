let async = require('async');


/**#####  PRALLEL  #####**/
// all task are doing at the same time
async.parallel({
    function(callback){
        //some async task
        callback();
    },
    function(callback){
        //some async task
        callback();
    }
},function (err, data) {
    //code to execute when everything is done
});


/**#####  SERIES  #####**/
// tasks are executing  in "sync mode"
async.series([
    function(callback) {
        // some async task
        callback();
    },
    function(callback) {
        // some async task
        callback();
    }
],function(err) {
    // Code to execute when everything is done.
});


/**#####  WATERFALL  #####**/
//Each function should complete with any number of result values. The result values will be passed as arguments, in order, to the next task
async.waterfall([
    function(callback) {
        callback(null, 'one', 'two');
    },
    function(arg1, arg2, callback) {
        // arg1 now equals 'one' and arg2 now equals 'two'
        callback(null, 'three');
    },
    function(arg1, callback) {
        // arg1 now equals 'three'
        callback(null, 'done');
        // Got some error ? Don't wanna go further.
        // Provide true in callback and execution will stop.
        //callback(true,"Some error");
    }
], function (err, result) {
    // result now equals 'done'
    // Code to execute when everything is done.
});


let emails = ["abc@xyz.com","blahblah@aa.com"];


/**#####  EACH  #####**/
async.each(emails,function(singleEmail,callback) {
    // Emailer code
    // singleEmail will be one value at a time.
},function(err,data) {
    // Once all done, comes here.
});

/**#####  EACHLIMIT  #####**/
async.eachLimit(emails,1000,function(singleEmail,callback) {
    // Emailer code
    // singleEmail will be one value at a time.
},function(err,data) {
    // Once all done, comes here.
});



/**#####  EACH + WATERFALL  #####**/
async.each(emails,function(singleEmail,callback) {
    async.waterfall([
        function(callback) {
            // code to send email.
            callback(null,Flag);
        },
        function(emailSentOrNot,callback) {
            // Update DB.
        }
    ],function(err,data) {
    });
},function(err,data) {
    // Once all done, comes here.
});


