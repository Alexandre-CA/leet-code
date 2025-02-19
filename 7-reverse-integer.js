/**

7. Reverse Integer

Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

 */


/**
 * !Explanation:
 * 1. Convert the number to absolute number.
 * 2. Convert the absolute number to string and then to array.
 * 3. Reverse the array.
 * 4. Join the array and convert it to number.
 * 5. Check if the number is greater than 2147483648 (32-bits) then return 0.
 * 6. Return the number with the sign.
 */
const reverse = function (x) {
    const reversed = parseInt(Math.abs(x).toString().split('').reverse().join(''));
    if (reversed > 2147483648) {
        return 0;
    }
    return x < 0 ? -reversed : reversed;
};


// Example 1:
const x_1 = 123;
const output_1 = 321;
const result_1 = reverse(x_1);
console.log(`Example 1: ${result_1} == ${output_1} // ${result_1 === output_1}`);



// Example 2:
const x_2 = -123;
const output_2 = -321;
const result_2 = reverse(x_2);
console.log(`Example 2: ${result_2} == ${output_2} // ${result_2 === output_2}`);

// Example 3:
const x_3 = 120;
const output_3 = 21;
const result_3 = reverse(x_3);
console.log(`Example 3: ${result_3} == ${output_3} // ${result_3 === output_3}`);

// Example 4:
const x_4 = 1534236469;
const output_4 = 0;
const result_4 = reverse(x_4);
console.log(`Example 4: ${result_4} == ${output_4} // ${result_4 === output_4}`);
