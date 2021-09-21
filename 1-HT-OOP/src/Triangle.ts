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
          let P1P2 = Math.round(P1.distance(this.indices[1])); 
          let P2P3 = Math.round(P2.distance(this.indices[2])); 
          let P3P1 = Math.round(P3.distance(this.indices[0])); 

          if(P1P2===P2P3 && P2P3===P3P1){
             type="equilateral triangle";   
          }else if(P1P2===P2P3 || P2P3===P3P1 || P3P1===P1P2){
            type="isosceles triangle"; 
          }else{
            type="saclene triangle"; 
          }
      }
      return type;
    }
}

const shape1 = new Triangle([new Point(1,1),new Point(2,3),new Point(-2,2)]);
console.log(shape1.getType());
const shape2 = new Triangle([new Point(-6,-2),new Point(-2,3),new Point(2,-2)]);
console.log(shape2.getType());
const shape3 = new Triangle([new Point(-1,1.5),new Point(1,-2),new Point(3,1.5)]);
console.log(shape3.getType()); 
