/*
 * Complete the 'palindromeIndex' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts STRING s as parameter.
 */

function palindromeIndex(s = "") {
  const isPalindrome = (str) => {
    for (let i = 0; i < Math.floor(str.length / 2); i++) {
      if (str[i] !== str[str.length - i - 1]) {
        return false;
      }
    }
    return true;
  };

  for (let i = 0; i < Math.floor(s.length / 2); i++) {
    if (s[i] !== s[s.length - i - 1]) {
      const tmp = s.substring(0, i) + s.substring(i + 1);
      if (isPalindrome(tmp)) {
        return i;
      } else {
        return s.length - i - 1;
      }
    }
  }

  return -1;
}
