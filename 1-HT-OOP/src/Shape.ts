import { Point } from "./Point";

export abstract class Shape {
    protected color:string;
    protected filled:boolean;
    protected points:Point[];
    
    
    constructor(points?:Point[],color?:string,filled?:boolean);
    constructor(points:Point[]=[],
                color:string="green",
                filled:boolean=true) {
        if(points.length<3){
            throw new Error('Please Enter atleast 3 Points'); 
        }
        this.points=points;
        this.filled=filled;
        this.color=color;
    }
    
    toString():string{
      return `A Shape with color of ${this.color} and ${this.filled?'filled':'Not filled'}. Points: ${this.points.toString()}`
    }

    getPerimeter(points?:Point[]):number{
      let perimeter:number=0;
      if(!points){
        this.points.forEach(data=>{
            let p = new Point(data.x,data.y);
            perimeter = perimeter + p.distance();
          })
      }else if(points){
        points.forEach(data=>{
            let p = new Point(data.x,data.y);
            perimeter = perimeter + p.distance();
          })
      }
      return perimeter;
    }

    abstract getType(): string;
}
