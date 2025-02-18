function PrintCoder(name, age, yearOfExperience, codingLanguages, isFullTime) {
    this.name = name;
    this.age = age;
    this.yearOfExperience = yearOfExperience;
    this.codingLanguages = codingLanguages;
    this.isFullTime = isFullTime;
    this.print = function() {
        console.log(this.name + " is a coder with " + this.yearOfExperience + " years of experience.");
    }
}
var coder1 = new PrintCoder("Mike", 25, 2, ["JavaScript", "Python"], true);
console.log(coder1.print());