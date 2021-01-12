// console.log(process.env.npm_package_jian_shuai); //只能具体的输出对象里的具体属性
// console.log(process.env.NODE_ENV);
// const url = require('url');
// const urlString = 'https://www.baidu.com:443/path/index.html?id=2&tag=3';
// console.log(url.parse(urlString));
/*
Url {
  protocol: 'https:',
  slashes: true,
  auth: null,
  host: 'www.baidu.com:443',
  port: '443',
  hostname: 'www.baidu.com',
  hash: null,
  search: '?id=2&tag=3',
  query: 'id=2&tag=3',
  pathname: '/path/index.html',
  path: '/path/index.html?id=2&tag=3',
  href: 'https://www.baidu.com:443/path/index.html?id=2&tag=3'
}
*/
// var a = url.parse(urlString);
// console.log(url.format(a)); //反向解析成为一个字符串 https://www.baidu.com:443/path/index.html?id=2&tag=3
// console.log(url.resolve(__filename,'../')); //d:/自己编程前端练习文件/
// console.log(url.resolve(__filename,'')); //d:/自己编程前端练习文件/Node.js/test.js 第二个参数必须要传
// const urlProps = new URLSearchParams(url.parse(urlString).search);
// console.log(urlProps);//URLSearchParams { 'id' => '2', 'tag' => '3' }
// console.log(urlProps.get('tag')); //3
// console.log(urlProps.getAll("id","tag")); // 3 ['2']

/*-----------------------http-get:---------------------------------*/
// const http = require('http');
// const server= http.createServer((req,res)=>{
//   res.setHeader('content-type','text/html;charset=utf-8');//不设置这个会乱码  或者写application/json;charset=utf-8
//   res.write('')//write可以写多次但是一定要写end
//   res.end(`{"url":${req.url}}`)//默认的响应头设置的是html  所以写html代码可以解析 req.url会返回/jian/di/index.html
// })
// server.on('requset',(req,res)=>{
//   console.log('requset');
// })
// server.listen(8080,()=>{
//   console.log('localhost:8080');
// })
/*-----------------爬虫------------------------*/
// var http = require('http');
// var https = require('https');
// const cheerio = require('cheerio')
// function filterDate(date){
//   const $ = cheerio.load(date);
//   $('.section-item-box p').each((index,value)=>{
//     console.log($(value).text());
//   })
// }
// var server = http.createServer((req,res)=>{
//   var data = '';
//   https.get('https://www.meizu.com',(result)=>{
//     result.on('data',(chunk)=>{
//       data +=chunk;
//     })
//     result.on('end',()=>{
//     filterDate(data);
//     })
//   })
// })
// server.listen(8080,()=>{
//   console.log('成功开启服务器');
// })
/*-------------文件读取---------------*/
// const fs = require('fs').promises;
// fs.readdir('./').then((value)=>{
//   value.forEach((value,index)=>{
//     fs.stat(`./${value}`).then((value)=>{
//     console.log(value.isDirectory());
//     })
//   })
// })
/*----------------标准输入输出----------------------*/
// const fs = require('fs');
// fs.watch('./',(error)=>{

// })
// const readline = require('readline');
// const rl = readline.createInterface({
//   input:process.stdin,
//   output:process.stdout
// })
// rl.question('请输入',(a)=>{
//   console.log(a);
//   rl.close();
// })
/*--------------crypto加密----------------*/
// const crypto = require('crypto');
// var password = '123abc';
// var a = crypto
// .createHash('sha1')
// .update(password,'utf8')//表示要识别密码里面的中文.
// .digest('hex')//表示16进制
// console.log(a);
/*----------------net/socket----------------*/
// const net = require('net');
// const server = net.createServer((socket)=>{
//   socket.on('data',(data)=>{
//     console.log(data.toString());
//   })
//   socket.write('hello')

// })
// server.on('error',(error)=>{
//   throw error;
// })
// server.listen('8080',()=>{
//   console.log(server.address());
// })
// const net = require('net');
// var client = {a:null,b:null};
// console.log(JSON.stringify(client));
// const server = net.createServer((socket)=>{
//   // if(JSON.stringify(client)==='{"a":null,"b":null}'){
//   //   client.a = socket;
//   // }else if(client.b==null){
//   //   client.b = socket;
//   // }
//   // console.log('jian');
//   socket.on('data',(data)=>{
//     console.log('---------');
//     // switch (socket) {
//     //   case client.a:
//     //     client.b.write("a给你发送"+data)
//     //     break;
//     //   case client.b:
//     //     client.a.write("b给你发送"+data);
//     //     break;
//     //   default:
//     //     break;
//     // }
//     console.log(data.toString());
//   })
//   socket.write('欢迎你使用本聊天软件');
// })
// server.listen(8080);
/*----------------websocket-------------------*/
// var express = require('express');
// var app = express();
// app.use(express.static('./'))
// app.listen(8080);
// const WebSocket = require('ws');
// const wss = new WebSocket.Server({port:3000});
// wss.on('connection',(ws)=>{
//     ws.on('message',(data)=>{
//       // wss.clients.foreach(function each(){
//       //   if(client.readState===WebSocket.OPEN){
//       //     client.send(data)
//       //   })
//       console.log(data);
//       wss.clients.forEach(function each(client){
//         if(client.readyState===WebSocket.OPEN){
//           console.log('-----------');
//           client.send(data)
//         }
//       })
//     })
// })
/*----------------Socket.io--------------*/
var express = require('express');
var app = express();
app.use(express.static('./'))
var http = require('http').createServer(app);
var io = require('socket.io')(http);
app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/index.html')
})
io.on('connection',(socket)=>{
    console.log('有人连接');
    socket.on('receive',(data)=>{
      console.log('--------');
      socket.broadcast.emit('message',data);
      socket.emit('message',data)
    })
})
http.listen(3000,'192.168.1.4');
