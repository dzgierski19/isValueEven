function isValueEven(number) {
  isInputNumber(number);
  isInputAnInteger(number);
  isInputZero(number);
  if (number % 2 === 0) {
    return true;
  }
  return false;
}

isInputNumber = (input) => {
  if (typeof input !== "number" || isNaN(input) === true) {
    throw new Error("You must type number");
  }
};

isInputAnInteger = (input) => {
  if (Number.isInteger(input) === false) {
    throw new Error("You must not type an integer");
  }
};

isInputZero = (input) => {
  if (input === 0) {
    throw new Error("You must not type 0");
  }
};

const result1 = isValueEven(-33);
console.log(result1);
