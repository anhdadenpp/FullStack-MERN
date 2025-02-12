// Description: This function is for BMI Calculator

function bmiCalculator(weight, height) {
    var bmi = weight / Math.pow(height, 2);
    bmi = Math.round(bmi) + 1;
    if (bmi < 18.5) {
        return "Your BMI is " + bmi + ", so you are underweight.";
    }else if (bmi >= 18.5 && bmi <= 24.9) {
        return "Your BMI is " + bmi + ", so you have a normal weight.";   
    }  else {
        return "Your BMI is " + bmi + ", so you are overweight.";
    }
}
var bmi = bmiCalculator(65, 1.8);
console.log(bmi); 

///////////////////////////////

// Description: This function is for Leap Year
function leapYear(year) {
    if (year % 4 === 0) {
        if (year % 100 === 0) {
            if (year % 400 === 0) {
                return "Leap year.";
            } else {
                return "Not leap year.";
            }
        } else {
            return "Leap year.";
        }
    } else {
        return "Not leap year.";
    }
}
var year = leapYear(2020);
console.log(year);