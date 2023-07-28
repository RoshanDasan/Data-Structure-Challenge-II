class Graph {
  constructor() {
    this.list = {};
  }

  createList(value) {
    if (!this.list[value]) this.list[value] = [];
  }
  addEdge(v1, v2) {
    this.list[v1].push(v2);
    this.list[v2].push(v1);
  }
  removeEdge(v1, v2) {
    this.list[v1] = this.list[v1].filter((edge) => edge !== v2);
    this.list[v2] = this.list[v2].filter((edge) => edge !== v1);
  }
  removeNode(value) {
    while (this.list[value].length) {
      const poper = this.list[value].pop();
      this.list(poper, value);
    }
    delete this.list[value];
  }

  depthFS(value) {
    if (!value) return;
    const visited = {};
    const list = this.list;
    const result = [];
    (function DFS(value) {
      visited[value] = true;
      result.push(value);
      list[value].forEach((element) => {
        if (!visited[element]) return DFS(element);
      });
    })(value);
    return result;
  }

  breadthFS(value) {
    let node;
    let result = [];
    let visited = {};
    let queue = [value];
    while (queue.length) {
      node = queue.shift();
      visited[node] = true;
      result.push(node);
      this.list[node].forEach((element) => {
        if(!visited[element]){
          queue.push(element)
          visited[element]=true
        }
      });
    }
    return result
  }
}
