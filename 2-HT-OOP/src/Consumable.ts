import { Item } from "./Item";

// your code goes here
export class Consumable extends Item{
    spoiled:boolean;
    consumed:boolean;
    constructor(name:string,value:number,weight:number,spoiled:boolean){
        super(name,value,weight)
        this.spoiled=spoiled;
    }
    
    public eat(){
        if(this.consumed){
          return `There is nothing left of the ${this.name} to consume.`  
        }else if(this.spoiled){
          return `You eat the ${this.name}. You feel sick.`  
        }
        else{
          return `You eat the ${this.name}.`
        }
    }
    public use(){
        if(!this.spoiled && !this.consumed){
          this.eat()
        }
    }

    public setConsumed(consume:boolean):void{
        this.consumed=consume;
    }
}