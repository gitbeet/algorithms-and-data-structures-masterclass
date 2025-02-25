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
console.log(dll.print());
dll.shift();
console.log(dll.print());
dll.shift();
console.log(dll.print());
dll.shift();
console.log(dll.print());
dll.unshift(3);
console.log(dll.print());
dll.unshift(2);
console.log(dll.print());
dll.unshift(1);
console.log(dll.print());
