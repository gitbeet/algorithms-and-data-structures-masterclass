class Node {
  constructor(value, priority) {
    this.value = value;
    this.priority = priority;
  }
}

class PriorityQueue {
  constructor() {
    this.values = [];
  }
  enqueue(value, priority) {
    let newNode = new Node(value, priority);
    this.values.push(newNode);
    this.bubbleUp();
  }
  bubbleUp() {
    let currentIndex = this.values.length - 1;
    while (currentIndex > 0) {
      let parentIndex = Math.floor((currentIndex - 1) / 2);
      if (
        this.values[currentIndex].priority >= this.values[parentIndex].priority
      )
        break;
      [this.values[currentIndex], this.values[parentIndex]] = [
        this.values[parentIndex],
        this.values[currentIndex],
      ];
      currentIndex = parentIndex;
    }
  }
  dequeue() {
    let root = this.values[0];
    let lastElement = this.values.pop();
    if (this.values.length) {
      this.values[0] = lastElement;
      this.sinkDown();
    }
    return root;
  }
  sinkDown() {
    let length = this.values.length;
    let currentIndex = 0;
    while (true) {
      let leftChildIndex = 2 * currentIndex + 1;
      let rightChildIndex = 2 * currentIndex + 2;
      let smallestIndex = currentIndex;
      if (
        leftChildIndex < length &&
        this.values[leftChildIndex].priority <
          this.values[smallestIndex].priority
      ) {
        smallestIndex = leftChildIndex;
      }
      if (
        rightChildIndex < length &&
        this.values[rightChildIndex].priority <
          this.values[smallestIndex].priority
      ) {
        smallestIndex = rightChildIndex;
      }
      if (currentIndex === smallestIndex) break;
      [this.values[currentIndex], this.values[smallestIndex]] = [
        this.values[smallestIndex],
        this.values[currentIndex],
      ];
      currentIndex = smallestIndex;
    }
  }
}

const priorityQueue = new PriorityQueue();
priorityQueue.enqueue("Headache", 4);
priorityQueue.enqueue("Cough", 3);
priorityQueue.enqueue("Fever", 2);
priorityQueue.enqueue("Traumatic injury", 1);
console.log(priorityQueue.values);
console.log("----------------------------");
console.log(priorityQueue.dequeue());
console.log(priorityQueue.values);
console.log("----------------------------");
console.log(priorityQueue.dequeue());
console.log(priorityQueue.values);
console.log("----------------------------");
console.log(priorityQueue.dequeue());
console.log(priorityQueue.values);
console.log("----------------------------");
console.log(priorityQueue.dequeue());
console.log(priorityQueue.values);
console.log("----------------------------");
console.log(priorityQueue.dequeue());
console.log(priorityQueue.values);
console.log("----------------------------");
console.log(priorityQueue.dequeue());
console.log(priorityQueue.values);
console.log("----------------------------");
priorityQueue.enqueue("Headache", 4);
priorityQueue.enqueue("Cough", 3);
priorityQueue.enqueue("Fever", 2);
priorityQueue.enqueue("Traumatic injury", 1);
console.log(priorityQueue.values);
