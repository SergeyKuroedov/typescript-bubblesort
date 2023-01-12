import { NumberCollection } from "./NumberCollection";
import { StringCollection } from "./StringCollection";
import { LinkedList } from "./LinkedList";

//Array of Number
const numberCollection = new NumberCollection([
  0, -5, -100, 44, 66, 7, 10000, 3333, 55,
]);
numberCollection.sort();
numberCollection.print();

//String
const stringCollection = new StringCollection("XyZavbCdc");
stringCollection.sort();
stringCollection.print();

//LinkedList
const linkedList = new LinkedList();
const arr = [22, 44, 33, 11, -1, 2000, 55, 333, 9];
for (let number of arr) {
  linkedList.add(number);
}

linkedList.sort();
linkedList.print();
