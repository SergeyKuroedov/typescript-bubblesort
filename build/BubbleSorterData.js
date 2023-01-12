"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BubbleSorterData = void 0;
class BubbleSorterData {
    sort() {
        const { length } = this;
        for (let i = 0; i < length; i++) {
            for (let j = 0; j < length - i - 1; j++) {
                if (this.compare(j, j + 1)) {
                    this.swap(j, j + 1);
                }
            }
        }
    }
}
exports.BubbleSorterData = BubbleSorterData;
