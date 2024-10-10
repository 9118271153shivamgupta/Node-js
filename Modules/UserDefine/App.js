// let add=(a,b)=>{
//     return a+b;
// };
// let sub=(a,b)=>{
//     return a-b;
// };
// // 

// // 1 1st way exportingf
// module.exports={add,sub}
  

// 2nd way exporting
// exports.devide =(a,b)=>{
//     return a/b;};

// exports.multiply =(a,b)=>{
//     return a*b;};


//  third way importing
let {obj, arr,a }=require("./index");
console.log(obj);
console.log(arr);
console.log(a);
