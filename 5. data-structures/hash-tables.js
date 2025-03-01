/* 
-built-in in pretty much all languages (objects and maps in js)
- used to store key-value pairs
- the keys are not ordered (unlike indices in arrays)
- fast for finding/adding/removing values 
*/
function hash(value) {
  let total = 0;
  value.split("").forEach((l) => (total += l.charCodeAt(0) - 96));
  return total % value.length;
}
console.log(hash("pink"));

class HashTable {
  constructor(size = 53) {
    this.keyMap = new Array(size);
  }
  _hash(key) {
    // define total
    let total = 0;
    // define random prime number
    let PRIME = 31;
    // iterate n times (max 100 times (0n -> 01))
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      // get the character
      let char = key[i];
      // get the character position in the alphabet
      let value = char.charCodeAt(0) - 96;
      // modify total
      total = (total * PRIME + value) % this.keyMap.length;
    }
    return total;
  }
  set(key, value) {
    let index = this._hash(key);
    if (!this.keyMap[index]) {
      this.keyMap[index] = [];
    }
    this.keyMap[index].push([key, value]);
  }
  get(key) {
    // hash the key
    const index = this._hash(key);
    if (this.keyMap[index]) {
      for (let i = 0; i < this.keyMap[index].length; i++) {
        if (this.keyMap[index][i][0] === key) {
          return this.keyMap[index][i][1];
        }
      }
    }
  }
  keys() {
    let keysArr = [];
    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        for (let j = 0; j < this.keyMap[i].length; j++) {
          if (keysArr.includes(this.keyMap[i][j][1])) continue;
          keysArr.push(this.keyMap[i][j][0]);
        }
      }
    }
    return keysArr;
  }
  values() {
    let valuesArr = [];
    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        for (let j = 0; j < this.keyMap[i].length; j++) {
          if (valuesArr.includes(this.keyMap[i][j][1])) continue;
          valuesArr.push(this.keyMap[i][j][1]);
        }
      }
    }
    return valuesArr;
  }
}

const hashTable = new HashTable();
hashTable.set("pink", "#ff99cc");
hashTable.set("black", "#000");
hashTable.set("notwhite", "#000");
hashTable.set("dark", "#000");
console.log(hashTable.get("pink"));
console.log(hashTable.get("black"));
console.log(hashTable.keys());
console.log(hashTable.values());
