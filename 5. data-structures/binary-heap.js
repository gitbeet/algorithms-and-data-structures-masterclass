class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }
  insert(element) {
    this.values.push(element);
    this.bubbleUp();
  }
  bubbleUp() {
    let currentIndex = this.values.length - 1;
    while (currentIndex > 0) {
      let parentIndex = Math.floor(currentIndex - 1 / 2);
      if (this.values[parentIndex] >= this.values[currentIndex]) break;
      [this.values[parentIndex], this.values[currentIndex]] = [
        this.values[currentIndex],
        this.values[parentIndex],
      ];
      currentIndex = parentIndex;
    }
    return this;
  }
}

/*
          45
      23      16
    12  2   1

*/

const heap = new MaxBinaryHeap();
heap.insert(2);
heap.insert(1);
heap.insert(12);
heap.insert(23);
heap.insert(45);
heap.insert(16);
console.log(heap.values);
