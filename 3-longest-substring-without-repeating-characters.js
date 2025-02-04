/**
* 3. Longest Substring Without Repeating Characters
Given a string s, find the length of the longest
 */

const lengthOfLongestSubstring = function (s) {
    let current = ""
    let longest = ""

    for (let i = 0; i < s.length; i++) {
        const index_included = current.indexOf(s[i])
        current += s[i];
        if (index_included > -1) {
            current = current.slice(index_included + 1, current.length);
        }
        if (current.length > longest.length) {
            longest = current
        }
    }
    return longest.length;
}

// Example 1:

let s_1 = "abcabcbb"
console.log(lengthOfLongestSubstring(s_1))
// Output: 3
// Explanation: The answer is "abc", with the length of 3.


// Example 2:

let s_2 = "bbbbb"
console.log(lengthOfLongestSubstring(s_2))
// Output: 1
// Explanation: The answer is "b", with the length of 1.


// Example 3:

let s_3 = "pwwkew"
console.log(lengthOfLongestSubstring(s_3))
// Output: 3
// Explanation: The answer is "wke", with the length of 3.


// Example 4:

let s_4 = "dvdf"
console.log(lengthOfLongestSubstring(s_4))
// Output: 3