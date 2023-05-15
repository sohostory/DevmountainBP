function timeWord(time) {
  const ones = [
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
  const tens = ["", "", "twenty", "thirty", "forty", "fifty"];

  const hours = parseInt(time.slice(0, 2));
  const minutes = parseInt(time.slice(3));
  let timeString = "";

  if (hours === 0 && minutes === 0) {
    timeString = "midnight";
  } else if (hours === 12 && minutes === 0) {
    timeString = "noon";
  } else {
    const ampm = hours < 12 ? "am" : "pm";
    const hourString = hours % 12 === 0 ? ones[12] : ones[hours % 12];

    if (minutes === 0) {
      minuteString = "o'clock";
    } else if (minutes < 20) {
      minuteString = ones[minutes];
    } else {
      `${tens[Math.floor(minutes / 10)]} ${ones[minutes % 10]}`;
    }

    timeString = `${hourString} ${minuteString} ${ampm}`;
  }

  console.log(timeString);
  return timeString;
}

timeWord("00:00"); // "midnight"
timeWord("12:00"); // "noon"
timeWord("01:00"); // "one o'clock am"
timeWord("06:01"); // "six oh one am"
timeWord("06:10"); // "six ten am"
timeWord("06:18"); // "six eighteen am"
timeWord("06:30"); // "six thirty am"
timeWord("10:34"); // "ten thirty four am"
timeWord("00:12"); // "twelve twelve am"
timeWord("12:09"); // "twelve oh nine pm"
timeWord("23:23"); // "eleven twenty three pm"
