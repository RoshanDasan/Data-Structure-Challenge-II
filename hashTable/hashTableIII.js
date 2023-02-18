class HashTable {
  constructor(limit = 53) {
    this.Table = new Array(limit);
  }

  hash(key) {
    let prime = 31;
    let total = 0;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let value = key[i].charCodeAt(0) - 96;

      total = (total * prime + value) % this.Table.length;
    }
    return total;
  }

  set(key, value) {
    let index = this.hash(key);

    if (!this.Table[index]) {
      this.Table[index] = [];
    }
    this.Table[index].push([key, value]);
  }

  get(key) {
    let index = this.hash(key);

    if (this.Table[index]) {
      for (let i = 0; i < this.Table[index].length; i++) {
        if (this.Table[index][i][0] == key) {
          return this.Table[index][i][1];
        }
      }
    }
    return undefined;
  }
}

var hashtable = new HashTable(17);

hashtable.set("Ronaldo", "portugal");
hashtable.set("Messi", "Argentina");
hashtable.set("Neymer", "Brazil");
hashtable.set("Mbappe", "France");
hashtable.set("Debruyne", "Belgium");
hashtable.set("Lewandowski", "Poland");
hashtable.set("Casemiro", "Brazil");

console.log(hashtable.get("Ronaldo"));
