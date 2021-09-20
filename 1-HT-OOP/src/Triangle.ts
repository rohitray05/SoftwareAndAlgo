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
          if(this.getPerimeter(this.indices[0])===this.getPerimeter(this.indices[1]) &&
             this.getPerimeter(this.indices[1])=== this.getPerimeter(this.indices[2])){
             type="equilateral triangle";   
          }else if(this.getPerimeter(this.indices[0]) != this.getPerimeter(this.indices[1]) &&
                   this.getPerimeter(this.indices[1]) != this.getPerimeter(this.indices[2]) &&
                   this.getPerimeter(this.indices[0]) != this.getPerimeter(this.indices[2])){
            type="scalene triangle"; 
          }else{
            type="isosceles triangle"; 
          }
      }
      return type;
    }
}
