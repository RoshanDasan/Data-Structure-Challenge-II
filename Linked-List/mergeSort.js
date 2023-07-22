class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }
 
  add(value) {
    const node = new Node(value);
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
  }

  mergeSort() {
    this.head = this._mergeSort(this.head);
  }

  _mergeSort(node) {
    if (!node || !node.next) {
      return node;
    }

    const middle = this._getMiddle(node);
    const nextToMiddle = middle.next;
    middle.next = null;

    const left = this._mergeSort(node);
    const right = this._mergeSort(nextToMiddle);

    return this._merge(left, right);
  }

  _merge(left, right) {
    let result;

    if (!left) {
      return right;
    }
    if (!right) {
      return left;
    }

    if (left.value <= right.value) {
      result = left;
      result.next = this._merge(left.next, right);
    } else {
      result = right;
      result.next = this._merge(left, right.next);
    }

    return result;
  }

  _getMiddle(node) {
    let slow = node;
    let fast = node;

    while (fast.next && fast.next.next) {
      slow = slow.next;
      fast = fast.next.next;
    }

    return slow;
  }

  display() {
    let list = [];
    let currentNode = this.head;
    console.log(currentNode.next.next);
    while (currentNode) {
      list.push(currentNode.value);
      currentNode = currentNode.next;
    }
    console.log(list);
    return list;
  }
}

let list = new LinkedList();

list.add(3);
list.add(4);
list.add(5);
list.add(1);
list.add(2);

list.display();

list.mergeSort();

list.display();
