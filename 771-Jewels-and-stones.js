/*
https://leetcode.com/problems/jewels-and-stones
Difficulty: Easy

You're given strings J representing the types of stones that are jewels, and S representing the stones you have.
Each character in S is a type of stone you have.  You want to know how many of the stones you have are also jewels.
The letters in J are guaranteed distinct, and all characters in J and S are letters.
Letters are case sensitive, so "a" is considered a different type of stone from "A".

Example 1:
Input: J = "aA", S = "aAAbbbb"
Output: 3

Example 2:
Input: J = "z", S = "ZZ"
Output: 0
Note:

S and J will consist of letters and have length at most 50.
The characters in J are distinct.
*/

/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */

// Brute force
// TC: O(JS) SC: O(1)
const numJewelsInStones = function(J, S) {
  let res = 0
  for (let j = 0; j < J.length; j++) {
    for(let s = 0; s < S.length; s++) {
      if (J[j] === S[s]) res++
    }
  }
  return res
};

// Use map to look up
// TC: O(J+S) SC: O(J)
const numJewelsInStones2 = function(J, S) {
  let res = 0
  let map = {}
  for (let j = 0; j < J.length; j++) {
    map[J[j]] = "anything"
  }
  for (let s = 0; s < S.length; s++) {
    if (S[s] in map) res++
  }
  return res
};

const J = "aA", S = "aAAbbbb"
console.log(numJewelsInStones(J, S))
console.log(numJewelsInStones2(J, S))
