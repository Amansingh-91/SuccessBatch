// procedural programming ->
// object oriented programming 
// 
// const student = {
//     name:"Aman",
//     age:27,
//     course:"js"
// }
// const student2 ={
//     name:"dharam",
//     age:27,
//     enrolled:"js",
// }
// classes are blueprint / logical entity
class student{
    constructor(n ,a,course){
        this.name = n ;
        this.age = a;
        this.course = course;
    }
    attendClass(){
        console.log(`${this.name} is attending class`);
    }
}
// object are instances of class
const aman = new student("aman",27,"js");
console.log(aman);
aman.attendClass();
const dharam = new student("daram",27,"fullstack");
console.log(dharam);
dharam.attendClass();