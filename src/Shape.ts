import { Point } from "./Point";

export abstract class Shape {
    protected color:string;
    protected filled:boolean;
    protected points:Point[];
    
    
    constructor(points?:Point[],color?:string,filled?:boolean);
    constructor(points:Point[]=[new Point(4,5),new Point(6,8),new Point(6,10)],
                color:string="green",
                filled:boolean=true) {
        //  What is meant by 3 points (2 points is just a line)? 
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

    getPerimeter(point:Point):number{
    //Out of 3 points how to decide which 2 points taken in consideration for calculating dist?
      return point.distance(point);
    }
    
    abstract getType(): string;
}
