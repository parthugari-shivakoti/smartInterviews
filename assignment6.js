function createCalculator() {
  return {
    add: function(a, b) {
      if (typeof a !== 'number' || typeof b !== 'number') {
        return "Invalid input. Please provide numbers.";
      }
      return a + b;
    },
    subtract: function(a, b) {
      if (typeof a !== 'number' || typeof b !== 'number') {
        return "Invalid input. Please provide numbers.";
      }
      return a - b;
    },
    multiply: function(a, b) {
      if (typeof a !== 'number' || typeof b !== 'number') {
        return "Invalid input. Please provide numbers.";
      }
      return a * b;
    },
    divide: function(a, b) {
      if (typeof a !== 'number' || typeof b !== 'number') {
        return "Invalid input. Please provide numbers.";
      }
      if (b === 0) {
        return "Cannot divide by zero.";
      }
      return a / b;
    }
  };
}

const myCalculator = createCalculator(); 
console.log("Addition:", myCalculator.add(10, 5));       // Output: Addition: 15
console.log("Subtraction:", myCalculator.subtract(10, 5)); // Output: Subtraction: 5
console.log("Multiplication:", myCalculator.multiply(10, 5));  // Output: Multiplication: 50
console.log("Division:", myCalculator.divide(10, 2));     // Output: Division: 5
console.log("Division by zero:", myCalculator.divide(10, 0)); // Output: Division by zero: Cannot divide by zero.
console.log("Invalid input:", myCalculator.add(10, "hello")); //Output: "Invalid input. Please provide numbers."
