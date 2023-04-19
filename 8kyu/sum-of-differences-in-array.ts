/*
Your task is to sum the differences between consecutive pairs in the array in descending order.
If the array is empty or the array has only one element the result should be 0 (Nothing in Haskell, None in Rust).
*/
export function sumOfDifferences(arr: number[]): number {
  return arr
    .sort((a, b) => b - a)
    .reduce((acc, curr, idx, arr) => {
      if (idx + 1 < arr.length) return acc + Math.abs(curr - arr[idx + 1]);
      else return acc;
    }, 0);
}
