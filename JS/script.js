// // 1-chi

// const number = "34567";
// function Num(num) {
//   let sum = num.split("");
//   return sum.reverse();
// }

// console.log(Num(number));

// // 2-chi

// const numbers = [1, 2, 3, 4, 5];
// function twiceAsMuch(nums) {
//   const numbers = nums.map((num) => num * 2);
//   return numbers;
// }
// console.log(twiceAsMuch(numbers));

// // 3-chi

// let num = [10, 20, 30, 40, 50];
// function eLIndex(array, element) {
//   let index = array.indexOf(element);
//   if (index === -1) {
//     return -1;
//   } else {
//     return index;
//   }
// }
// console.log(eLIndex(num, 40));

// // 4-chi

// let numbers = [9, 20, 35, 40, 55, 65, 90, 105];
// function evenAndOdd(arr) {
//   const all = { even: [], Odd: [] };
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 === 0) {
//       all.even.push(arr[i]);
//     } else {
//       all.Odd.push(arr[i]);
//     }
//   }
//   return all;
// }
// console.log(evenAndOdd(numbers));

// 5-chi

// function deletee(word) {
//   let finished = "";
//   for (let i = 0; i < word.length; i++) {
//     if (word[i] !== "!") {
//       finished = finished + word[i];
//     }
//   }
//   return finished;
// }
// console.log(deletee("Salom Dunyo ! Hello World !"));

// // 6-chi

// const first = [1000, 26543, 23541];
// const second = [2423, 14215, 641];

// function sum(array, array2) {
//   let result = array.concat(array2);
//   result = result.reduce((a, b) => {
//     return a + b;
//   }, 0);
//   return result;
// }
// console.log(sum(first, second));//////////////////

// // 7-chi masala
// const words = "Asadbek Umarov";
// function firsTandLast(arr) {
//   let empty = "";
//   for (let i = 0; i < arr.length; i++) {
//     if (i === 0) {
//       empty = empty + "";
//     } else if (i === arr.length - 1) {
//       empty = empty + "";
//     } else {
//       empty = empty + arr[i];
//     }
//   }
//   return empty;
// }
// console.log(firsTandLast(words));/////////////

// 8-chi

// let myArray = [1, 2, 3, 4, 5];
// function reverseArray(arr) {
//   let reversedArr = [];
//   for (let i = arr.length - 1; i >= 0; i--) {
//     reversedArr.push(arr[i]);
//   }
//   return reversedArr;
// }

// let reversed = reverseArray(myArray);
// console.log(reversed);//////////////////

// 9-chi

// const num = "My number +998-94-901-12-020";
// function deleteZero(str) {
//   if (str % 10 == 0) {
//     let javob = str / 10;
//     return javob;
//   } else {
//     return str;
//   }
// }
// console.log(deleteZero(num)); ////////////////////////////////////

// const str = "My number +998-94-901-12-020";
// function deleteZero(str) {
//   let newStr = str;
//   for (; newStr.endsWith("0"); newStr = newStr.slice(0, -1)) {}
//   return newStr;
// }
// const result = deleteZero(str);
// console.log(result);

// 10-chi

// const numbers = [22, 58, 45, 44];
// function findSmallestPower(arr) {
//   let smallest = arr[0];
//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i] < smallest) {
//       smallest = arr[i];
//     }
//   }
//   const powerOfFour = Math.pow(smallest, 4);
//   return powerOfFour.toString();
// }
// console.log(findSmallestPower(numbers));
