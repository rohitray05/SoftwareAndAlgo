import { Comparable } from './Comparable';

let id = 0;

export abstract class Item implements Comparable<Item> {
    
    numberOfitems:number;
    id:number;
    value:number;
    name:string;
    weight:number;
    constructor(name: string,value:number,weight:number) {
        this.name = name;
        this.value = value;
        this.weight = weight;
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

    public getValue():number{
     return this.value;
    }

    public setValue(price:number):void{
     this.value=price;
    }

    public getWeight():number{
     return this.weight;
    }

    public setWeight(weight:number):void{
     this.weight=weight;
    }

    public getName():string{
     return this.name;
    }

    public setName(name:string):void{
     this.name=name;
    }

    public reset():void{
      id=0;
    }

    // your code goes here
}
