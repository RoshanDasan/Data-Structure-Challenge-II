const art = [
  { obj: 34, obj2: 45 },
  [4, 3, 4],
  { abc: 3 },
  9,
  [65, 13, 45.13],
  { ac: 3 },
  [65, 13, 45, 11],
];

const uniqueNumbers = [];

for (const item of art) {
  if (Array.isArray(item)) {
    for (const num of item) {
      if (!uniqueNumbers.includes(num)) uniqueNumbers.push(num);
    }
  } else {
    for (const value of Object.values(item)) {
      if (!uniqueNumbers.includes(value)) uniqueNumbers.push(value);
    }
  }
}

// Convert the Set to an array for printing
const uniqueNumbersArray = Array.from(uniqueNumbers);

console.log(uniqueNumbersArray); // Output: [34, 45, 4, 3, 9, 65, 13, 45.13, 11]
