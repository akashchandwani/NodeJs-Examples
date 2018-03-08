var net = require('net');

var server = net.createServer(function(connectionListener){

    console.log('connected');
    console.log(this);
    console.log(this.address());

    this.getConnections(function(err, count){
        if(err){
            console.log('Error getting connection');
        }
        else{
            console.log('Connection count: ', count);
        }
    });

    //binding connections to event
    connectionListener.on('end', function() {
        console.log('disconnected');
    });

    connectionListener.on('error', function(err){
        console.log(err);
    });

    // send messages from server
    connectionListener.write('hello\r\n');
    
});

server.on('error', function(err){
    console.log('server error: ', err);
});

server.on('data', function(data){
    console.log('server error: ', data.toString());
});

server.listen(8181, function(){
    console.log('server is listening');
});


// to connect from a local terminal - curl http://localhost:8181