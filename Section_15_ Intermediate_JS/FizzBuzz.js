// Array
var output = [];
var count = 1;
// output.push(1); // output = [1]
// output.push(2); // output = [1, 2]
// output.push(3); // output = [1, 2, 3]
// output.pop(); // output = [1, 2]

// FizzBuzz Challenge solution 1
function fizzBuzz() {
    for (var i = 1; i <= 100; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            output.push("FizzBuzz");
        } else if (i % 3 === 0) {
            output.push("Fizz");
        } else if (i % 5 === 0) {
            output.push("Buzz");
        } else {
            output.push(i);
        }
    }
    console.log(output);
}
// FizzBuzz Challenge solution 2
function fizzBuzz2() {
if (count % 3 === 0 && count % 5 === 0) {
    output.push("FizzBuzz");
} else if (count % 3 === 0) {
    output.push("Fizz");
} else if (count % 5 === 0) {
    output.push("Buzz");
}

count++;
}