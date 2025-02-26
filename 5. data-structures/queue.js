class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  print() {
    const res = [];
    let current = this.first;
    while (current) {
      res.push(current.value);
      current = current.next;
    }
    console.log(res);
  }

  enqueue(value) {
    const newNode = new Node(value);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    return ++this.size;
  }
  dequeue() {
    if (!this.first) return undefined;
    let dequeuedNode = this.first;
    this.first = this.first.next;
    this.size--;
    return dequeuedNode.value;
  }
}

const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.print();
queue.dequeue();
queue.print();
queue.enqueue(12);
queue.print();
queue.dequeue();
queue.print();
queue.dequeue();
queue.print();
