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
}//END OF CLASS GRAPH

let g = new Graph();
g.addVertex("Germany");
g.addVertex("South Carolina");
g.addVertex("Kingston");

g.addEdge("Germany", "South Carolina");
g.addEdge("Kingston", "South Carolina");
g.addEdge("Germany", "Kingston");

// g.removeEdge("Kingston", "Germany");

g.removeVertex("Germany");

debugger