// const net = require('net');
// const client = net.createConnection({
//     port:8080
// },()=>{
//     console.log('成功连接到8080');
//     client.write('world\n');
// })
// client.on('data',(data)=>{
//     console.log(data.toString());
//     // client.end();
// })
// client.on('end',()=>{
//     console.log('下线');
// })
// const net = require('net');
// const readline = require('readline');
// var port = 8080;
// var host = 'localhost'
// var Socket = new net.Socket();
// Socket.connect(port,host,()=>{
//     say();
// })
// Socket.on('data',(data)=>{
//     console.log(data.toString());
// })
// Socket.on('close',()=>{
//     console.log('客户端关闭了');
// })
// const rl = readline.createInterface({
//     input:process.stdin,
//     output:process.stdout
// })
// function say(){
//     rl.question('请输入:\n',(message)=>{
//         console.log('-~-~*-+++');
//         if(message!='bye'){
//             console.log('-------');
//             Socket.write(message);
//         }else{
//             Socket.destroy();
//             rl.close();
//         }
//     })
// }
/*-----------websocket-----------*/
// const ws = new WebSocket('ws://localhost:3000');
// ws.onopen=()=>{
//     ws.send('大家好');

// }
// ws.onmessage=(mes)=>{
//     console.log(mes.data);
// }
// ws.onclose=()=>{
//     console.log('close~');
// }
/*-----------------Socket.io---------------------*/
