/**
 2. Add Two Numbers

You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.
*/


const adder = (l1, l2, carry) => {
  const sum = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + carry;
  const carry_sum = Math.floor(sum / 10);
  const digit = sum % 10;
  const node = new ListNode(digit);
  if (l1?.next || l2?.next || carry_sum) {
    node.next = adder(l1?.next, l2?.next, carry_sum);
  }
  return node;
};
const addTwoNumbers = function (l1, l2) {
  return adder(l1, l2, 0);
};









function ListNode(val, next = null) {
  this.val = val;
  this.next = next;
}

function arrayToList(arr) {
  let dummy = new ListNode(0);
  let current = dummy;
  for (let num of arr) {
    current.next = new ListNode(num);
    current = current.next;
  }
  return dummy.next;
}
//Example 1:

let l1_1 = arrayToList([2, 4, 3]);
let l2_1 = arrayToList([5, 6, 4]);

console.log("Example 01:", addTwoNumbers(l1_1, l2_1));

//Output: [7,0,8]

//Example 2:

let l1_2 = arrayToList([0]);
let l2_2 = arrayToList([0]);

console.log("Example 02:", addTwoNumbers(l1_2, l2_2));

//Output: [0]

//Example 3:

let l1_3 = arrayToList([9, 9, 9, 9, 9, 9, 9]);
let l2_3 = arrayToList([9, 9, 9, 9]);

console.log("Example 03:", addTwoNumbers(l1_3, l2_3));

//Output: [8,9,9,9,0,0,0,1]
