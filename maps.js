let emp={
    name:"Sham",
    age:22,
    salary:20000000
}
console.log("Object:---",emp);


var map = new Map();  
    map.set('John', 'author');  
    map.set('arry', 'publisher');  
    map.set('Mary', 'subscriber');  
    map.set('James', 'Distributor');  
    map.set(1,"Donald")
    map.set(()=>{
        console.log("Hello");
    },"This is Value")
    console.log("Map:--",map);
    console.log(map.size);