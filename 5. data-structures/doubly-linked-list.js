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
