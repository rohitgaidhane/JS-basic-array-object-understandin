let arr = [
  { name: "user1", age: 28 }, // arr[0]
  { name: "user2", age: 78 }, // arr[1]
  { name: "user3", age: 38 }, // arr[2]
  { name: "user4", age: 25 }, // arr[3]
];

function filterArray() {
  let tempArr = [];  // temp array 
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].age > 30) {
      tempArr.push(arr[i]);
    }
  }
  return tempArr;
}

// console.log(arr);
let ageGreaterThanThirty  = filterArray();
console.log(ageGreaterThanThirty,"user with age greater than 30");
