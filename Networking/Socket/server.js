var net = require ('net');

var server = net.createServer(connectionListener);

server.listen(8181, '127.0.0.1');

function connectionListener (conn) {
    console.log('new client connected');
    conn.write('hello');
    conn.on('readable', function() {
        var data = JSON.parse(this.read());
        if(data && data.name){
            this.write('hello'+ data.name);
        }
    });

    conn.on('error', function(error){
        console.log(''+error);
    });
}