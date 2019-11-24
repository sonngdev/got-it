function reversedNumber(num) {
  let log = Math.floor(Math.log(num) / Math.LN10);
  let rev = 0;

  for (let i = 0; i <= log; i++) {
    exp = Math.pow(10, i);
    const digit = Math.floor(((num % (exp * 10)) / exp));
    rev += digit * Math.pow(10, log - i);
  }

  return rev;
}

console.log(reversedNumber(1234));  // 4321
console.log(reversedNumber(10523)); // 32501
console.log(reversedNumber(8));     // 8
console.log(reversedNumber(1230));  // 321
