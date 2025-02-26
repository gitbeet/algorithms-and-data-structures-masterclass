class Node {
  constructor(value) {
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  print() {
    if (!this.head) return null;
    let res = [];
    let current = this.head;
    while (current) {
      let text = `${current.prev?.value || "null"} <- (${current.value}) -> ${
        current.next?.value || "null"
      }`;
      res.push(text);
      current = current.next;
    }
    return res;
  }
  push(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      newNode.prev = this.tail;
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
  pop() {
    if (!this.head) return undefined;
    const poppedNode = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = poppedNode.prev;
      this.tail.next = null;
      poppedNode.prev = null;
    }
    this.length--;
    return poppedNode;
  }
  shift() {
    if (!this.head) return undefined;
    const oldHead = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = oldHead.next;
      this.head.prev = null;
      oldHead.next = null;
    }
    this.length--;
    return oldHead;
  }
  unshift(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    }
    this.length++;
    return this;
  }
  get(index) {
    if (index < 0 || index >= this.length) return null;
    let current;
    if (index < this.length / 2) {
      current = this.head;
      for (let i = 0; i < index; i++) {
        current = current.next;
      }
    } else {
      current = this.tail;
      for (let i = this.length - 1; i > index; i--) {
        current = current.prev;
      }
    }
    return current;
  }
  set(index, val) {
    const node = this.get(index);
    if (!node) return false;
    node.value = val;
    return true;
  }
  insert(index, val) {
    if (index < 0 || index > this.length) return false;
    if (index === 0) return !!this.unshift(val);
    if (index === this.length) return !!this.push(val);
    const prev = this.get(index - 1);
    const newNode = new Node(val);
    newNode.next = prev.next;
    prev.next.prev = newNode;
    newNode.prev = prev;
    prev.next = newNode;
    this.length++;
    return true;
  }
  remove(index) {
    if (index < 0 || index >= this.length) return undefined;
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();
    const removedNode = this.get(index);
    const prev = removedNode.prev;
    const next = removedNode.next;
    prev.next = next;
    next.prev = prev;
    removedNode.prev = null;
    removedNode.next = null;
    this.length--;
    return true;
  }
  reverse() {
    if (this.length <= 1) return this;
    let current = this.head;
    while (current) {
      [current.next, current.prev] = [current.prev, current.next];
      current = current.prev;
    }
    [this.head, this.tail] = [this.tail, this.head];
    return this;
  }
}

/*
           next   next   next
            ->    ->     ->
         (1)   (2)   (3)
         head        tail
        <-    <-    <-
       prev  prev  prev
*/

const dll = new DoublyLinkedList();
console.log(dll.push(1));
console.log(dll.push(2));
console.log(dll.push(3));
console.log(dll.push(4));
console.log(dll.push(5));
console.log(dll.print());
console.log(dll.reverse());
console.log(dll.print());
