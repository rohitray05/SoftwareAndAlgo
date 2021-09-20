export class Point {
    x:number;
    y:number;
    constructor();
    constructor(x:number,y:number);
    constructor(x:number=0,y:number=0) {
        this.x=x;
        this.y=y;
    }
    
    
    public toString():string{
        return `"(${this.x},${this.y})"`;
    }
    
    public distance(other:Point):number;
    public distance(x:number,y:number):number;
    public distance():number;
   
    public distance(x?:number|Point,y?:number):number{
        if(!x && !y){
            return Math.sqrt(Math.pow(this.x,2)+Math.pow(this.y,2));
        }
        if(x instanceof Point){
            return Math.sqrt(Math.pow((this.x-x?.x),2)+Math.pow((this.y-x?.y),2));
        }
        else if(y && x && typeof x === 'number'){
            return Math.sqrt(Math.pow((this.x-x),2)+Math.pow((this.y-y),2));
        }
        
     }
}
