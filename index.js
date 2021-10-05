console.log("Helllooooo");
console.warn("This is warning");
console.error("This is error");

var a = 10;
var b = 20;
console.log(a+b);

var num1 = 100;
var num2 = 200;

var str = "This is string";
var str2 = 'this is also a string';

var marks = {
    ali: 80,
    ahmad: 90,
    ammar:88
};
console.log(marks);



var arr = [1,2,3,'ali',4,5];





function avg(a,b){

    return (a + b)/2;
}
c = avg(100,10);
console.log(c);


var age = 30;
if(age>18){

    console.log("You can drive a car")
}
else{
    console.log("You cant drive");
}


var arr = [1,2,3,4,5,6,7,8]
for(var i= 0; i< arr.length;i++ )
console.log(arr[i]);

arr.forEach(function(Element){

    console.log(Element);
})


let myArr = [1,2,'ali', 'ahmad',"Ammad"]
//myArr.pop()
//myArr.push("ABCD")
// myArr.shift();
console.log(myArr);


let myString = ("My name is ahmad")
// console.log(myString.length);
// console.log(myString.slice(0,10))
console.log(myString.replace("ahmad", "ahmadKhalid"))




let myDate = new Date();

console.log(myDate.getTime())
console.log(myDate.getDate())

// DOM manipulation
let ele = document.getElementById('click')
console.log(ele)

let eleclass = document.getElementsByClassName('container2')
console.log(eleclass)
eleclass[1].style.background = "red";