class LinkedList {
    constructor() {
      this.queue = [];
    }
  
    enqueue(value) {
      this.queue.push({ value, next: null });
      if (this.queue.length === 1) {
        this.head = this.queue[0];
      } else {
        this.queue[this.queue.length - 2].next = this.queue[this.queue.length - 1];
      }
    }
  
    dequeue() {
      this.queue.shift();
      this.head = this.queue[0] || null;
    }
  
    print() {
      let current = this.head;
    
      console.log(current);
    }
  }
  
// without array


class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedListQueue {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  enqueue(value) {
    let newNode = new Node(value);
    let currentNode = this.head

    if (!this.head) {
      this.head = newNode;
    } else {
    
      while(currentNode.next)
      {
        currentNode = currentNode.next
      }
      currentNode.next = newNode;
      
    }
  
    return this.head
  }

  dequeue() {
    if (!this.head) {
      return null;
    }

    let removedNode = this.head;
    this.head = this.head.next;

   

    return removedNode.value;
  }

  display() {
    let currentNode = this.head;
    console.log(currentNode);
    while (currentNode) {
      console.log(currentNode.value);
      currentNode = currentNode.next;
    }
  }
}



let list = new LinkedListQueue()
console.log(list);

list.enqueue(1)
list.enqueue(2)
list.enqueue(3)

list.display()

list.dequeue()

list.display()



