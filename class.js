class Student {   
    constructor(name, age) {   
       this.name = name;   
       this.age = age;  
    }   
    stu() {   
       console.log("The Name of the student is: ", this.name)   
       console.log("The Age of the student is: ",this. age)   
    }   
 }   
   
 var stuObj = new Student('Peter',20);   
 let student2=new Student('Afreen',22);
 stuObj.stu();  
 student2.stu()