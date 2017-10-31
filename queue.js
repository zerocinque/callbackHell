let async = require('async');

// Send email
let sendEmail = function(email,callback) {
    console.log("Sending email to "+email);
    callback(null);
};

// create a queue object with concurrency 2
let q = async.queue(sendEmail,2);

// Called when every processing is done
q.drain = function() {
    console.log('all emails sent');
};

// add some emails to the queue
q.push(["rwtc66@gmail.com","shahid@codeforgeek.com"]);

// add email to the front of the queue
q.unshift("abc@gmail.com");
console.log('pippo');

//output
/*
pippo
Sending email to abc@gmail.com
Sending email to rwtc66@gmail.com
Sending email to shahid@codeforgeek.com
all emails sent
*/