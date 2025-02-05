/**
 4. Median of Two Sorted Arrays

 Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.

The overall run time complexity should be O(log (m+n)).
 */

const findMedianSortedArrays = function (nums1, nums2) {
  const num1_length = nums1.length;
  const num2_length = nums2.length;
  const median_length = ((num1_length + num2_length) % 2) === 0 ? 2 : 1;
  const to_center = (num1_length + num2_length - median_length) / 2;

  let sum_median = 0;
  let times_sum = 0;
  let i_num01 = 0;
  let i_num02 = 0;
  let last_number = 0;

  while ((i_num01 < num1_length || i_num02 < num2_length) && times_sum < median_length) {
    if (nums1[i_num01] === undefined || (nums2[i_num02] !== undefined && nums1[i_num01] > nums2[i_num02])) {
      last_number = nums2[i_num02];
      i_num02++;
    } else {
      last_number = nums1[i_num01];
      i_num01++;
    }

    if (i_num01 + i_num02 > to_center) {
      sum_median += last_number;
      times_sum++;
    }
  }

  return sum_median / median_length;
};

// Example 1:

let nums1_1 = [1, 3];
let nums2_1 = [2];
console.log("Example 1: ", findMedianSortedArrays(nums1_1, nums2_1));

// Output: 2.00000

// Example 2:

let nums1_2 = [1, 2];
let nums2_2 = [3, 4];
console.log("Example 2: ", findMedianSortedArrays(nums1_2, nums2_2));

// Output: 2.50000


// Example 3:

let nums1_3 = [];
let nums2_3 = [2, 3];
console.log("Example 3: ", findMedianSortedArrays(nums1_3, nums2_3));

// Output: 2.50000


// Example 3:

let nums1_4 = [];
let nums2_4 = [1,2,3,4];
console.log("Example 4: ", findMedianSortedArrays(nums1_4, nums2_4));

// Output: 2.50000
