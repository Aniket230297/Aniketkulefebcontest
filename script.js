/** @format */

let arr = [
  { id: 1, name: "john", age: "18", marks: 80 },
  { id: 2, name: "jack", age: "20", marks: 85 },
  { id: 3, name: "karen", age: "19", marks: 35 },
];

let arr2 = [
  { id:'A', name: "rajesh", age: "18", marks: 80 },
  { id:'B', name: "sameer", age: "17", marks: 70 },
  { id:'C', name: "yash", age: "20", marks: 75 },
];

function PrintStudentswithMap() {
  //Write your code here , just console.log
}

function PrintStudentsbyForEach() {
  //Write your code here , just console.log
}

function addData() {
  //Write your code here, just console.log
   let student = { id: 4, name: "susan", age: "20", marks:45 }
  arr.push(student);
  console.log(arr);
}

function removeFailedStudent() {
  //Write your code here, just console.log
}

function concatenateArray() {
  //Write your code here, just console.log
  const arr3= arr.concat(arr2);
  console.log(arr3);
}
