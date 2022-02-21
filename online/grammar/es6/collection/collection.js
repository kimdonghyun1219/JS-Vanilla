/**
 *  Map , Set
 * 
 *  Map: key, value
 *  Set: many elements to sequentially without overlap, no individual access
 * 
 */

// Map
const mapCo = new Map();

mapCo.set('name','dong'); // set
mapCo.get('name'); // get
mapCo.has('name'); // return:boolean
mapCo.size; // 1
mapCo.delete('name'); // value delete
mapCo.clear(); // all element remove

// Set
const members = new Set();

members.add('짱구'); // Set(1) {"짱구"}
members.add('철수'); // Set(2) {"짱구","철수"}
members.add('유리'); // Set(3) {"짱구","철수","유리"}
members.add('훈이'); // Set(4) {"짱구","철수","유리","훈이"}
members.add('맹구'); // Set(5) {"짱구","철수","유리","훈이","맹구"}
members.has('짱구'); // return boolean
members.size; // 5
members.delete('훈이'); // return boolean
members.clear(); // all element remove

const overlapArr = [1,2,2,3,3,1,2,3,2];
const uniquArr = new Set(overlapArr);
console.log(uniquArr); // Set(3) {1,2,3} 

