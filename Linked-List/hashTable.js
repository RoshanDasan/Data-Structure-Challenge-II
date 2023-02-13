class LinkedListNode {
    constructor(key, value) {
      this.key = key;
      this.value = value;
      this.next = null;
    }
  }
  
  class HashTable {
    constructor(size) {
      this.buckets = new Array(size);
      this.numBuckets = this.buckets.length;
    }
  
    hash(key) {
      let total = 0;
      for (let i = 0; i < key.length; i++) {
        total += key.charCodeAt(i);
      }
      let bucket = total % this.numBuckets;
      return bucket;
    }
  
    insert(key, value) {
      let index = this.hash(key);
      if (!this.buckets[index]) this.buckets[index] = new LinkedListNode(key, value);
      else {
        let currentNode = this.buckets[index];
        while (currentNode.next) {
          currentNode = currentNode.next;
        }
        currentNode.next = new LinkedListNode(key, value);
      }
    }
  
    get(key) {
      let index = this.hash(key);
      if (!this.buckets[index]) return null;
      else {
        let currentNode = this.buckets[index];
        while (currentNode) {
          if (currentNode.key === key) return currentNode.value;
          currentNode = currentNode.next;
        }
        return null;
      }
    }
  
    retrieveAll() {
      let allNodes = [];
      for (let i = 0; i < this.numBuckets; i++) {
        let currentNode = this.buckets[i];
        while (currentNode) {
          allNodes.push(currentNode);
          currentNode = currentNode.next;
        }
      }
      return allNodes;
    }
  }
  

  let hashtable = new HashTable(17)

  hashtable.insert("roshan",21)
  hashtable.insert("rahul",25)
  hashtable.insert("dasan",48)
  hashtable.insert("krishnakumari",41)


  console.log(hashtable.retrieveAll());
