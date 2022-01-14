

export class sumArray {
  arrayNumbers: number[] = [3, 5, 2, -4, 8, 11, 9, - 2, -7, 14]
  constructor() {
  }

  calculate(n: number, arr: number[] = this.arrayNumbers) {
    let sum;
    const hashTable = {}
    arr.forEach((element, index) => {
      const minusElement = n - arr[index];
      if (hashTable[minusElement.toString()] !== undefined) {
        sum = [arr[index], minusElement];
      }
      hashTable[arr[index].toString()] = arr[index];
    });
    return sum
  }
};
const calculateArray = new sumArray();
console.log(calculateArray.calculate(9));