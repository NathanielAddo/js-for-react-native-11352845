function processArray(numbers) {
  return numbers.map(num => {
    if (num % 2 === 0) {
      return num * num; // square even numbers
    } else {
      return num * 3; // triple odd numbers
    }
  });
}
const numbers = processArray([1, 2, 3, 4, 5]);
console.log(numbers);
