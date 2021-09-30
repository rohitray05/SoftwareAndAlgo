import { Comparable } from './Comparable';

let id = 0;

export abstract class Item implements Comparable<Item> {
    
    numberOfitems:number;
    id:number;
    private value:number;
    private name:string;
    private weight:number;
    constructor() {
        this.id = id++;
    }
 
    public compareTo(other: Item): number {
        let val:number=0;
        if(this.value > other.value){
            val = 1;
        }else if(this.value < other.value){
            val = -1;
        }else{
           val = this.name.localeCompare(other.name);
        }
        return val;
    }

    public toString(): string{
     return `${this.name} − Value: ${this.value}, Weight: ${this.weight}`;
    }

    get Value():number{
     return this.value;
    }

    set Value(price:number){
     this.value=price;
    }

    get Weight():number{
     return this.weight;
    }

    set Weight(weight:number){
     this.weight=weight;
    }

    get Name():string{
     return this.name;
    }

    set Name(name:string){
     this.name=name;
    }

    public reset():void{
      id=0;
    }
    
    public use():string{
       return this.use();
    }
    // your code goes here
}
