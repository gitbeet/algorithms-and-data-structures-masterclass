class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }
  insert(element) {
    this.values.push(element);
    this.bubbleUp();
  }
  extractMax() {
    const root = this.values.shift();
    const last = this.values.pop();
    this.values.unshift(last);
    this.sinkDown();
    return root;
  }
  sinkDown() {
    let length = this.values.length;
    let currentIndex = 0;
    while (true) {
      let leftChildIndex = 2 * currentIndex + 1;
      let rightChildIndex = 2 * currentIndex + 2;
      let largestIndex = currentIndex;
      if (
        leftChildIndex < length &&
        this.values[largestIndex] < this.values[leftChildIndex]
      ) {
        largestIndex = leftChildIndex;
      }
      if (
        rightChildIndex < length &&
        this.values[largestIndex] < this.values[rightChildIndex]
      ) {
        largestIndex = rightChildIndex;
      }
      if (currentIndex === largestIndex) break;
      [this.values[currentIndex], this.values[largestIndex]] = [
        this.values[largestIndex],
        this.values[currentIndex],
      ];
      currentIndex = largestIndex;
    }
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
[23, 16, 12, 2, 1];
1/ remove the root -> [ 16, 12, 2, 1];
2/ replace the root with the last element -> [1, 16, 12, 2];
3/ restore order (sink down)
    3.1/ [16,1,12,2]
    3.2/ [16,2,12,1] 
*/
const heap = new MaxBinaryHeap();
heap.insert(2);
heap.insert(1);
heap.insert(12);
heap.insert(23);
heap.insert(45);
heap.insert(16);
heap.extractMax();
heap.extractMax();
console.log(heap.values);
