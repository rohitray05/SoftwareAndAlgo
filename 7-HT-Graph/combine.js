
class Graph {
    
    constructor(size = 1) {
        this.size = size;
        this.matrix = [];
        for (let i = 0; i < size; i++) {
            this.matrix.push([]);
            for (let j = 0; j < size; j++) {
                this.matrix[i][j] = 0;
            }
        }
    }

    addEdge(vertex1, vertex2, weight = 1) {
        if (vertex1 > this.size - 1 || vertex2 > this.size - 1) {
            console.log('invalid vertex');
        } else if (vertex1 === vertex2) {
            console.log('same vertex');
        } else {
            this.matrix[vertex1][vertex2] = weight;
            this.matrix[vertex2][vertex1] = weight;
        }
    }

    removeEdge(vertex1, vertex2) {
        if (vertex1 > this.size - 1 || vertex2 > this.size - 1) {
            console.log('invalid vertex');
        } else if (vertex1 === vertex2) {
            console.log('same vertex');
        } else {
            this.matrix[vertex1][vertex2] = 0;
            this.matrix[vertex2][vertex1] = 0;
        } 
    }

    addVertex() {
        this.size++;
        this.matrix.push([]);
        for (let i = 0; i < this.size; i++) {
            this.matrix[i][this.size - 1] = 0;
            this.matrix[this.size - 1][i] = 0;
        }
    }

    removeVertex(vertex) {  
        if (vertex < 0 || vertex > this.size - 1) { 
            console.log('Invalid vertex');
        } else { 
            while ( vertex < this.size - 1) {  
                for (let i = 0; i < this.size; i++) { 
                    this.matrix[i][vertex] = graph[i][vertex + 1]; 
                } 
                for (let i = 0; i < this.size; i++) { 
                    this.matrix[vertex][i] = this.matrix[vertex + 1][i]; 
                } 
                vertex++; 
            } 
            this.matrix.pop();
            this.size--;
        } 
    } 

    printMatrix() {
        console.log("----The Adjacency Matrix----")
        for (let i = 0; i < this.size; i++) {
            let row = '';
            for (let j = 0; j < this.size; j++) {
                row += ` ${this.matrix[i][j]}`;
            }
            console.log(row);
        }
    }
    
    shortestPath(src){
     this.printMatrix()
     this.dijkstra(this.matrix,src)
    }

    dijkstra(graph, src)
   {
    let V = this.size
    let dist = new Array(V);
    let sptSet = new Array(V);
     
    for(let i = 0; i < V; i++)
    {
        dist[i] = Number.MAX_VALUE;
        sptSet[i] = false;
    }
     
    dist[src] = 0;
    for(let count = 0; count < V - 1; count++)
    {

        let u = this.minDistance(dist, sptSet);
         
     
        sptSet[u] = true;
        for(let v = 0; v < this.size; v++)
        {
            if (!sptSet[v] && graph[u][v] != 0 &&
                   dist[u] != Number.MAX_VALUE &&
                   dist[u] + graph[u][v] < dist[v])
            {
                dist[v] = dist[u] + graph[u][v];
            }
        }
    }
    this.printSolution(dist,src);
}

printSolution(dist,src)
{ 
    console.log("\n")
    console.log("----Shortest Routes Except Itself----")
    console.log("\n")
    let V = this.size
    for(let i = 0; i < V; i++)
    {
      if(src!=i)
      console.log(`The shortest route from ${src} vertex to ${i} is : ${dist[i]}`)
    }
    console.log("\n")
}

minDistance(dist,sptSet)
{
    let min = Number.MAX_VALUE;
    let min_index = -1;
    let V = this.size
    for(let v = 0; v < V; v++)
    {
        if (sptSet[v] == false && dist[v] <= min)
        {
            min = dist[v];
            min_index = v;
        }
    }
    return min_index;
}
}


/* let g = new Graph(4)

g.addEdge(0,1,2)
g.addEdge(0,2,3)
g.addEdge(1,3,2)
g.addEdge(3,2,6)
g.shortestPath(2) */

let g = new Graph(5)

g.addEdge(0,1,10)
g.addEdge(0,4,100)
g.addEdge(1,2,50)
g.addEdge(2,4,10)
g.addEdge(2,3,20)
g.addEdge(3,0,30)
g.addEdge(3,4,60)

g.shortestPath(2)