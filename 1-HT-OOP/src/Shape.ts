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
      let pts = "";
      this.points.forEach((point,index)=>{
       if(index!=this.points.length-1){
        pts = pts + `${point}, `
       }else{
        pts = pts + `${point}.`
       }
       
      })
      return `A Shape with color of ${this.color} and ${this.filled?'filled':'not filled'}. Points: ${pts}`
    }

    getPerimeter(points?:Point[]):number{
      let perimeter:number=0;
          console.log(points)
          let P1=new Point(points[0].x,points[0].y);
          let P2=new Point(points[1].x,points[1].y);
          let P3=new Point(points[2].x,points[2].y);
          let P1P2 = Math.round(P1.distance(points[1])*10)/10; 
          let P2P3 = Math.round(P2.distance(points[2])*10)/10; 
          let P3P1 = Math.round(P3.distance(points[0])*10)/10;
          perimeter = P1P2+P2P3+P3P1;

      return perimeter;
    }

    abstract getType(): string;
}


