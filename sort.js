//* Bubble Sorting

// function bubbleSorting(arr) {
//   const n = arr.length;

//   for (let i = 0; i < n - 1; i++) {
//     for (let j = 0; j < n - i - 1; j++) {
//       if (arr[j] < arr[j + 1]) {
//         // const temp = arr[j];
//         // arr[j] = arr[j + 1];
//         // arr[j + 1] = temp;
//         [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
//       }
//     }
//   }
//   return arr;
// }

// const numbers = [5, 3, 8, 4, 2];

// console.log(bubbleSorting(numbers));

//* Insertion sorting

function insertSorting(arr) {
  const n = arr.length;
  for (let i = 0; i < n; i++) {
    let key = arr[i]; // 1=3
    let j = i - 1; // 1=0

    while (j >= 0 && key < arr[j]) {
      arr[j + 1] = arr[j];
      j -= 1;
    }

    arr[j + 1] = key;
  }
}

const numbers = [5, 3, 8, 4, 2];
insertSorting(numbers);
console.log(numbers);
