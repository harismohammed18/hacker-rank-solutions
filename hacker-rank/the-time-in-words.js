/*
 * Complete the 'timeInWords' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts following parameters:
 *  1. INTEGER h
 *  2. INTEGER m
 */

function timeInWords2(h, m) {
  const lessThanTwenty = [
    "",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
    "ten",
    "eleven",
    "twelve",
    "thirteen",
    "fourteen",
    "fifteen",
    "sixteen",
    "seventeen",
    "eighteen",
    "nineteen",
  ];
  const greaterTwenty = [
    "",
    "",
    "twenty",
    "thirty",
    "forty",
    "fifty",
    "sixty",
    "seventy",
    "eighty",
    "ninety",
  ];
  const suffixSpecial = {
    15: "quarter",
    30: "half",
  };

  const getTimeInEnglish = (number) => {
    if (number <= 19) {
      return lessThanTwenty[number];
    }
    const one = number % 10;
    const ten = Math.floor(number / 10);
    return `${greaterTwenty[ten]} ${lessThanTwenty[one]}`;
  };
  const getMinute = (minute) => {
    if (suffixSpecial[minute]) {
      return `${suffixSpecial[minute]}`;
    }
    return `${getTimeInEnglish(minute)} ${minute > 1 ? "minutes" : "minute"}`;
  };
  if (m == 0) {
    if (h <= 19) {
      return `${lessThanTwenty[h]} o' clock`;
    } else {
      return `${getTimeInEnglish(h)} o' clock`;
    }
  }
  if (m <= 30) {
    return `${getMinute(m)} past ${getTimeInEnglish(h)}`;
  } else {
    return `${getMinute(60 - m)} to ${getTimeInEnglish(h + 1)}`;
  }
}
function timeInWords(h, m) {
  const words = [
    "",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
    "ten",
    "eleven",
    "twelve",
    "thirteen",
    "fourteen",
    "fifteen",
    "sixteen",
    "seventeen",
    "eightteen",
    "nineteen",
    "twenty",
    "twenty one",
    "twenty two",
    "twenty three",
    "twenty four",
    "twenty five",
    "twenty six",
    "twenty seven",
    "twenty eight",
    "twenty nine",
  ];
  const suffixSpecial = {
    15: "quarter",
    30: "half",
    45: "quarter",
  };
  if (m === 0) {
    return `${words[h]} o' clock`;
  }
  if (suffixSpecial[m]) {
    return `${suffixSpecial[m]} ${m <= 30 ? "past" : "to"} ${
      m <= 30 ? words[h] : words[h + 1]
    } `;
  }
  return `${m <= 30 ? words[m] : words[60 - m]} minute${m > 1 ? "s" : ""} ${
    m <= 30 ? "past" : "to"
  } ${m <= 30 ? words[h] : words[h + 1]}`;
}

for (let hour = 1; hour < 2; hour++) {
  for (let minute = 1; minute <= 60; minute++) {
    console.log(timeInWords(hour, minute));
  }
}
