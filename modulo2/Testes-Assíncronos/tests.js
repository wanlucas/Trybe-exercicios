// callbacks assíncronos

const sum = (a, b, callBack) => {
  setTimeout(() => {
    const res = a + b;

    callBack(res);
  }, 2000);
};

const printSum = (a, b) => {
  sum(a, b, (output) => console.log(`The sum is ${output}`));
};

printSum(100, 300);