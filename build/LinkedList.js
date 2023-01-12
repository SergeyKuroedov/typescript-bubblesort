"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LinkedList = void 0;
const BubbleSorterData_1 = require("./BubbleSorterData");
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}
class LinkedList extends BubbleSorterData_1.BubbleSorterData {
    constructor() {
        super(...arguments);
        this.head = null;
    }
    add(data) {
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
    get length() {
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
    at(index) {
        if (!this.head) {
            throw new Error("LinkedList is empty");
        }
        let counter = 0;
        let node = this.head;
        while (node) {
            if (counter === index) {
                return node;
            }
            counter++;
            node = node.next;
        }
        throw new Error("LinkedList is empty");
    }
    compare(leftIndex, rightIndex) {
        if (!this.head) {
            throw new Error("LinkedList is empty");
        }
        return this.at(leftIndex).data > this.at(rightIndex).data;
    }
    swap(leftIndex, rightIndex) {
        const temp = this.at(leftIndex).data;
        this.at(leftIndex).data = this.at(rightIndex).data;
        this.at(rightIndex).data = temp;
    }
    print() {
        if (!this.head) {
            return;
        }
        const consoleArr = [];
        let node = this.head;
        while (node) {
            consoleArr.push(node.data);
            node = node.next;
        }
        console.log(consoleArr);
    }
}
exports.LinkedList = LinkedList;
