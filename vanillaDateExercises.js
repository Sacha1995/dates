/*****************************************************************
 * Vanilla Date Exercises
 ******************************************************************/

// 1. Write a function that tests if something is a Date object or not. (Hint: Remember that Date is a class, so this would have to be an instance of that class...)

//I think I do not understand this question, because I wrote the answer to question 7 here.

// const d = new Date(123456789);
// function isDate(date) {
//   if (date instanceof Date && !isNaN(date)) {
//     console.log("It is a date!");
//   } else {
//     console.log("It is not a date...");
//   }
// }

// isDate(d);

// 2. Create today's date
let now = new Date();
console.log(`the date is ${now}`);

// 3. Get the current timestamp (using a static method of Date)
// this one is not static
let timeStamp = new Date();
timeStamp = timeStamp.toLocaleTimeString();
console.log(timeStamp);

//static it is 3.01
let staticTimeStamp = new Date(2024, 5, 6, 15, 1);
staticTimeStamp = staticTimeStamp.toLocaleTimeString();
console.log(staticTimeStamp);

// 4. Create a date to represent next Christmas Day
let christmasDay = new Date(2024, 11, 25);
console.log(
  christmasDay.toLocaleString("GB-en", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })
);

// 5. Work out how many days it is until christmas
// Get difference between now and xmas
const christmasUnix = new Date(1735084800);
const nowUnix = Date.now();
const calculateDifference = (a, b) => {
  let timeDifference = Math.abs(a - b);
  timeDifference = Math.ceil(timeDifference / 86400000);
  console.log(timeDifference);
};

// Divide by number of ms in 1 day:
// milliseconds per day = 24 hrs/day * 60 minutes/hour * 60 seconds/minute * 1000 msecs/second
// Math.floor for whole days; Math.ceil to include today

calculateDifference(christmasUnix * 1000, nowUnix);

// 6. I'm going to make 2 random dates. I want you to log out which one is earlier (or if they are the same?!)

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}

const date1 = new Date(
  new Date().getFullYear(),
  getRandomIntInclusive(0, 1),
  getRandomIntInclusive(1, 27)
);

console.log("date1", date1);

const date2 = new Date(
  new Date().getFullYear(),
  getRandomIntInclusive(0, 1),
  getRandomIntInclusive(1, 27)
);

console.log("date2", date2);

const earlierDate =
  date1 - date2 < 0
    ? "Date 1 is earlier."
    : date1 - date2 === 0
    ? "They are the same day."
    : "Date 2 is earlier.";

console.log(earlierDate);

// long version
// function earlierDate(a, b) {
//   if (a - b < 0) {
//     console.log("Date 1 is earlier.");
//   } else if (a - b === 0) {
//     console.log("They are the same day.");
//   } else {
//     console.log("Date 2 is earlier.");
//   }
// }
// earlierDate(date1, date2);

// 7. How do I test if a date is valid? ****
const d = new Date(123456789);
function isDate(date) {
  if (date instanceof Date && !isNaN(date)) {
    console.log("It is a date!");
  } else {
    console.log("It is not a date...");
  }
}

isDate(d);

// 8. Output today in the following format: MM-DD-YYYY - using the getter methods on the date object
let nowFormat = now.getMonth() + 1 + `-${now.getDate()}-${now.getFullYear()}`;

console.log(nowFormat);

// 9. Now output it using toLocaleDateString in english ('en-GB') and in german ('de-DE')
let nowGB = now.toLocaleDateString("en-GB", {});
let nowDE = now.toLocaleDateString("de-DE", {});

console.log(nowGB);
console.log(nowDE);

// 10. Output the current time in hours, mins & seconds
let nowTime = now.toLocaleTimeString("en-GB");
console.log(nowTime);

// 11. Make a clock by starting with the current time and then every second adds a second to the date and prints it.
// let i = 0;
// setInterval(function clock2(date = 1717945950) {
//   date += i;
//   i += 1000;
//   console.log(
//     new Intl.DateTimeFormat("en-GB", {
//       hour: "numeric",
//       minute: "numeric",
//       second: "numeric",
//     }).format(date)
//   );
//   console.log(date);
// }, 1000);

// Actual clock
// function clock() {
//   let newTime = Date.now();
//   console.log(
//     new Intl.DateTimeFormat("en-GB", {
//       hour: "numeric",
//       minute: "numeric",
//       second: "numeric",
//     }).format(newTime)
//   );
// }

// setInterval(clock, 1000);

// 12. Create a copy of today
let current_date = new Date();
let clone_date = new Date(current_date.getTime());
console.log(current_date);
console.log(clone_date);
clone_date = 2;
console.log(current_date); // this one stays the same
console.log(clone_date); // this one is now 2

// 13. Use the setter methods to find out what is 3years, 2months and 1 day from now
const future = new Date();
future.setFullYear(future.getFullYear() + 3);
future.setMonth(future.getMonth() + 2);
future.setDate(future.getDate() + 1);

console.log(future.toDateString());

// 14. Get your timezone from today (remember it's in mins and the sign is inverted)
const dateTime = new Date();
const UTC_offset = dateTime.getTimezoneOffset();
console.log(UTC_offset);

// 15. Use the Intl module formatter (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/format) to get the time in Sydney (https://en.wikipedia.org/wiki/List_of_tz_database_time_zones)
let timeSydney = new Date();
timeSydney = timeSydney * 1 + 32400000; // adds 9 hours. Not a great solution, because of summertime

const options = {
  hour: "numeric",
  minute: "numeric",
  second: "numeric",
};

const dateTimeFormat = new Intl.DateTimeFormat("en-AU", options);
console.log(new Date());
console.log(timeSydney);
console.log(dateTimeFormat.format(timeSydney));

// 16. Write a function that creates a years/months/days/hours/mins/secs/ms duration in ms.
function inMs(
  years = "",
  months = "",
  days = "",
  hours = "",
  mins = "",
  secs = "",
  ms = ""
) {
  let totalMs = 0;

  if (years !== "") {
    years *= 31556952000;
    totalMs += years;
  }

  if (months !== "") {
    months *= 2629746000;
    totalMs += months;
  }

  if (days !== "") {
    days *= 86400000;
    totalMs += days;
  }

  if (hours !== "") {
    hours * 3600000;
    totalMs += hours;
  }

  if (mins !== "") {
    months *= 60000;
    totalMs += months;
  }

  if (secs !== "") {
    secs *= 1000;
    totalMs += secs;
  }

  if (ms !== "") {
    totalMs += ms;
  }

  return totalMs;
}

console.log(inMs(1));

// 17. Write a function that returns an object with the years/months/days/hours/mins/secs/ms between 2 dates
function difference(dateA, dateB) {
  let timeDifference = Math.abs(dateA - dateB);
  let afterYears = timeDifference % 31556952000;
  let years = (timeDifference - afterYears) / 31556952000;
  let afterMonths = afterYears % 2629746000;
  let months = (afterYears - afterMonths) / 2629746000;
  let afterDays = afterMonths % 86400000;
  let days = (afterMonths - afterDays) / 86400000;
  let afterHours = afterDays % 3600000;
  let hours = (afterDays - afterHours) / 3600000;
  let afterMinutes = afterHours % 60000;
  let minutes = (afterHours - afterMinutes) / 60000;
  let ms = afterMinutes % 1000;
  let seconds = (afterMinutes - ms) / 1000;

  let timeInBetween = {
    _years: years,
    _months: months,
    _days: days,
    _hours: hours,
    _minutes: minutes,
    _seconds: seconds,
    _ms: ms,
  };

  console.log(
    `There are ${years} years, ${months} months, ${days} days, ${hours} hours, ${minutes} minuts, ${seconds} seconds and ${ms} miliseconds between these two dates.`
  );

  return timeInBetween;
}

difference(1717951018000, 1717864618000); // today and yesterday

/*****************************************************************
 * For date-fns Exercises follow link on page
 ******************************************************************/
