class Graph{
    constructor(){
        this.adjacencyList = {};
    }

    addVertex(v){
        if(!this.adjacencyList[v]) this.adjacencyList[v] = [];
    }

    addEdge(v1, v2){
        //undirected graph
        this.adjacencyList[v1].push(v2);
        this.adjacencyList[v2].push(v1);

    }

    removeEdge(v1, v2){
        const index1 = this.adjacencyList[v2].indexOf(v1);
        const index2 = this.adjacencyList[v1].indexOf(v2);

        if(index1 > -1) this.adjacencyList[v2].splice(index1, 1);
        if(index2 > -1) this.adjacencyList[v1].splice(index2, 1);
        
    }

    removeVertex(v){
        if(this.adjacencyList[v]){
            while(this.adjacencyList[v].length){
                const adjVertex = this.adjacencyList[v].pop();
                this.removeEdge(v, adjVertex);
            }
            delete this.adjacencyList[v];
            return this.adjacencyList;
        }else{
            return "VERTICES DOES NOT EXIST"
        }
    }//END OF REMOVE VERTEX


    dfsRecursive(v){
        const adjacencyList = this.adjacencyList;
        const result = [];
        const visited= {};

        function dfs(vert){
            if(!vert) return null;
            visited[vert] = true;
            result.push(vert);
            adjacencyList[vert].forEach(neighbor => {
                if(!visited[neighbor]){
                    return dfs(neighbor);
                }
            });

            
        }
        dfs(v);
        return result;
    }
}//END OF CLASS GRAPH

let g = new Graph();
g.addVertex("A");
g.addVertex("B");
g.addVertex("C");
g.addVertex("D");
g.addVertex("E");
g.addVertex("F");
g.addVertex("G");


g.addEdge("A", "B");
g.addEdge("A", "C");
g.addEdge("B", "D");
g.addEdge("C", "E");
g.addEdge("D", "E");
g.addEdge("D", "F");
g.addEdge("E", "F");





debugger