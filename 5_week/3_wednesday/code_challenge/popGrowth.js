function nbYear(start, percent, yearly, finish) {
  let yearCount = 0;
  while (start < finish) {
    yearCount++;
    start += start * (percent * 0.01) + yearly;
  }
  return yearCount;
}

console.log(nbYear(1500000, 2.5, 10000, 2000000));
