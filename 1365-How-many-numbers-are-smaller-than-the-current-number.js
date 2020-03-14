/*
https://leetcode.com/problems/how-many-numbers-are-smaller-than-the-current-number/
Difficulty: Easy

Given the array nums, for each nums[i] find out how many numbers in the array are smaller than it.
That is, for each nums[i] you have to count the number of valid j's such that j != i and nums[j] < nums[i].
Return the answer in an array.

Example:
Input: nums = [8,1,2,2,3]
Output: [4,0,1,1,3]
Explanation:
For nums[0]=8 there exist four smaller numbers than it (1, 2, 2 and 3).
For nums[1]=1 does not exist any smaller number than it.
For nums[2]=2 there exist one smaller number than it (1).
For nums[3]=2 there exist one smaller number than it (1).
For nums[4]=3 there exist three smaller numbers than it (1, 2 and 2).

Constraints:
2 <= nums.length <= 500
0 <= nums[i] <= 100
*/

/**
 * @param {number[]} nums
 * @return {number[]}
 */

// Brute force solution
// TC: O(n^2) SC: O(n)
const smallerNumbersThanCurrent = function(nums) {
  let res = Array(nums.length).fill(0)
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (nums[j] < nums[i]) {
        res[i]++
      }
    }
  }
  return res
};

// Idea: counting sort
// TC: O(n + max) SC: O(n + max)
const smallerNumbersThanCurrent2 = function(nums) {
  let max = Math.max(...nums)
  let count = Array(max + 1).fill(0)
  let res = Array(nums.length).fill(0)

  for (let i = 0; i < nums.length; i++) {
    count[nums[i]]++;
  }
  // => count = [0, 1, 2, 1, 0, 0, 0, 0, 1]

  for (let i = 1 ; i <= max; i++) {
    count[i] += count[i-1];
  }
  // => count = [0, 1, 3, 4, 4, 4, 4, 4, 5]

  // This step is different from counting sort algorithm
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      res[i] = 0
    } else {
      res[i] = count[nums[i] - 1];
    }
  }
  // => res = [4, 0, 1, 1, 3]

  return res;
};

console.log(smallerNumbersThanCurrent([8,1,2,2,3]))
console.log(smallerNumbersThanCurrent2([8,1,2,2,3]))
