# 系统的学习node.js
# Node.js是基于谷歌浏览器的V8引擎的 js的宿主环境
    1.可以解析JS代码（没有浏览器的安全级别的限制）提供很多系统的API
    npm list 查看安装的包的依赖关系图
    npm list | grep gulp 是Linux系统的使用方法  可以在git里面打开
    npm i --production
    npm outdated 检查过期的包
    npm cache clean --force
    main里面的表示暴露接口的文件
# Node package.json
        1.2.3
    1.major：主版本号 ^控制主版本号 剩余取最新
    2.minor：次版本号 ~控制主版本号和次版本号 剩余取最新  什么符号都不写表示值需要这个版本 写*表示取最新
    3.patch：补丁号
# 如何上传自己的包
## 包的类型 
    1.内置模块
    2.第三方的模块
    3.自己定义的包
## 发送流程：
    1.创建号NPM的用户
    2.npm adduser
    3.npm publish
# npm脚本
    1.想要运行多个js文件时 node ./jian.js & node ./ge.js  一个&表示并行  两个&&表示串行
    2.start 和 test可以不用写run 可以简写 npm test
    3.console.log(process.env.npm_package_jian_shuai); //只能具体的输出对象里的具体属性不然会返回undefined 用于取出package.json里的变量 同时还要以npm的方式运行文件才能检索到 不然检索的时命令行的参数
    4."build":"echo $npm_package_jian_shuai" npm run build时输出具体的参数
    5.要想使用NODE_ENV windows需要下载 cross-env 在每个的前面加上这个前缀 console.log(process.env.NODE_ENV);cross-env NODE_ENV=development node test.js
# nrm是npm的镜像源管理工具 可以是npm的源切换
    1.nrm ls 列出源有哪些
    2.nrm use taobao 使用哪个源
    3.npm test 测试哪个源更快
# npx 从npm的5.2版本开始引入
    1.使用了这个以后不用全局安装了 没有一个东西时会先下载然后运行了指令就又删除了
    2.npx --no-install http-server 表示强制使用本地的  不允许下载
    3.npx --ignore-existing http-server 表示强制下载 不允许使用本地的
# node 的浏览器端调试
    node --inspect server.js
# node 的进程管理工具：
- supervisor
- nodemon
- forever
- pm2
-当你的代码更改后会自动重启
优先从缓存加载
# 单元测试 Jest
# 爬虫：
    npm i cheerio -D
# 内置的模块
## url ： 用于解析url地址的和类似于url字符串的
## fs:
    fs.mkdir('',df)创建文件夹
    fs.rmdir('',df) 删除文件夹
    fs.readdir()  读取文件夹
    fs.writeFile(path,data,df)覆盖
    fs.appendFile(path,data,df) 追加 
    fs.unlink(path,df) 删除文件
    fs.readFile(path(,utf-8),df) 读取文件 或者tostring
## http:
### http-get:
# Socket
    