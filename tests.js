function isSquare(n) {
  let pow = 0;
  let i = 2;

  while (pow < n) {
    pow = i ** 2;
    if (pow === n) return true;
    i++;
  }

  return false;
}


//aprenda a fazer deep cloning, animal!!!
function rotate(matrix) {
  const copy = matrix.map((arr) => [...arr]);

  copy.forEach((arr, i) => {
    arr.forEach((n, i2) => matrix[i][i2] = copy[arr.length - 1 - i2][i]);
  });
}
// rotate([[1, 2, 3], [4, 5, 6], [7, 8, 9]])


const groupAnagrams = (strs) => {
  const hash = {}
  const codeBase = 'a'.charCodeAt();

  strs.forEach((str) => {
    const count = new Array(26).fill(0);

    for (const c of str) count[c.charCodeAt() - codeBase]++;
    hash[count] ? hash[count].push(str) : hash[count] = [str];
  });
  
  return Object.values(hash);
};

// console.log(groupAnagrams(["eat","tea","tan","ate","nat","bat"]));

const spiralOrder = (matrix) => {
  const result = [];

  while (matrix.length) {
    result.push(
      ...matrix.shift(),
      ...matrix.map((arr) => arr.pop()),
      ...(matrix.pop() ?? []).reverse(),
      ...matrix.map((arr) => arr.shift()).reverse(),
      );
  }

  return result.filter(n => Number.isInteger(n));
};

// console.log(spiralOrder(
//   [[1,2,3],[4,5,6],[7,8,9]]))


console.log('' ?? 'foi');
console.log('a' ?? 'foi');
console.log(NaN ?? 'foi');
console.log([] ?? 'foi');
console.log([undefined] ?? 'foi');
console.log({} ?? 'foi');
console.log(false ?? 'foi');
console.log(true + true ?? 'foi');
console.log(false +  false ?? 'foi');
console.log(null ?? 'foi');
console.log(undefined ?? 'foi');
console.log([2].pop() ?? 'foi');
console.log([].pop() ?? 'foi');
console.log([].slice(2) ?? 'foi');
console.log([].shift() ?? 'foi');
console.log([].splice(2) ?? 'foi');
