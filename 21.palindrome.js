function palindrome(str) {
  let l = 0;
  let r = str.length - 1;

  while (l < r) {
    while (l < str.length && !str[l].match(/[a-z0-9]/i)) l++;
    while (r >= 0 && !str[r].match(/[a-z0-9]/i)) r--;

    if (l === r) return true; // two pointers meet, odd-length
    if (l > r) return true; // two pointers passed, even-length

    if (str[l].toLowerCase() !== str[r].toLowerCase()) return false; // different chars
    l++;
    r--;
  }

  return true; // two pointers passed, even-length
}

console.log(palindrome('tact Cat'));                          // true
console.log(palindrome('t-+0a   c___c A0t'));                 // true
console.log(palindrome('t123acca321t'));                      // true
console.log(palindrome('t1__2+-3*acc [a])32 ####$1t!@#@!#')); // true
console.log(palindrome('t123acca3214t'));                     // false
console.log(palindrome('!&#@(!&$    ___!@#&,..,<><[}}{]'));   // true

function palindromeRecursive(str) {
  if (str.length < 2) return true;

  let l = 0;
  let r = str.length - 1;
  while (l < str.length && !str[l].match(/[a-z0-9]/i)) l++;
  while (r >= 0 && !str[r].match(/[a-z0-9]/i)) r--;

  if (l === r) return true;
  if (l > r) return true;
  if (str[l].toLowerCase() !== str[r].toLowerCase()) return false;

  return palindromeRecursive(str.slice(l + 1, r));
}

console.log(palindromeRecursive('tact Cat'));                          // true
console.log(palindromeRecursive('t-+0a   c___c A0t'));                 // true
console.log(palindromeRecursive('t123acca321t'));                      // true
console.log(palindromeRecursive('t1__2+-3*acc [a])32 ####$1t!@#@!#')); // true
console.log(palindromeRecursive('t123acca3214t'));                     // false
console.log(palindromeRecursive('!&#@(!&$    ___!@#&,..,<><[}}{]'));   // true
