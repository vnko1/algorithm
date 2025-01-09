const numbers = [1, 3, 5, 7, 9, 11];

// * Linear Search

// function linearSearch(arr, x) {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === x) {
//       return i;
//     }
//   }
//   return -1;
// }

// Array.prototype.linearSearch = function (x) {
//   for (let i = 0; i < this.length; i++) {
//     if (this[i] === x) {
//       return i;
//     }
//   }

//   return -1;
// };

// console.log(numbers.linearSearch(5)); // 2

// * Binary Search

// function binarySearch(arr, x) {
//   let start = 0;
//   let end = arr.length - 1;
//   let mid = 0;

//   while (start <= end) {
//     mid = Math.floor((start + end) / 2);

//     if (arr[mid] < x) {
//       start = mid + 1;
//     } else if (arr[mid] > x) {
//       end = mid - 1;
//     } else {
//       return mid;
//     }
//   }

//   return -1;
// }

// console.log(binarySearch(numbers, 5)); // 2

// * Interpolation Search

// function interpolationSearch(arr, x) {
//   let start = 0;
//   let end = arr.length - 1;

//   while (start <= end && arr[start] <= x && arr[end] >= x) {
//     const index =
//       start +
//       Math.floor(
//         ((end - start) / (arr[end] - arr[start])) * (x - arr[start])
//       );

//     if (arr[index] === x) return index;

//     if (arr[index] < x) {
//       start = index + 1;
//     } else {
//       end = index - 1;
//     }
//   }

//   return -1;
// }

// console.log(interpolationSearch(numbers, 5)); // 2

// * Hash Table

const hashTable = new Map();

hashTable.set("John Doe", "+1234567890");
hashTable.set("Jane Doe", "+0987654321");
hashTable.set("Jacob Mercer", "+0487154395");

for (const [name, value] of hashTable) {
  console.log(name, value);
}
