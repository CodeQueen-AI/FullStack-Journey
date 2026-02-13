// 1-Array
// let arr = [1,2,3,4];

// forEach
// arr.forEach(function(val){
//     console.log(val + " hello")
// })

// Map
// var newarr = arr.map(function(val){
//     return val*3
// })
// console.log(newarr)

// filter
// arr.filter(function(val){
//     if(val > 2) {return true}
//     else return false;
// })

// find
// var ans = arr.find(function(val){
//     if(val === 2) return val;
// })

// console.log(ans)

// indexOf
// console.log(arr.indexOf(3));  

// 2-Objects
var obj = {
    name : 'CodeQueen',
    age : 17
}

// Access the value of object
console.log(obj.name);    
console.log(obj['name']);

// Change the value of object
obj.age = 25;              
console.log(obj.age);      

// Freeze the object
Object.freeze(obj);
