class Node {
  constructor(value, priority) {
    this.value = value;
    this.priority = priority;
  }
}

class PriorityQueue {
  constructor() {
    this.list = [];
  }

  enque(value, priority) {
    const node = new Node(value, priority);
    this.list.push(node);
    this.bubbleUp();
  }

  bubbleUp() {
    let index = this.list.length - 1;
    let element = this.list[index];

    while (index > 0) {
      let parent = Math.floor((index - 1) / 2);
      let parentElement = this.list[parent];
      if (parentElement.priority < element.priority) break;
      [this.list[parent], this.list[index]] = [
        this.list[index],
        this.list[parent],
      ];
      index = parent;
    }
  }

  extractMax() {
    let poped = this.list.pop();
    this.list[0] = poped;
    this.sinkDown(0);
  }

  sinkDown(index) {
    let leftChildIndex = index * 2 + 1;
    let rightChildIndex = index * 2 + 2;
    let maxIndex = index;
    if (
      leftChildIndex > this.list.length &&
      this.list[leftChildIndex] > this.list[maxIndex]
    ) {
      maxIndex = leftChildIndex;
    }
    if (
      rightChildIndex > this.list.length &&
      this.list[rightChildIndex] > this.list[maxIndex]
    ) {
      maxIndex = rightChildIndex;
    }
    if (maxIndex !== index) {
      [this.list[maxIndex], this.list[index]] = [
        this.list[index],
        this.list[maxIndex],
      ];
      this.sinkDown(maxIndex)
    }
  }
}
