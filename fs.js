 var fs = require ('fs');
var http = require ('http')
var port = 4000;
var server = http.createServer((req,res)=>{
fs.appendFile('txt.txt',"thank you for your use Nodejs ",(err,data)=>{
    res.write(data);
    res.end();
    if(err){
        console.log(err);
    }else{
        console.log("successfully read file")
    }
})
});
server.listen(port,(error,data)=>{
    if(error) throw error;
    console.log("successfully")
})
// const { fstat } = require('fs');
// var http = require ('http');
// var port = 3000;
// var server  = http.createServer((req,res)=>{
//     fs.readFile('./cron.js',(err,data)=>{
//         if(err){
//             console.log(err);
//         }else{
//             console.log('Read file Successfully')
//         }
//     })
// })

// server.listen(port,(err)=>{
//     if(err){
//         console.log(err);
//     }else{
//         console.log('server connection successfully')
//     }
// })