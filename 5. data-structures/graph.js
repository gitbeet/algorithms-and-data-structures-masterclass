class Graph {
  constructor() {
    this.adjacencyList = {};
  }
  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];
    }
  }
  addEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1].push(vertex2);
    this.adjacencyList[vertex2].push(vertex1);
  }
  removeEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
      (v) => v !== vertex2
    );
    this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
      (v) => v !== vertex1
    );
  }
  removeVertex(vertex) {
    this.adjacencyList[vertex].forEach((v) => {
      this.removeEdge(vertex, v);
    });
    delete this.adjacencyList[vertex];
  }
  dfsRecursive(start) {
    const res = [];
    const visited = {};
    const adjacencyList = this.adjacencyList;
    (function dfs(vertex) {
      if (!vertex) return null;
      visited[vertex] = true;
      res.push(vertex);
      adjacencyList[vertex].forEach((neighbor) => {
        if (!visited[neighbor]) return dfs(neighbor);
      });
    })(start);
    return res;
  }
  dfsIterative(start) {
    const result = [];
    const visited = {};
    const stack = [start];
    visited[start] = true;
    let current;
    while (stack.length) {
      current = stack.pop();
      result.push(current);
      this.adjacencyList[current].forEach((n) => {
        if (visited[n]) return;
        visited[n] = true;
        stack.push(n);
      });
    }
    return result;
  }
}

/*
            A
          /   \
        B       C
        |       | 
        D  ---  E
          \   /  
            F
*/

const graph = new Graph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");
graph.addEdge("A", "B");
graph.addEdge("A", "C");
graph.addEdge("B", "D");
graph.addEdge("C", "E");
graph.addEdge("D", "E");
graph.addEdge("D", "F");
graph.addEdge("E", "F");
console.log(graph.dfsRecursive("A"));
console.log(graph.dfsIterative("A"));
