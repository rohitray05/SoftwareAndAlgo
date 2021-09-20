import { Point } from './Point';
import { Shape } from './Shape';

export class Triangle extends Shape {
    private indices:Point[]
    
    constructor(indices:Point[]){
        super(indices);
        if(indices.length!=3){
            throw new Error('Please Enter 3 indices of triangle')
        }
        this.indices=indices
    }   
    toString():string{
        return `Triangle[v1=${this.indices[0]},v2=${this.indices[1]},v3=${this.indices[2]}]`;
        
    }
    
    getType():string{
      let type="";
      if(this.indices.length===3){
          let P1=new Point(this.indices[0].x,this.indices[0].y);
          let P2=new Point(this.indices[1].x,this.indices[1].y);
          let P3=new Point(this.indices[2].x,this.indices[2].y);

          if(P1.distance(this.indices[1])===P2.distance(this.indices[2]) &&
             P2.distance(this.indices[2])=== P3.distance(this.indices[0])){
             type="equilateral triangle";   
          }else if(P1.distance(this.indices[1]) != P2.distance(this.indices[2]) &&
                   P2.distance(this.indices[2]) != P3.distance(this.indices[0]) &&
                   P3.distance(this.indices[0]) != P1.distance(this.indices[1])){
            type="scalene triangle"; 
          }else{
            type="isosceles triangle"; 
          }
      }
      return type;
    }
}
