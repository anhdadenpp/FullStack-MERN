// Created alert on the browser
alert("Hello World");
prompt("What is your name?");
/*
Some Data Types
1. Number
2. String 
3. Boolean
4. Undefined
5. Null
6. Symbol
7. Object
8. Function
9. Array
10. Date

*/
var myName  = "Anhdadenpp"; // var is a keyword to declare a variable
alert(myName);


function test(){
    var a = "10";
    var b = "20";
    // Change the value of a and b
    var temp = a;
    a = b;
    b = temp;
    // Print the value of a and b
    console.log("a is " + a + " and b is " + b);
}
/*
Some Naming and Naming Conventions for Javascript Variables
1. Cannot start with numbers
2. Cannot start with special characters
3. Cannot start with spaces
4. Cannot use reserved keywords
5. Should be meaningful
6. Should be camelCase
7. Should be in lower case
8. Cannot use special characters except _ and $
*/

/*
Example when upper case exactly the character

// Capitalize the first charactor of the name
// Create a var that stores the name of the user via promt
//We use the capitalised version of their name to greet them using alert
// Example: input: "anhdadenpp", output: "Anhdadenpp"
var userName = prompt("What is your name?");
var firstChar = userName.slice(0,1);
var upperCaseFirstChar = firstChar.toUpperCase();
var restOfName = userName.slice(1, userName.length);
restOfName = restOfName.toLocaleLowerCase();
var capitalisedName = upperCaseFirstChar + restOfName;
alert("Hello, " + capitalisedName);

*/
