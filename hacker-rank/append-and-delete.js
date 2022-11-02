/*
 * Complete the 'appendAndDelete' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts following parameters:
 *  1. STRING s
 *  2. STRING t
 *  3. INTEGER k
 */

function appendAndDelete(s = "", t = "", k) {
  if (s.length + t.length <= k) return "Yes";

  let commonLength = 0;
  for (let i = 0; i < Math.min(s.length, t.length); i++) {
    if (t.charAt(i) == s.charAt(i)) commonLength++;
    else {
      break;
    }
  }
  let balance = s.length() - commonLength;
  balance += t.length() - commonLength;

  if (balance <= k) {
    if ((balance - k) % 2 == 0) {
      return "Yes";
    }
  }
  return "No";
}
