var htpp = require ('http');
var port  = 4000;
var server = htpp.createServer(function(req,res){
res.write('hello mohan');
res.end();
});

server.listen(port,(err,info)=>{
    if(err){
        console.log(err);
    }else{
        console.log("successfully server run")
    }
})