class MaxHeap {
  constructor() {
    this.heap = [];
  }

  insert(value) {
    this.heap.push(value);
    this.bubbleUp();
  }

  extractMax() {
    const max = this.heap[0];
    const last = this.heap.pop();
    if (this.heap.length > 0) {
      this.heap[0] = last;
      this.sinkDown(0);
    }
    return max;
  }

  bubbleUp() {
    let index = this.heap.length - 1;
    while (index > 0) {
      const parentIndex = Math.floor((index - 1) / 2);
      if (this.heap[parentIndex] >= this.heap[index]) break;
      this.swap(index, parentIndex);
      index = parentIndex;
    }
  }

  sinkDown(index) {
    const leftChildIndex = 2 * index + 1;
    const rightChildIndex = 2 * index + 2;
    const length = this.heap.length;
    let maxIndex = index;

    if (
      leftChildIndex < length &&
      this.heap[leftChildIndex] > this.heap[maxIndex]
    ) {
      maxIndex = leftChildIndex;
    }
    if (
      rightChildIndex < length &&
      this.heap[rightChildIndex] > this.heap[maxIndex]
    ) {
      maxIndex = rightChildIndex;
    }

    if (maxIndex !== index) {
      this.swap(index, maxIndex);
      this.sinkDown(maxIndex);
    }
  }

  swap(i, j) {
    [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
  }
}

// Example usage:
const maxHeap = new MaxHeap();
maxHeap.insert(5);
maxHeap.insert(10);
maxHeap.insert(7);
maxHeap.insert(3);

console.log(maxHeap.extractMax()); // Output: 10
console.log(maxHeap.extractMax()); // Output: 7
