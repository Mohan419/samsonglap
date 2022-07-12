var nodemailer = require ('nodemailer');
var transport = nodemailer.createTransport({
    service:"gmail.com",
    name: "SMTP",
    host: "mail.softexer.com",
    port: 465,
    secure: true,
    auth:{
        user:"support@softexer.com",
      pass: "Abcd12345@#",
    }
});

var options ={
    from:"support@softexer.com",
    to:"mohan419ecealfa@gmail.com",
    subject:"Checking purpose",
    text:"helo welcome to softexer customer"
};
transport.sendMail(options,(err,data)=>{
    if(err){
console.log(err)
    }else{
    console.log("Successfully send Mail",data)
    }
})