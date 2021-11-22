import { Dijkstra } from "./dijkstra";

class GraphCreation {
    vertices:number;
    adjacency_matrix:Array<Array<number>>
    constructor(vertices:number = 1) {
        this.vertices = vertices;
        this.adjacency_matrix = [];
        for (let i = 0; i < this.vertices; i++) {
            this.adjacency_matrix.push([]);
            for (let j = 0; j < this.vertices; j++) {
                this.adjacency_matrix[i][j] = 0;
            }
        }
    }

    addEdge(vertex1:number, vertex2:number, weight:number = 1):void{
        if (vertex1 > this.vertices - 1 || vertex2 > this.vertices - 1) {
            console.log('invalid vertex');
        } else if (vertex1 === vertex2) {
            console.log('same vertex');
        } else {
            this.adjacency_matrix[vertex1][vertex2] = weight;
            this.adjacency_matrix[vertex2][vertex1] = weight;
        }
    }

    addVertex():void{
        this.vertices++;
        this.adjacency_matrix.push([]);
        for (let i = 0; i < this.vertices; i++) {
            this.adjacency_matrix[i][this.vertices - 1] = 0;
            this.adjacency_matrix[this.vertices - 1][i] = 0;
        }
    }

    printMatrix():void {
        console.log("----The Adjacency Matrix----")
        for (let i = 0; i < this.vertices; i++) {
            let row = '';
            for (let j = 0; j < this.vertices; j++) {
                row += ` ${this.adjacency_matrix[i][j]}`;
            }
            console.log(row);
        }
    }

    findShortestPath(src:number){
        let sp = new Dijkstra(this.adjacency_matrix,this.vertices,src)
        sp.getShortestPath()
    }

}

let graph = new GraphCreation(4)

graph.addEdge(0,1,2)
graph.addEdge(0,2,3)
graph.addEdge(1,3,2)
graph.addEdge(3,2,6)

graph.printMatrix()

graph.findShortestPath(0)


/* 
npm install typescript ts-node
npx ts-node graph.ts
*/

