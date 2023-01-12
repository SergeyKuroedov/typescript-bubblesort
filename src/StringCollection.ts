import { BubbleSorterData } from "./BubbleSorterData";

export class StringCollection extends BubbleSorterData {
  constructor(public data: string) {
    super();
  }

  get length(): number {
    return this.data.length;
  }

  compare(leftIndex: number, rightIndex: number): boolean {
    return (
      this.data[leftIndex].toLowerCase() > this.data[rightIndex].toLowerCase()
    );
  }

  swap(leftIndex: number, rightIndex: number): void {
    const arrString = this.data.split("");

    const temp = arrString[leftIndex];
    arrString[leftIndex] = arrString[rightIndex];
    arrString[rightIndex] = temp;

    this.data = arrString.join("");
  }

  print(): void {
    console.log(this.data);
  }
}
