// import {
//   add,
//   compareAsc,
//   differenceInDays,
//   differenceInYears,
//   endOfDecade,
//   endOfMonth,
//   format,
//   formatDistanceToNowStrict,
//   isSameMonth,
//   isValid,
//   parse,
//   startOfDay,
//   startOfMonth,
//   sub,
// } from "date-fns";

import {
  add,
  compareAsc,
  differenceInDays,
  differenceInYears,
  endOfDecade,
  endOfMonth,
  format,
  isSameMonth,
  isValid,
  parse,
  startOfDay,
  startOfMonth,
  sub,
} from "https://cdn.jsdelivr.net/npm/date-fns@3.5.0/+esm";
import formatDistanceToNowStrict from "https://cdn.jsdelivr.net/npm/date-fns@3.5.0/formatDistanceToNowStrict.mjs";

// import zhCN from "https://cdn.jsdelivr.net/npm/date-fns@3.5.0/locale/zh-CN.mjs";

// 1. Get current DateTime and output in a format "04/13/2022 15:38:54"
const formatNow = format(new Date(), "MM/dd/yyyy hh:mm:ss");
console.log(formatNow);

// 2. Turn this date string into a date object...
const dateStr2 = "09/17/2020 23:45:02";
console.log(dateStr2);
const dateObject2 = parse(dateStr2, "MM/dd/yyyy HH:mm:ss", new Date());
console.log(dateObject2);

// // 3. Display the current month in Chinese
// const chinese = format(new Date(), "MMMM", { locale: zhCN }); // does not work. I can't figure out how to import zhCN
// console.log(chinese);

// 4. Create an older date and compare it to now to prove that is before
const first = (date1, date2) => {
  const compare = compareAsc(date1, date2);
  let result =
    compare === 0
      ? `The dates are equal`
      : compare === 1
      ? `${date1} is before ${date2}`
      : `${date2} is before ${date1}`;
  return result;
};

console.log(first(new Date(1987, 1, 11), new Date()));

// 5. Create tomorrow by adding 1 day; create this time last week by subtracting 1 week, and; create the start of next month by subtracting 1 month.
let tomorrow = add(new Date(), {
  days: 1,
});
tomorrow = format(tomorrow, "MM/dd/yyyy");
console.log(tomorrow);

let lastWeek = sub(new Date(), {
  weeks: 1,
});
lastWeek = format(lastWeek, "MM/dd/yyyy");
console.log(lastWeek);

//create the start of next month by subtracting 1 month. this does not work....
let lastMonth = sub(new Date(), {
  months: 1,
});
lastMonth = format(lastMonth, "MM/dd/yyyy");
console.log(lastMonth);

let nextMonth = add(new Date(), {
  months: 1,
});
let startNextMonth = startOfMonth(nextMonth);
startNextMonth = format(startNextMonth, "MM/dd/yyyy");
console.log(startNextMonth);

// 6. Find the start of the day and the end of the month
let startToday = startOfDay(new Date());
console.log(startToday);

let endMonth = endOfMonth(new Date());
endMonth = format(endMonth, "MM/dd/yyyy");
console.log(endMonth);

// 7. Find the difference between 01/01/2018 and now in days and years
function differenceInDaysAndYears(date1, date2) {
  const differenceYears = Math.abs(differenceInYears(date1, date2));
  const differenceDays = Math.abs(differenceInDays(date1, date2)) % 365;
  return `There are ${differenceYears} years and ${differenceDays} days between these two dates.`;
}

console.log(differenceInDaysAndYears(new Date("01/01/2018"), new Date()));

// 8. Create 2 dates and show whether they are the same month or not
//THIS ONLY WORKS FOR ALSO SAME YEAR, COULDN'T FIND A METHOD FOR ONLY MONTH
let result = isSameMonth(new Date(2024, 8, 2), new Date(2024, 8, 15));
console.log(result);
result = isSameMonth(new Date(2024, 10, 2), new Date(2024, 8, 15));
console.log(result);

// 9. Create a date and show whether it is this month
result = isSameMonth(new Date(2024, 10, 2), new Date());
console.log(result);

// 10. Find the last day of the decade
let endDecade = endOfDecade(new Date());
endDecade = format(endDecade, "MM/dd/yyyy");
console.log(endDecade);

// 11. Using 'distance', show how many days are left until xmas
//  WHY DOES IT GIVE 8 MONTS,
const toXmas = formatDistanceToNowStrict(new Date(2024, 11, 25), {
  addSuffix: true,
});
console.log(toXmas);

// 12. Show whether this date is valid
const valid = isValid(new Date());
console.log(valid);
