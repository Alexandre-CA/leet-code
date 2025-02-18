/**

6. Zigzag Conversion

The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)

P   A   H   N
A P L S I I G
Y   I   R
And then read line by line: "PAHNAPLSIIGYIR"
Write the code that will take a string and make this conversion given a number of rows:
 
 */



const convert = function (s, numRows) {

    if (numRows === 1 || numRows >= s.length) {
        return s;
    }

    const result_array = Array(numRows).fill('');
    let inverse = false
    let count_deline = 0;

    for(let char of s){
        result_array[count_deline] += char

        count_deline = inverse ? count_deline - 1 : count_deline + 1;

        if (inverse ? count_deline === 0 : count_deline === numRows - 1) {
            inverse = !inverse;
        }
    }

    return result_array.join('');
};

// Example 01
const s_1 = "PAYPALISHIRING";
const numRows_1 = 3;
const output_1 = "PAHNAPLSIIGYIR"
const result_1 = convert(s_1, numRows_1)
console.log(`Example 01 : ${result_1} == ${output_1}  // ${result_1 === output_1}\n`);

// Example 02
const s_2 = "PAYPALISHIRING";
const numRows_2 = 4;
const output_2 = "PINALSIGYAHRPI"
const result_2 = convert(s_2, numRows_2)
console.log(`Example 02 : ${result_2} == ${output_2}  // ${result_2 === output_2}\n`);

// Example 03
const s_3 = "A";
const numRows_3 = 1;
const output_3 = "A"
const result_3 = convert(s_3, numRows_3)
console.log(`Example 03 : ${result_3} == ${output_3}  // ${result_3 === output_3}\n`);


// Example 04
const s_4 = "AB";
const numRows_4 = 1;
const output_4 = "AB"
const result_4 = convert(s_4, numRows_4)
console.log(`Example 04 : ${result_4} == ${output_4}  // ${result_4 === output_4}\n`);