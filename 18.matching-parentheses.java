import java.util.*;

class MatchingParentheseMain {
  public static boolean matchingParenthese(String str) {
    Map<Character, Character> matches = new HashMap<Character, Character>();
    matches.put('(', ')');
    matches.put('[', ']');
    matches.put('{', '}');

    Stack<Character> openings = new Stack<Character>();
    char[] chars = str.toCharArray();

    for (char c : chars) {
      if (matches.containsKey(c)) {
        openings.push(c);
      } else if (matches.containsValue(c)) {
        if (openings.isEmpty()) return false;
        if (matches.get(openings.pop()) != c) return false;
      }
    }

    return openings.isEmpty();
  }

  public static void main(String[] args) {
    System.out.println(matchingParenthese("[]({})[()][[[[]]]]"));  // true
    System.out.println(matchingParenthese("[]({})[()][[[[]]]]]")); // false
    System.out.println(matchingParenthese("[]({})[(])[[[[]]]]"));  // false
  }
}
