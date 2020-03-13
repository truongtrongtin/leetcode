/*
https://leetcode.com/problems/two-sum/
Difficulty: Easy

Given an array of integers, return indices of the two numbers such that they add up to a specific target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

Example:

Given nums = [2, 7, 11, 15], target = 9,

Because nums[0] + nums[1] = 2 + 7 = 9,
return [0, 1].
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// Naive brute force
// TC: O(n^2) SC: O(1)
const twoSum = function(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] == target) {
        return [i, j]
      }
    }
  }
};

// Use map (object)
// TC: O(n) SC: O(n)
const twoSum2 = function(nums, target) {
  const map = {}
  for (let i = 0; i < nums.length; i++) {
    const another = target - nums[i]
    if (another in map) {
      return [map[another], i]
    }
    map[nums[i]] = i
  }
}

const nums = [2, 7, 11, 15]
const target = 26

console.log("twoSum", twoSum(nums, target))
console.log("twoSum2", twoSum2(nums, target))
