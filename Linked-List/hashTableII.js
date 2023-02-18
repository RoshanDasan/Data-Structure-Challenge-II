class LinkedList {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.next = null;
  }
}

class HashTable {
  constructor(size) {
    this.table = new Array(size);
    this.length = this.table.length;
  }

  hash(key) {
    let total = 0;
    for (let i = 0; i < key.length; i++) {
      var value = key.charCodeAt(i);
    }
    total += value % this.length;
    return total;
  }

  insert(key, value) {
    let index = this.hash(key);
    console.log(index);
    if (!this.table[index]) {
      this.table[index] = new LinkedList(key, value);
    } else {
      let currentNode = this.table[index];

      while (currentNode.next) {
        currentNode = currentNode.next;
      }
      currentNode.next = new LinkedList(key, value);
    }
  }

  get(key) {
    let index = this.hash(key);
    console.log(this.table[index]);
    if (!this.table[index]) return null;
    else {
      let currentNode = this.table[index];

      while (currentNode) {
        if (currentNode.key == key) return currentNode.value;
        currentNode = currentNode.next;
      }
    }
    return null;
  }
}

let hashtable = new HashTable(17);

hashtable.insert("roshan", 21);
hashtable.insert("roshan", 21);

console.log(hashtable.get("roshan"));
