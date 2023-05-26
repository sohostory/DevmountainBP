// There’s a game, “takeaway”, that is played by two players, using a number of stones.

//The first player goes first. She can take 2, 3, or 5 stones from the pool. The second player goes next; she can also remove 2, 3, or 5 stones. The first player then goes, and so on.

//If a player is unable to move (there are fewer than 2 stones), they lose

const canWin = (stoneCount) => {
  if (stoneCount < 2) {
    return false;
  } else if (stoneCount === 2 || stoneCount === 3 || stoneCount === 5) {
    return true;
  } else {
    return (
      !canWin(stoneCount - 2) ||
      !canWin(stoneCount - 3) ||
      !canWin(stoneCount - 5)
    );
  }
};

console.log(canWin(10));
