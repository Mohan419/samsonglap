var moment = require ('moment')
var Dt = new Date();
var kk =moment(Dt);
console.log(kk)
var kl = Math.floor(new Date(kk).getTime().toString()/1000);
console.log(kl)
var new_date = moment(Dt, "DD-MM-YYYY").add(1, 'days');
console.log(new_date)
var kll = Math.floor(new Date(new_date).getTime().toString()/1000);
console.log(kll)

