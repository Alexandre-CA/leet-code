/**
 8. String to Integer

Implement the myAtoi(string s) function, which converts a string to a 32-bit signed integer.

The algorithm for myAtoi(string s) is as follows:

    1.Whitespace: Ignore any leading whitespace (" ").
    2.Signedness: Determine the sign by checking if the next character is '-' or '+', assuming positivity if neither present.
    3.Conversion: Read the integer by skipping leading zeros until a non-digit character is encountered or the end of the string is reached. If no digits were read, then the result is 0.
    4.Rounding: If the integer is out of the 32-bit signed integer range [-231, 231 - 1], then round the integer to remain in the range. Specifically, integers less than -231 should be rounded to -231, and integers greater than 231 - 1 should be rounded to 231 - 1.
Return the integer as the final result.
 */

const myAtoi = function (s) {
    let index = 0
    if (parseInt(s) > (2 ** 31) - 1) return (2 ** 31) - 1
    if (parseInt(s) < -(2 ** 31)) return -(2 ** 31)

    while (s[index] == " ") {
        index++
    }
    let final_output = ""
    if (s[index] == "-" || s[index] == "+") {
        final_output = `${s[index]}0`
        index++
    } else {
        final_output = "0"
    }
    while (s[index] && !isNaN(s[index])) {
        final_output += s[index]
        index++
    }
    return parseInt(final_output)
};



//Example 1:
const s_1 = "42";
const output_1 = 42
const result_1 = myAtoi(s_1);
console.log(`Example 01: ${s_1} === ${result_1} // ${result_1 === output_1}`)


//Example 2:
const s_2 = "    -042";
const output_2 = -42
const result_2 = myAtoi(s_2);
console.log(`Example 02: ${s_2} === ${result_2} // ${result_2 === output_2}`)


//Example 3:
const s_3 = "1337c0d3";
const output_3 = 1337
const result_3 = myAtoi(s_3);
console.log(`Example 03: ${s_3} === ${result_3} // ${result_3 === output_3}`)

//Example 4:
const s_4 = "0-1";
const output_4 = 0
const result_4 = myAtoi(s_4);
console.log(`Example 04: ${s_4} === ${result_4} // ${result_4 === output_4}`)

//Example 5:
const s_5 = "words and 987";
const output_5 = 0
const result_5 = myAtoi(s_5);
console.log(`Example 05: ${s_5} === ${result_5} // ${result_5 == output_5}`)

