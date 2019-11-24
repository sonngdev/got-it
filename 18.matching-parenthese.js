function matchingParentheses(str) {
  const matches = {
    '(': ')',
    '[': ']',
    '{': '}',
  };
  const openings = Object.keys(matches);
  const closings = Object.values(matches);

  const stack = [];
  for (const c of str) {
    if (openings.includes(c)) {
      stack.push(c);
    } else if (closings.includes(c)) {
      if (stack.length === 0) return false;
      if (!matches[stack.pop()] === c) return false;
    }
  }

  return stack.length === 0;
}

console.log(matchingParentheses('[]({})[()][[[[]]]]'));  // true
console.log(matchingParentheses('[]({})[()][[[[]]]]]')); // false
console.log(matchingParentheses('[]({})[(])[[[[]]]]]')); // false
