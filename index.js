const webSocket = require('ws');

const server= new webSocket.Server({port:3000});

server.on('connection', (ws)=>{
    console.log("user is connected");
    ws.on('message', (message)=>{
        console.log("recieved", message);
        ws.send("hello from the server");
    });
    ws.on('close', ()=>{
        console.log("connection terminated");
    })
});

