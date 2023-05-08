function buildTower(floors) {
  const star = "*";
  const blank = " ";
  for (let i = 1; i <= floors; i++) {
    stars = star.repeat(i * 2 - 1);
    blanks = blank.repeat(floors - i);
    console.log(`${blanks}${stars}${blanks}`);
  }
}

buildTower(10);
