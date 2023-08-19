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

  depthFS() {
    let result = [];
    let visited = {};
    let list = this.list();
    function DFS(list) {
      if (!visited[list]) {
        visited[list] = true;
        result.push(list);
        list[list].forEach((neigbour) => {
          if (!visited[neigbour]) {
            DFS(neigbour);
          }
        });
      }
    }
    DFS(list);
  }

  breadthFS(start) {
    const result = [];
    const visited = {};
    visited[start] =true
    const queue = [start];
    while (queue.length) {
     const node = queue.shift()
     result.push(node)
     this.list[node].forEach((neigbour) => {
      if(!visited[neigbour]){
        queue.push(neigbour)
        visited[neigbour] = true
      }
     })
    }
  }
}
