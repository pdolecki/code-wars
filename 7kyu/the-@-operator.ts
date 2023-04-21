/*
I invented a new operator, @, which is left associative.

a @ b = (a + b) + (a - b) + (a * b) + (a // b)

Side note: ~~ is shorthand for Math.floor.

Given a string containing only integers and the operators, find out the value of that string.

The strings will always be "well formed", meaning with a space on each side of the operators.

Except in TS, where random tests have no space in between
*/
export function evaluate(equation: string): number | null {
  const calculationElements: number[] = equation.split("@").map(Number);

  return !calculationElements.slice(1).includes(0)
    ? calculationElements.reduce(
        (a: number, b: number) => a + b + +(a - b) + a * b + ~~(a / b)
      )
    : null;
}
