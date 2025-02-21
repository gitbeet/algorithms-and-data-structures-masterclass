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
    if (!prevNode) return false;
    newNode.next = prevNode.next;
    prevNode.next = newNode;
    this.length++;
    return true;
  }
  remove(index) {
    if (index < 0 || index >= this.length) return false;
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();
    const prevNode = this.get(index - 1);
    if (!prevNode || !prevNode.next) return false;
    const removedNode = prevNode.next;
    prevNode.next = removedNode.next;
    this.length--;
    return removedNode;
  }
  reverse() {
    /*
      head            tail
      13 -> 27 -> 32-> 71

      -----

      1/ head becomes tail
      tail
       13

      2/ save the old next of the current element (32) into a variable and then make its new next to be the prev element (13) 
      tail
       13 <- 27

      3/ repeat the process until there's no next 
      tail              
       13 <- 27 <- 32 <- 71

      4/ make the last element the head
      tail              head
       13 <- 27 <- 32 <- 71


       */
    let current = this.head;
    this.head = this.tail;
    this.tail = current;
    let next;
    let prev = null;
    for (let i = 0; i < this.length; i++) {
      // create ref for next first
      next = current.next;

      current.next = prev;
      // move onto the next node
      prev = current;
      current = next;
    }
    return this;
  }
  print() {
    let res = [];
    let current = this.head;
    while (current) {
      res.push(current.val);
      current = current.next;
    }
    return res;
  }
}

const sll = new SinglyLinkedList();
console.log("--------------------");
console.log(sll.push(2));
console.log(sll.push(3));
console.log(sll.push(4));
console.log(sll.push(5));
console.log(sll.length);
console.log(sll.reverse());
console.log(sll.print());
