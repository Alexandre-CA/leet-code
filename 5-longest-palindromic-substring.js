/**
  5. Longest Palindromic Substring

    Given a string s, return the longest palindromic substring in s.

 */

const longestPalindrome = function (s) {
  if (!s || s.length < 1) return "";

    let start = 0, end = 0;

    function expandAroundCenter(left, right) {
        while (left >= 0 && right < s.length && s[left] === s[right]) {
            left--;
            right++;
        }
        return [left + 1, right - 1];
    }

    for (let i = 0; i < s.length; i++) {
        let [l1, r1] = expandAroundCenter(i, i);
        let [l2, r2] = expandAroundCenter(i, i + 1);
        if (r1 - l1 > end - start) {
            start = l1;
            end = r1;
        }
        if (r2 - l2 > end - start) {
            start = l2;
            end = r2;
        }
    }

    return s.substring(start, end + 1)
};

let s_1 = "babad";
console.log("Example 1: ", longestPalindrome(s_1));
// Output: "bab"

// let s_2 = "cbbd";
// console.log("Example 2: ", longestPalindrome(s_2));
// // Output: "bb

// let s_3 = "ccc";
// console.log("Example 3: ", longestPalindrome(s_3));
// // Output: "bb

// let s_4 = "aacabdkacaa";
// console.log("Example 4: ", longestPalindrome(s_4));
// // Output: "aca

// let s_5 = "cbbd";
// console.log("Example 5: ", longestPalindrome(s_5));
// // Output: "bb

// let s_6 = "abcba";
// console.log("Example 6: ", longestPalindrome(s_6));
// // Output: "abcba"
