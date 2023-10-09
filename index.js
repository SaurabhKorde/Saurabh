// function one(name) {
    
//     if(true){
//         console.log("Name:---",name);
//     }
// }

// one("Sham");

// let two=function(name) {
//         console.log("Name:---",name)
// }

// two("Deva")


// let arrowFunc=()=>{console.log("Hello...");
// console.log("Welcome.");}
// arrowFunc()

// let arr=[1,2,3,4,56,99,7,88,]

// let result=arr.map((n)=>{
// if(n==2){
//     console.log(n*5);
// }

//     return n*2
// });

// console.log("result:--",result);


// let empDetail={
//     name:"Aishu",
//     age:25,
//     Salary:50000,
//     printDetails:function (){
//         console.log("Common Function:--",this);
//     },
//     printSalary:()=>{
// console.log("Arrow Function:--",this);
//     }
// }

// empDetail.printDetails();
// empDetail.printSalary();

// let add=(n1,n2)=>(n1+n2)
// console.log(add(2,4));

// function addnew(n1,n2) {
//     console.log("Addition is:--",n1+n2);
// }
// addnew(11,12);

(function(n1,n2){
    console.log("Hello You are in IIFE...");
    console.log("Addition is:--",n1+n2);

})(11,14);


(function(n1,n2){
    
    console.log("Multiplication is:--",n1*n2);

})(11,14)
