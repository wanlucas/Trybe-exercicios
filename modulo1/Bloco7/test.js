// const values = {
//   2: 'abc', 3: 'def', 4: 'ghi',
//   5: 'jkl', 6: 'mno', 7: 'pqr',
//   8: 'tuv', 9: 'wxyz',
// }

// const generateCombinations = (d, c, str, i) => {
//   if (i === d.length) return c.push(str);

//   for (let i2 = 0; i2 < values[d].length; i2++) {
//     const value = values[d[i]][i2];

//     generateCombinations(d, c, str + value, i + 1);
//   }
// }

// const letterCombinations = (digits) => {
//   const combinations = [];

//   generateCombinations(digits, combinations, '', 0);

//   return combinations;
// };

// function addChar(digits, combinations, str) {
//   if (!digits.length) return combinations.push(str);

//   for (const digit of digits) {
//     const newDigits = digits.filter((c) => c != digit);
//     addChar(newDigits, combinations, str + digit);
//   }
// }

// function generateAllCombinations(digits) {
//   const combinations = [];

//   addChar(digits.split(''), combinations, '', 0);

//   return combinations;
// }

// function generateParenthesis(n) {
//   const combinations = [];
//   const generateCombinations = (n, c, str, l, r) => {
//     if (str.length === n * 2) return c.push(str);

//     if (l > r) generateCombinations(n, c, str + ')', l, r + 1);
//     if (l < n) generateCombinations(n, c, str + '(', l + 1, r);
//   }

//   generateCombinations(n, combinations, "", 0, 0);

//   return combinations;
// };

// console.log(generateParenthesis(4));



// function combinationSum(candidates, target) {
//   const combinations = [];
//   const addSum = (c, nums, total, index) => {
//     if (total === target) combinations.push(nums);
//     else {
//       for (let i = index; i < c.length; i++) {
//         if (total + c[i] <= target) {
//           addSum(c, nums.concat(c[i]), total + c[i], i);
//         };
//       };
//     }
//   }

//   addSum(candidates, [], 0, 0);

//   return combinations;
// };

// const minDominoRotations = (tops, bottoms) => {
//   for (const side of [tops, bottoms]) {
//     console.log(side);
//   }
// }

// const permute = (nums) => {
//   const result = [];
//   const addNumber = (c) => {
//     if (c.length === nums.length) return result.push(c);
    
//     for (const digit of nums) {
//       !c.includes(digit) && addNumber(c.concat(digit));
//     }
//   };
//   addNumber([]);
  
//   return result;
// };

function permute(nums) {
  const result = [];
  const addNumber = (c, remaining) => {
    if (c.length === nums.length) return result.push(c);
    
    for (const digit of remaining) {
      const newRemaining = remaining.filter((num) => num != digit); 

      addNumber(c.concat(digit), newRemaining);
    }
  };
  
  addNumber([], nums);
  
  return result;
};

console.log(permute([1,2,3,4]))