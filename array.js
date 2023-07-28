console.log("hii i am working......");
const marks=[34,56,78,39,70,80];
const fruits=["orange","banana","apple","pineapple"];
const mixed=["str",89,[3,4]];

console.log(marks);
console.log(fruits);
console.log(mixed);

// creating array bu using Array constructor
let arr =new Array(34,56,32,56,"array");
console.log(arr);

//properties of array 

console.log(arr.length);
console.log(marks.length);

//methods of Array

console.log(Array.isArray(arr));
console.log(arr.indexOf(32));
// console.log(arr.pop(),arr);
// console.log(arr.shift(),arr);
console.log(arr.push("banana"),arr);
console.log(arr.unshift("499"),arr);
console.log(arr);

// console.log(arr.splice(1,3),arr);
// console.log(arr.reverse());

console.log(arr.concat(marks));
arr=arr.concat(marks)
console.log(arr);