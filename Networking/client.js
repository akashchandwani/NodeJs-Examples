var net = require('net');

var connection = net.createConnection({port: 8181, host: '127.0.0.1'},
    function() {
        console.log('connection successful!');
        this.write('hello.');
    }
);

connection.on('data', function (data){
    console.log(data.toString());
});

connection.on('error', function(err){
    console.log(err);
});

connection.on('end', function(){
    console.log('connection ended');
});