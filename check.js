var arrays =[1,2,3,4,5,6,7,8,9,10];
var odd = arrays.filter(v=>{return v%2==1});
console.log(odd);
var even = arrays.filter(v=>{return v%2==0});
console.log("odd"+":"+odd," " + "even "+":"+even)