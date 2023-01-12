"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StringCollection = void 0;
const BubbleSorterData_1 = require("./BubbleSorterData");
class StringCollection extends BubbleSorterData_1.BubbleSorterData {
    constructor(data) {
        super();
        this.data = data;
    }
    get length() {
        return this.data.length;
    }
    compare(leftIndex, rightIndex) {
        return (this.data[leftIndex].toLowerCase() > this.data[rightIndex].toLowerCase());
    }
    swap(leftIndex, rightIndex) {
        const arrString = this.data.split("");
        const temp = arrString[leftIndex];
        arrString[leftIndex] = arrString[rightIndex];
        arrString[rightIndex] = temp;
        this.data = arrString.join("");
    }
    print() {
        console.log(this.data);
    }
}
exports.StringCollection = StringCollection;
