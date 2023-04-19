function decoder(code) {
  let decode = "";
  let skip = 0;

  for (let i = 0; i < code.length; i += skip) {
    const num = parseInt(code[i]);

    if (!isNaN(num)) {
      skip = num + 1;
    } else {
      decode += code[i];
      skip = 1;
    }
  }

  return decode;
}

let decoded = decoder("2bna0p1mp2osl0e");
console.log(decoded);
