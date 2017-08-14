let moment = require('moment');
let chalk = require('chalk');

moment().format();

let now = moment();
let fullDate = now.format("dddd, MMMM Do YYYY, h:mm:ss a")
let day = now.format('DDDo');

let daylightSavings = now.isDST();
let leapYear = now.isLeapYear();

let seconds = parseInt(now.format('s'));
let hours = parseInt(now.format('H'));
let minutes =  parseInt(now.format('m'));
let total = ((hours * 60)*60) + (minutes * 60) + seconds;

console.log(`It is ${chalk.cyan.bold(fullDate)}.`);
console.log(`It is the ${chalk.magentaBright.bold(day)} day of the year.`);
console.log(`It is ${chalk.cyanBright.bold(total)} seconds into the day.`);

if(daylightSavings) {
    console.log(`It ${chalk.greenBright.bold("is")} during Daylight Savings Time.`);
} else {
    console.log(`It ${chalk.greenBright.bold("is not")} during Daylight Savings Time.`);
}

if(leapYear){
    console.log(`It ${chalk.red.bold("is")} Leap Year.`);
} else {
    console.log(`It ${chalk.red.bold("is not")} Leap Year.`);
}



