let arr1 = [1,2,3];
const arr2 = [4,5,6];

// for(let i = 0;i < arr2.length ; i++){
//     arr1.push(arr2[i]);
// }

// console.log(arr1);

arr1 = [...arr1,...arr2];
console.log(arr1);

const obj = {
    name:"aman",
    age:27,
}
const student = {
    ...obj,
    course:"js"
}
console.log(student);

// destructuring

// const mycourse = student.course;
// console.log("hii",mycourse);
// const myname = student.name;

const {course,name} = student;
console.log(course,name);


