class Graph
{
    constructor()
    {
        this.list={}
    }

    creatList(vertex)
    {
        if(!this.list[vertex]) this.list[vertex] = []
        
    }

    addEdge(v1, v2)
    {
        this.list[v1].push(v2)
        this.list[v2].push(v1)

    }

    removeEdge(v1, v2)
    {
        // for remove from v1 list
        this.list[v1] = this.list[v1].filter(current => current != v2)

        // for remove from v2 list
        this.list[v2] = this.list[v2].filter(current => current != v1)

    }

    removeNode(vertex)
    {
        while(this.list[vertex].length)
        {
            var popValue = this.list[vertex].pop()
            this.removeEdge(popValue, vertex)
        }
        delete this.list[vertex]
    }

    depthFS(start)
    {
        var result = []
        var visited = {}
        var list = this.list;

        (function DFS(vertex)
        {
            if(!vertex) return null;
            visited[vertex] = true;
            result.push(vertex);
            list[vertex].forEach(neighbour => {
                if(!visited[neighbour]) return DFS(neighbour)              
            });
        })(start)

        console.log(result);
        return result;
    }

    breadthFS(start)
    {
        var queue = [start], result = [], visited = {}, currentVertex;
        visited[start] = true

        while(queue.length)
        {
            currentVertex = queue.shift();
            result.push(currentVertex)

            this.list[currentVertex].forEach(neighbour=>
                {
                    if(!visited[neighbour])
                    {
                        visited[neighbour] = true
                        queue.push(neighbour)
                    }
                })
        }

        return result
       

    }
}



let graph = new Graph()

graph.creatList("roshan")
graph.creatList("arjun")
graph.creatList("nikhil")
graph.creatList("aromal")
graph.creatList("anirudh")
graph.creatList("sterin")

graph.addEdge("roshan", "arjun")
graph.addEdge("arjun", "nikhil")
graph.addEdge("nikhil", "aromal")
graph.addEdge("aromal", "anirudh")
graph.addEdge("anirudh", "sterin")
graph.addEdge("sterin", "roshan")


graph.depthFS("roshan")



