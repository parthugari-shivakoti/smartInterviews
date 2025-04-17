var globalVar = "I am a global variable (using var)";
let globalLet = "I am a global variable (using let)";
const globalConst = "I am a global variable (using const)";

function accessGlobals() {
  console.log(globalVar); // Accessible
  console.log(globalLet); // Accessible
  console.log(globalConst); // Accessible
}

accessGlobals();
console.log(globalVar); // Accessible here as well
console.log(globalLet); // Accessible here as well
console.log(globalConst); // Accessible here as well

console.log(window.globalVar); // In browsers, true for var
console.log(window.globalLet); // In browsers, undefined for let/const
console.log(window.globalConst); // In browsers, undefined for let/const



function myFunction() {
  var localVarVar = "I am a local variable (using var)";
  let localVarLet = "I am a local variable (using let)";
  const localVarConst = "I am a local variable (using const)";

  console.log(localVarVar); // Accessible within myFunction
  console.log(localVarLet); // Accessible within myFunction
  console.log(localVarConst); // Accessible within myFunction
}

myFunction();

// The following lines will cause errors because these variables are not defined outside myFunction
// console.log(localVarVar);
// console.log(localVarLet);
// console.log(localVarConst);
