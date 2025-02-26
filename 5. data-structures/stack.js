class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.top = null;
    this.size = 0;
  }
  print() {
    let res = "";
    if (!this.top) return res;
    let current = this.top;
    while (current) {
      res += ` _\n|${current.value}| (next: ${
        current.next?.value || "null"
      })\n`;
      current = current.next;
    }
    console.log(res);
    console.log("************");
  }
  push(value) {
    const newNode = new Node(value);
    if (!this.first) {
      this.first = newNode;
      this.top = newNode;
    } else {
      newNode.next = this.top;
      this.top = newNode;
    }
    return ++this.size;
  }
  pop() {
    if (!this.top) return undefined;
    let temp = this.top;
    this.top = this.top.next;
    this.size--;
    return temp.value;
  }
}

const stack = new Stack();

stack.push(1);
stack.push(2);
stack.push(3);
stack.print();
console.log(stack.pop());
stack.print();
console.log(stack.pop());
stack.print();
console.log(stack.pop());
stack.print();
console.log(stack.pop());
stack.print();
