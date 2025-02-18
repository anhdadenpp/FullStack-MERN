
// Object Literal
var coder1 = {
    name: "John",
    age: 32,
    yearOfExperience: 5,
    codingLanguages: ["JavaScript", "Python", "Java"],
    isFullTime: true
}
var coder2 = {
    name: "Jane",
    age: 28,
    yearOfExperience: 3,
    codingLanguages: ["JavaScript", "Python"],
    isFullTime: false
}
// 
function printCoder(name, age, yearOfExperience, codingLanguages, isFullTime) {
    this.name = name;
    this.age = age;
    this.yearOfExperience = yearOfExperience;
    this.codingLanguages = codingLanguages;
    this.isFullTime = isFullTime;
}
var coder3 = new printCoder("Mike", 25, 2, ["JavaScript", "Python"], true);


console.log(coder3);
console.log(coder1.codingLanguages);
