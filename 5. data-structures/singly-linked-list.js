class Node {
  constructor(value) {
    this.val = value;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
  pop() {
    if (!this.head) return undefined;
    let current = this.head;
    let newTail = current;
    while (current.next) {
      newTail = current;
      current = current.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }
  shift() {
    if (!this.head) return undefined;
    let currentHead = this.head;
    this.head = currentHead.next;
    this.length--;
    if (this.length === 0) {
      this.head = null;
    }
    return currentHead;
  }
  unshift(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }
  get(index) {
    if (index < 0 || index > this.length - 1) return null;
    if (index === 0) return this.head;
    if (index === this.length - 1) return this.tail;
    let element = this.head;
    for (let i = 0; i < index; i++) {
      element = element.next;
    }
    return element;
  }
  set(index, value) {
    const node = this.get(index);
    if (!node) return false;
    node.val = value;
    return true;
  }
  insert(index, value) {
    // index out of bounds check
    if (index < 0 || index > this.length) return false;
    // push if inserting next to last
    if (index === this.length) return this.push(value);
    // unshift if inserting left to first
    if (index === 0) return this.unshift(value);
    // rest of the cases
    const newNode = new Node(value);
    const prevNode = this.get(index - 1);
    if(!prevNode) return false
    newNode.next = prevNode.next;
    prevNode.next = newNode;
    this.length++;
    return true;
  }
}

const sll = new SinglyLinkedList();
console.log("--------------------");
console.log(sll.push(2));
console.log(sll.push(3));
console.log(sll.push(4));
console.log(sll.push(5));
console.log(sll.insert(0, 12));
console.log(sll.insert(5, 32));
console.log(sll.insert(5, 31));
