import { PriorityQueue, Node } from "./priority-queue.js";

class WeightedGraph {
  constructor() {
    this.adjacencyList = {};
  }
  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];
    }
  }
  addEdge(vertex1, vertex2, weight) {
    this.adjacencyList[vertex1].push({ node: vertex2, weight });
    this.adjacencyList[vertex2].push({ node: vertex1, weight });
  }
  removeEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
      (v) => v.node !== vertex2
    );
    this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
      (v) => v.node !== vertex1
    );
  }
  removeVertex(vertex) {
    this.adjacencyList[vertex].forEach((v) => {
      this.removeEdge(vertex, v.node);
    });
    delete this.adjacencyList[vertex];
  }
  Dijkstra(start, finish) {
    const nodes = new PriorityQueue();
    const distances = {};
    const previous = {};
    let smallest;
    const path = [];
    // build up initial state
    for (let vertex in this.adjacencyList) {
      if (vertex === start) {
        distances[vertex] = 0;
        nodes.enqueue(vertex, 0);
      } else {
        distances[vertex] = Infinity;
        nodes.enqueue(vertex, Infinity);
      }
      previous[vertex] = null;
    }
    // as long as there is something to visit
    while (nodes.values.length) {
      smallest = nodes.dequeue().value;
      if (smallest === finish) {
        // we are done
        // build up the path"
        while (previous[smallest]) {
          path.push(smallest);
          smallest = previous[smallest];
        }
        break;
      }
      if (smallest || distances[smallest] !== Infinity) {
        for (let neighbor in this.adjacencyList[smallest]) {
          // find neighbor node to the one we are currently iterating on
          let nextNode = this.adjacencyList[smallest][neighbor];
          // calculate new distance to the neighboring node
          // calculating the new distance to the neighboring node and comparing it to the one we currently have , meaning if we had A->E->C being 10 for example but now we get A->B->C being 9 means the "candidate" is successful in replacing the current shortest distance as a new shortest distance
          let candidate = distances[smallest] + nextNode.weight;
          // comparing the candidate to the current shortest distance to the next node
          const nextNeighbor = nextNode.node;
          if (candidate < distances[nextNeighbor]) {
            // if the new distance "the candidate" is shorter -> update to reflect that
            // distances["C"] = 7
            distances[nextNeighbor] = candidate;
            // previous["C"] = "B" -> meaning if we are iterating over B and through B we found a shortest path to "C" we update the "previous" object to reflect that we got to "C" through "B"
            previous[nextNeighbor] = smallest;
            // enqueue in the priority queue with the new priority
            // nodes.enqueue("C" , 7)
            nodes.enqueue(nextNeighbor, candidate);
          }
        }
      }
    }
    console.log(path.concat(smallest).reverse());
  }
}

const graph = new WeightedGraph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");

graph.addEdge("A", "B", 4);
graph.addEdge("A", "C", 2);
graph.addEdge("B", "E", 3);
graph.addEdge("C", "D", 2);
graph.addEdge("C", "F", 4);
graph.addEdge("D", "E", 3);
graph.addEdge("D", "F", 1);
graph.addEdge("E", "F", 1);

graph.Dijkstra("A", "E");
