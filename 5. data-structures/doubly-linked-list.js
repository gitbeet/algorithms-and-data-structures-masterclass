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
    let poppedNode = this.tail;
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
console.log("*************************");
console.log(dll.push(1));
console.log("*************************");
console.log(dll.push(2));
console.log("*************************");
console.log(dll.push(3));
console.log("*************************");
console.log(dll.print());
console.log("Popping: ", dll.pop());
console.log("*************************");
console.log(dll.print());
console.log("Popping: ", dll.pop());
console.log("*************************");
console.log(dll.print());
console.log(dll.head);
console.log(dll.tail);
console.log("Popping: ", dll.pop());
console.log(dll.print());
