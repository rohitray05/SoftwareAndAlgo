import { ShortestPath } from "./algo-interface";

export class Dijkstra implements ShortestPath {
    adjacency_matrix:Array<Array<number>>
    size:number;
    source:number;
    dist:Array<number>;
    sptSet:Array<boolean>;
    constructor(graph:Array<Array<number>>,size:number, src:number){
    this.adjacency_matrix = graph;
    this.source = src;
    this.size = size;
    this.dist = new Array(this.size)
    this.sptSet = new Array(this.size)
    this.init();
    }

    init():void{
      for(let i = 0; i < this.size; i++)
      {
        this.dist[i] = Number.MAX_VALUE;
        this.sptSet[i] = false;
       }
       this.dist[this.source] = 0;
    }

    getShortestPath():void{
    for(let count = 0; count < this.size - 1; count++)
    {
      let u = this.minDistance(this.dist, this.sptSet);
      this.sptSet[u] = true;
        for(let v = 0; v < this.size; v++)
        {
          if (!this.sptSet[v] && this.adjacency_matrix[u][v] != 0 &&
               this.dist[u] != Number.MAX_VALUE &&
               this.dist[u] + this.adjacency_matrix[u][v] < this.dist[v])
            {
                this.dist[v] = this.dist[u] + this.adjacency_matrix[u][v];
            }
        }
    }

    this.printSolution(this.dist,this.source);
    }


    minDistance(dist:Array<number>, sptSet:Array<boolean>):number{
        let min = Number.MAX_VALUE;
        let min_index = -1;
        for(let v = 0; v < this.size; v++)
    {
        if (sptSet[v] == false && dist[v] <= min)
        {
            min = dist[v];
            min_index = v;
        }
    }
    return min_index;
    }

    printSolution(dist:Array<number>,src:number)
    {
    
    for(let i = 0; i < this.size; i++)
    {
      if(src!=i)
      console.log(`The shortest route from ${src} vertex to ${i} is : ${dist[i]}`)
    }
    }

 
     

}