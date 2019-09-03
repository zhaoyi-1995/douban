// 1.下载所需要的依赖express,body-parser,mongoose,crypto，并且引入

var express = require('express');//搭建路由
var app = express();
var bodyParser = require('body-parser');//解决post请求问题
var mongoose = require('mongoose');//连接数据库，操作数据库
var crypto = require('crypto');//解决密码加密问题

// 2.中间件解决跨域问题
app.use(function(req,res,next){
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Content-Type,Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
    res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE,OPTIONS'); 
    next();
});
// 4-2定义集合数据模式
    var dbCollection = mongoose.model('users',{
        userName:String,
        userPass:String,
        email:String
    })
//3.解决post请求问题
// 3-1使用post解析模块
var uE = bodyParser.urlencoded({extended:false});
// 3-2 将解析模块放置在post路由中去
app.post('/login',uE,function(req,res){
    // 5.接收前端数据
    let email = req.body.email;
    let userPass = req.body.userPass;

    // 6.对密码进行编译
    let passCode = crypto.createHash('md5').update(userPass).digest('hex')
    // 4.连接数据库
        // 4-1mongoose.connect连接数据库
    mongoose.connect('mongodb://localhost:27017/douban',{useNewUrlParser:true},function(err){
        if(err){
            console.log('数据库连接失败');
        }else{
            console.log('数据库连接成功');
            console.log(email+"------"+userPass)
            dbCollection.find({email,userPass:passCode}).then(
                (ok)=>{
                    console.log(ok);
                    if(ok.length >0){
                        res.send({mes:'登陆成功',status:200,linkid:1});
                    }else if(ok.length == 0){
                        res.send({mes:'登录失败',status:200,linkid:2});
                    }
                },(err)=>{
                    res.send({mes:'登录失败',status:500,linkid:0});
                })
        }
    })
   
});

app.get('/register',function(req,res){
    let email = req.query.email;
    let userName = req.query.userName;
    let userPass = req.query.userPass;

    let passCode = crypto.createHash('md5').update(userPass).digest('hex');

    mongoose.connect('mongodb://localhost:27017/douban',{useNewUrlParser:true},function(err){
        if(err){
            console.log('数据库连接失败');
        }else{
            console.log('数据库连接成功')
            var dbData = new dbCollection({
                userName,
                email,
                userPass:passCode
            });
            dbData.save().then(
                (ok)=>{
                    res.send({mes:'注册成功',status:200,linkid:3});
                },(err)=>{
                    res.send({mes:'注册失败',status:500,linkid:4});
                })
        }
    })
})


app.listen(3000);
