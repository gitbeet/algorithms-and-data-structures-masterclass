class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  print() {
    let res = [];
    if (!this.root) return res;
    function printNode(node) {
      if (!node) return;
      res.push(
        `VALUE: ${node.value},LEFT: ${node.left?.value},RIGHT: ${node.right?.value}`
      );
      printNode(node.left);
      printNode(node.right);
    }
    printNode(this.root);
    return res;
  }
  insert(value) {
    const newNode = new Node(value);
    if (!this.root) {
      this.root = newNode;
    } else {
      let current = this.root;
      while (true) {
        if (value === current.value) return undefined;
        if (value < current.value) {
          if (!current.left) {
            current.left = newNode;
            return this;
          }
          current = current.left;
        } else {
          if (!current.right) {
            current.right = newNode;
            return this;
          }
          current = current.right;
        }
      }
    }
    return this;
  }
  find(value) {
    if (!this.root) return false;
    let current = this.root;
    while (true) {
      if (current.value === value) return true;
      if (current.value > value) {
        if (!current.left) return false;
        current = current.left;
      } else {
        if (!current.right) return false;
        current = current.right;
      }
    }
  }
  //   FIFO -> Breadth, FILO -> Depth
  bfs() {
    if (!this.root) return [];
    let res = [];
    let queue = [];
    queue.push(this.root);
    while (queue.length) {
      let node = queue.shift();
      res.push(node.value);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    return res;
  }
  dfsPreOrder() {
    if (!this.root) return [];
    let res = [];
    function traverse(node) {
      res.push(node.value);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    }
    traverse(this.root);
    return res;
  }
  dfsInOrder() {
    if (!this.root) return [];
    let res = [];
    function traverse(node) {
      if (node.left) traverse(node.left);
      res.push(node.value);
      if (node.right) traverse(node.right);
    }
    traverse(this.root);
    return res;
  }
  dfsPostOrder() {
    if (!this.root) return [];
    let res = [];
    function traverse(node) {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      res.push(node.value);
    }
    traverse(this.root);
    return res;
  }
}

const bst = new BinarySearchTree();
console.log(bst.insert(15));
console.log(bst.insert(6));
console.log(bst.insert(22));
console.log(bst.insert(3));
console.log(bst.insert(5));
console.log(bst.insert(11));

console.log("BFS: ", bst.bfs());
console.log("DFS,Pre order: ", bst.dfsPreOrder());
console.log("DFS,In order: ", bst.dfsInOrder());
console.log("DFS,Post order: ", bst.dfsPostOrder());
/*
      15 
    6    22
 3    11           
   5
*/
