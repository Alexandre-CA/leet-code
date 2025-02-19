/**

1. Two Sum

Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

 * */

/**
 *! Explanation:
  * 1. Create a variable to store the values already seen.
  * 2. Loop through the nums array.
  * 3. Create a variable to store the target to goes. ( To verify if the target_to_goes is in the values_prev array).
  * 4. If the target_to_goes is in the values_prev array, return the index of the target_to_goes and the current index.
  * 5. Else add the current value to the values_prev array.
  * 6. Return the values_prev array.
 */

function twoSum(nums, target) {
  let values_prev = [];

  for (let index = 0; index < nums.length; index++) {
    const target_to_goes = target - nums[index];
    if (values_prev.includes(target_to_goes)) {
      return [values_prev.indexOf(target_to_goes), index];
    }
    values_prev.push(nums[index]);
  }
}

const test_01_nums = [2, 7, 11, 15];
const test_01_target = 9;
// Output: [0,1]

console.log("Teste 01:", twoSum(test_01_nums, test_01_target));

const test_02_nums = [3, 2, 4];
const test_02_target = 6;
// Output: [1,2]

console.log("Teste 02:", twoSum(test_02_nums, test_02_target));

const test_03_nums = [3, 3];
const test_03_target = 6;
// Output: [0,1]

console.log("Teste 03:", twoSum(test_03_nums, test_03_target));
