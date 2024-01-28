function countLength(arr) {
  if (arr.length === 0) {
    return 0;
  }
  return arr[0].length + countLength(arr.slice(1));
}

function getEven(arr) {
  let result = [];
  // Base Case
  console.log(arr);
  if (arr.length === 0) {
    return result;
    // We check if the first element is even
  } else if (arr[0] % 2 === 0) {
    console.log(`The ${arr[0]} number is even and we keep it and concat `);
    return [arr[0]].concat(getEven(arr.slice(1)));
  } else {
    console.log(`The ${arr[0]} number is odd and we remove it`);
    return getEven(arr.slice(1));
  }
}

function triangularNumber(num) {
  if (num === 0) {
    return 0;
  }

  return num + triangularNumber(num - 1);
}

function xIndex(str) {
  if (str.length === 0) {
    throw new Error("No 'x' in the string");
  }

  if (str[0] === "x") {
    return 0;
  }

  return 1 + xIndex(str.slice(1));
}

// console.log(xIndex("abcdefghijklmnxopqrstuvwxyz"));
// expect 10

// function sumArray(arr) {
//   if (arr.length === 0) {
//       return 0;
//   }
//   return arr[0] + sumArray(arr.slice(1));
// }

// function sumArray(arr) {
//   if (arr.length === 0) {
//       return 0;
//   }
//   return arr.pop() + sumArray(arr);
// }

function sumArray(arr) {
  console.log(arr);
  if (arr.length === 0) {
    return 0;
  }
  return arr[0] + sumArray(arr.slice(1));
}

console.log(sumArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
