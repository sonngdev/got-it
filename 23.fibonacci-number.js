const fibonacci = [0, 1, 1];

function fibonacciNumber(n) {
  if (fibonacci[n]) return fibonacci[n];

  const num = fibonacciNumber(n - 1) + fibonacciNumber(n - 2);
  fibonacci[n] = num;
  return num;
}

// function fibonacciNumber(n) {
//   if (n === 0) return 0;
//   if (n === 1 || n === 2) return 1;

//   return fibonacciNumber(n - 1) + fibonacciNumber(n - 2);
// }

console.log(fibonacciNumber(200));
