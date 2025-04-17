function evaluateConditions(obj) {
  if (obj && typeof obj === 'object') {
    // Condition 1: age > 18 AND hasLicense is true
    if (obj.age > 18 && obj.hasLicense === true) {
      return "Eligible to drive";
    }

    // Condition 2: temperature > 30 OR humidity > 70
    if (obj.temperature > 30 || obj.humidity > 70) {
      return "Warning: High discomfort level";
    }

    // Condition 3: isStudent is true AND (major is "Computer Science" OR major is "Engineering")
    if (obj.isStudent === true && (obj.major === "Computer Science" || obj.major === "Engineering")) {
      return "Student in a STEM field";
    }

    // Condition 4: hasPet is true AND obj.petType is "dog" AND obj.petAge < 5
    if (obj.hasPet === true && obj.petType === "dog" && obj.petAge < 5) {
      return "Has a young dog";
    }

    // Condition 5: isActive is false AND obj.reason is a non-empty string
    if (obj.isActive === false && typeof obj.reason === 'string' && obj.reason.trim() !== "") {
      return `Inactive: ${obj.reason}`;
    }

    // Default case if none of the conditions are met
    return "No specific conditions met";
  } else {
    return "Invalid input: Expected an object.";
  }
}

// Example Usage:
const person1 = { age: 25, hasLicense: true };
console.log(evaluateConditions(person1)); // Output: Eligible to drive

const weather1 = { temperature: 35, humidity: 60 };
console.log(evaluateConditions(weather1)); // Output: Warning: High discomfort level

const weather2 = { temperature: 28, humidity: 80 };
console.log(evaluateConditions(weather2)); // Output: Warning: High discomfort level

const student1 = { isStudent: true, major: "Computer Science" };
console.log(evaluateConditions(student1)); // Output: Student in a STEM field

const student2 = { isStudent: true, major: "Biology" };
console.log(evaluateConditions(student2)); // Output: No specific conditions met

const petOwner1 = { hasPet: true, petType: "dog", petAge: 3 };
console.log(evaluateConditions(petOwner1)); // Output: Has a young dog

const petOwner2 = { hasPet: true, petType: "cat", petAge: 7 };
console.log(evaluateConditions(petOwner2)); // Output: No specific conditions met

const inactiveUser1 = { isActive: false, reason: "On vacation" };
console.log(evaluateConditions(inactiveUser1)); // Output: Inactive: On vacation

const activeUser1 = { isActive: true };
console.log(evaluateConditions(activeUser1)); // Output: No specific conditions met

const invalidInput = "not an object";
console.log(evaluateConditions(invalidInput)); // Output: Invalid input: Expected an object.
