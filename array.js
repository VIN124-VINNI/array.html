var fruits = ["strawberry", "orange", "apple", "mango", "pomergrante", "pineapple", "banana"];
var length_arr = fruits.length;
fruits.push = ("custardapple", "dragonfruit")
fruits.pop()
fruits.unshift("grapes", "papaya")
fruits.shift()
var rev_str = fruits.reverse();
console.log(fruits)

/*How can you find the index of a specific value in an array?
*/
var index_arr = fruits.indexOf("mango");
console.log(index_arr)

/*How can you check if a certain value exists in an array?
*/
console.log(fruits.includes("onion"))
console.log(fruits.includes("mango"))

/*How can you convert an array to a string using commas as separators?
*/
var str = "hello world!";
var split = str.split(" ")
var joinwords = split.join("   ")
console.log(joinwords)

/*How can you sort the elements of an array in ascending order?*/
const fruit = ["banana", "orange", "papaya", "custardapple", "apple", "kiwi"];
fruit.sort()
console.log(fruit)


/*Questions with Multiple Array Methods:
1.
Write a code snippet that adds an element to the end of an array, then removes the first element.*/

var vegetables = ["potato", "tomato", "onion", "carrot"];
vegetables.push = ("cabbage")
vegetables.shift()
console.log(vegetables)

2
/*How can you reverse an array and then join the elements into a string?
*/
var arr = ["sumesh", "ramesh", "rohit", "nithish"];
var rev_arr = arr.reverse();
var joinwords = arr.join("   ")
console.log(joinwords)


3
/*Write a code that first sorts an array in ascending order, then removes the last element.*/
var nuts = ["cadamom", "almonds", "walnuts", "cashews", "pistachios"];
nuts.sort()
nuts.pop()
console.log(nuts)

4
/*How do you add two elements at the beginning of an array, then remove the first element and find the length of the array?
*/

var tools = ["screwdriver", "tester", "bolts", "hammer"];
tools.unshift("plaster", "nuts")
tools.shift()
var tools = tools.length;
console.log(tools)

5
/*How do you combine two arrays, sort the combined array, and then remove the last element?
*/
var arr = ["custardapple", "banana", "apple", "watermelon", "grapes"];
var arr1 = ["orange", "blackberry"];
var concatPart = arr.concat(arr1);
concatPart.sort()
concatPart.pop()
console.log(concatPart)