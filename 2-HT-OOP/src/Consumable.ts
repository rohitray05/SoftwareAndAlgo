import { Item } from "./Item";

// your code goes here
export class Consumable extends Item{
    private spoiled:boolean;
    consumed:boolean;
    constructor(){
        super()
    }
    
    
    public get Spoiled():boolean{
     return this.spoiled
    }

    public set Spoiled(spoiled:boolean){
     this.spoiled=spoiled;
    }

    public eat(){
        if(this.consumed){
          return `There is nothing left of the ${this.Name} to consume.`  
        }else if(this.spoiled){
          return `You eat the ${this.Name}. You feel sick.`  
        }
        else{
          return `You eat the ${this.Name}.`
        }
    }
    public use():string{
        if(!this.spoiled && !this.consumed){
         return this.eat()
        }
    }

    public setConsumed(consume:boolean):void{
        this.consumed=consume;
    }
}