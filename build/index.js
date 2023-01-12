"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const NumberCollection_1 = require("./NumberCollection");
const StringCollection_1 = require("./StringCollection");
const LinkedList_1 = require("./LinkedList");
//Array of Number
const numberCollection = new NumberCollection_1.NumberCollection([
    0, -5, -100, 44, 66, 7, 10000, 3333, 55,
]);
numberCollection.sort();
numberCollection.print();
//String
const stringCollection = new StringCollection_1.StringCollection("XyZavbCdc");
stringCollection.sort();
stringCollection.print();
//LinkedList
const linkedList = new LinkedList_1.LinkedList();
const arr = [22, 44, 33, 11, -1, 2000, 55, 333, 9];
for (let number of arr) {
    linkedList.add(number);
}
linkedList.sort();
linkedList.print();
