// function guessGifts(wishlist, presents) {
//   const giftGuess = [];
//   presents.forEach((present) => {
//     wishlist.forEach((wish) => {
//       if (
//         present.size === wish.size &&
//         present.clatters === wish.clatters &&
//         present.weight === wish.weight
//       ) {
//         giftGuess.push(wish.name);
//       }
//     });
//   });
//   console.log(giftGuess);
// }

function guessGifts(wishlist, presents) {
  const giftGuess = wishlist
    .filter((wish) => {
      return presents.some((present) => {
        return (
          present.size === wish.size &&
          present.clatters === wish.clatters &&
          present.weight === wish.weight
        );
      });
    })
    .map((wish) => {
      return wish.name;
    });

  console.log(giftGuess);
}

var wishlist = [
  { name: "Mini Puzzle", size: "small", clatters: "yes", weight: "light" },
  { name: "Toy Car", size: "medium", clatters: "a bit", weight: "medium" },
  { name: "Card Game", size: "small", clatters: "no", weight: "light" },
];

var presents = [
  { size: "medium", clatters: "a bit", weight: "medium" },
  { size: "small", clatters: "yes", weight: "light" },
];

guessGifts(wishlist, presents); // must return ["Toy Car", "Mini Puzzle"]
