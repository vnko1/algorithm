const numbers = [5, 3, 8, 4, 2];

//* Bubble Sorting

// function bubbleSort(arr) {
//   const cArr = [...arr];
//   const n = cArr.length;

//   for (let i = 0; i < n - 1; i++) {
//     for (let j = 0; j < n - i - 1; j++) {
//       if (cArr[j] > cArr[j + 1]) {
//         // const temp = cArr[j];
//         // cArr[j] = cArr[j + 1];
//         // cArr[j + 1] = temp;
//         [cArr[j], cArr[j + 1]] = [cArr[j + 1], cArr[j]];
//       }
//     }
//   }
//   return cArr;
// }

// console.log(bubbleSort(numbers));

//* Insertion sorting

// function insertSort(arr) {
//   const cArr = [...arr];
//   const n = cArr.length;
//   for (let i = 0; i < n; i++) {
//     let key = cArr[i];
//     let j = i - 1;

//     while (j >= 0 && key < arr[j]) {
//       cArr[j + 1] = cArr[j];
//       j -= 1;
//     }

//     cArr[j + 1] = key;
//   }
//   return cArr;
// }

// console.log(insertSort(numbers));

// * Selection sort
// function selectionSort(arr) {
//   const cArr = [...arr];
//   const n = cArr.length;
//   for (let i = 0; i < n; i++) {
//     let minIdx = i;

//     for (let j = i + 1; j < n; j++) {
//       if (cArr[j] < cArr[minIdx]) {
//         minIdx = j;
//       }
//     }
//     [cArr[i], cArr[minIdx]] = [cArr[minIdx], cArr[i]];
//   }
//   return cArr;
// }

// console.log(selectionSort(numbers));

// * Quick sort
// function quickSort(arr) {
//   const cArr = [...arr];
//   if (arr.length <= 1) return cArr;

//   const pivot = arr[Math.floor(arr.length / 2)];
//   const left = arr.filter((x) => x < pivot);
//   const middle = arr.filter((x) => x === pivot);
//   const right = arr.filter((x) => x > pivot);

//   return [...quickSort(left), ...middle, ...quickSort(right)];
// }

// console.log(quickSort(numbers));
