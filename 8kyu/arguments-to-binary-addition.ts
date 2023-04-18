/*
Given an array add all the number elements and return the binary equivalent of that sum; to make the code bullet proof anything else than a number should be addeded as 0 since it can't be addeded.

If your language can handle float binaries assume the array won't contain float or doubles.
*/
export function arr2bin(arr: any[]): string {
  if (arr.some((el) => Number.isNaN(el))) return "NaN";
  return arr
    .reduce((pre, cur) => pre + (Number.isFinite(cur) ? cur : 0), 0)
    .toString(2);
}
