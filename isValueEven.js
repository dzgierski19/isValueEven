const isValueEven = (number) => {
  isInputNumber(number);
  if (number % 2 === 0) {
    return true;
  }
  return false;
};

isInputNumber = (input) => {
  if (typeof input !== "number" || isNaN(input) === true) {
    throw new Error("You must type number");
  }
};

const result1 = isValueEven(0);
console.log(result1);
