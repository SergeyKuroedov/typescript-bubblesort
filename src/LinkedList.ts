import { BubbleSorterData } from "./BubbleSorterData";

class Node {
  next: Node | null = null;

  constructor(public data: number) {}
}

export class LinkedList extends BubbleSorterData {
  head: Node | null = null;

  add(data: number): void {
    const node = new Node(data);

    if (!this.head) {
      this.head = node;
      return;
    }

    let tail = this.head;

    while (tail.next) {
      tail = tail.next;
    }

    tail.next = node;
  }

  get length(): number {
    if (!this.head) {
      return 0;
    }

    let length = 1;
    let node = this.head;
    while (node.next) {
      length++;
      node = node.next;
    }

    return length;
  }

  at(index: number): Node {
    if (!this.head) {
      throw new Error("LinkedList is empty");
    }

    let counter = 0;
    let node: Node | null = this.head;

    while (node) {
      if (counter === index) {
        return node;
      }
      counter++;
      node = node.next;
    }

    throw new Error("LinkedList is empty");
  }

  compare(leftIndex: number, rightIndex: number): boolean {
    if (!this.head) {
      throw new Error("LinkedList is empty");
    }

    return this.at(leftIndex).data > this.at(rightIndex).data;
  }

  swap(leftIndex: number, rightIndex: number): void {
    const temp = this.at(leftIndex).data;
    this.at(leftIndex).data = this.at(rightIndex).data;
    this.at(rightIndex).data = temp;
  }

  print(): void {
    if (!this.head) {
      return;
    }

    const consoleArr = [];

    let node: Node | null = this.head;
    while (node) {
      consoleArr.push(node.data);
      node = node.next;
    }

    console.log(consoleArr);
  }
}
