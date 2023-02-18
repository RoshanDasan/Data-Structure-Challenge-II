class Maxheap {
  constructor() {
    this.heap = [];
  }

  set(element) {
    this.heap.push(element);

    this.bubbleUp();
  }

  bubbleUp() {
    let index = this.heap.length - 1;

    let element = this.heap[index];

    while (index > 0) {
      let parentIndex = Math.floor((index - 1) / 2);
      let parent = this.heap[parentIndex];

      if (element <= parent) break;
      this.heap[parentIndex] = element;
      this.heap[index] = parent;
      index = parentIndex;
    }
  }

  extractMax() {
    let max = this.heap[0];
    let end = this.heap.pop();
    if (this.heap.length > 0) {
      this.heap[0] = end;

      this.sinkDown();
    }
    return max;
  }

  sinkDown() {
    let index = 0;
    let length = this.heap.length;
    let element = this.heap[0];

    while (true) {
      let leftIndex = 2 * index + 1;
      let rightIndex = 2 * index + 2;
      let rightChild, leftChild;
      let swap = null;

      if (leftIndex < length) {
        leftChild = this.heap[leftIndex];
        if (leftChild > element) swap = leftIndex;
      }
      if (rightIndex < length) {
        rightChild = this.heap[rightIndex];
        if (
          (swap == null && rightChild > element) ||
          (swap != null && rightChild > leftChild)
        ) {
          swap = rightIndex;
        }
      }

      if (swap == null) break;

      this.heap[index] = this.heap[swap];
      this.heap[swap] = element;
      index = swap;
    }
  }
}

let list = new Maxheap();

list.set(1);
list.set(2);
list.set(3);
list.set(4);
list.set(5);
list.set(6);

list.extractMax();
list.extractMax();
list.extractMax();
list.extractMax();
list.extractMax();
list.extractMax();
list.extractMax();

console.log(list);
