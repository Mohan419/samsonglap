var Fcm = require ('fcm-push');
var serverkey ="AAAA9RdlVdI:APA91bF-3cIIiS9lr1Lk2fdX3pfG5ZGi_UakKnz880slQ7YPBaOLJfHYgoLXMjZYARqMovY6X-ggHXi5C8P98leuaR-AwXaYGYyqQeNbPobSI5WAanPdTo3I5zqmC08qf0N5FermZivg";
var fcm = new Fcm(serverkey);
var data = {
    notification: {
        "title": "Dear Softexer Customer Your planExpaired Soon ",
        "body": "Dear Softexer Customer Your Plan Expaired After OneDay",
        "sound": "notification_alertsound.mp3",
        "icon": "http://qa-api.softexer.com/appic2.png",
        "click_action": "https://www.softexer.com/#/my-account/inbox"
    },
}
var message ={
    to:"cDCFM7NYQQu5JSAP5DIK9s:APA91bFTqJ_Ii_lgjGyducJm3Y0tkfwawJ3bcSNNPtVuqIlRbYPkbEeQLKNlhE-1YpqA0BaXZBA1YTO-UxCyqWhkZzA_bjxj5AmLPKHlYbhCR8kjn3rwnWQMDd8edUh_pM1ADoQPCfIR",
    notification:data.notification,
}

fcm.send(message,(err)=>{
    if(err){
        console.log(err);
    }else{
        console.log("Send Successfully Notification")
    }
})