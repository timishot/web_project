var test1 = "abcdef";
var test2 = 123;
var test3 = true;
var test4 = {};
var test5 = [];
var test6;
var test7 = {"abcdef": 123};
var test8 = ["abcdef", 123];
function test9(){return "abcdef"};

console.log(typeof test1);
console.log(typeof test2);
console.log(typeof test3);
console.log(typeof test4);
console.log(typeof test5);
console.log(typeof test6);
console.log(typeof test7);
console.log(typeof test8);
console.log(typeof test9);

var test10 = null;
console.log(typeof test10);
var a =0/0;
console.log(a)



let b= "d" * 10;

console.log(b);


if ((1==1) === true) {
	console.log("A number equals a string!");
} else {
	console.log("no way")
}