//  ! we have two to import the file
//  ! 1 way is ==>
    // syntex===> "let variable-name=requrie("path of that file")



 

// second way of importing ===> destructureing
// let {add, sub}=require("./app")

// console.log(add(1,2));
// console.log(sub(4,1));


// second way

// let{devide,multiply}=require("./app");
// console.log(
//     devide(2,4)
// );
// console.log(
//     multiply(2,4)
// );


let obj ={
    key : "value",
    key2: "value2",
}

let arr=[ 1,2, "string,false"];
let a = 20;

module.exports ={
    obj , 
    arr,
    a ,
};