class HashTable {
  constructor(size = 53) {
    this.keyMap = new Array(size);
  }

  hash(key) {
    let total = 0;
    let prime = 31;

    for (let j = 0; j < key.length; j++) {
      let value = key[j].charCodeAt(0);
      total = (total * prime + value) % this.keyMap.length;
    }
    return total;
  }

  set(key, value) {
    let index = this.hash(key);
    if (!this.keyMap[index]) {
      this.keyMap[index] = [];
    }
    this.keyMap[index].push([key, value]);
  }

  get(key) {
    let index = this.hash(key);
    if (this.keyMap[index]) {
      for (let i = 0; i < this.keyMap[index].length; i++) {
        if (this.keyMap[index][i][0] == key) {
          return this.keyMap[index][i][1];
        }
      }
    }
    return null;
  }
}

let ht = new HashTable(17);

ht.set("roshan", "21");
ht.set("nikhil", "24");
ht.set("aromal", "23");
ht.set("arjun", "27");
ht.set("sterin", "31");

console.log(ht.get("roshan"));
