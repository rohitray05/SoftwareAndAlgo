// your code goes here

import { Consumable } from "./Consumable";

export class Pizza extends Consumable{
    numberOfSlices:number;
    slicesEaten:number;
    constructor(numberOfSlices:number,spoiled:boolean){
    super()
    this.Name = "Pizza";
    this.Spoiled = spoiled;
    this.numberOfSlices=numberOfSlices;
    }

    public eat():string{
     let str:string=""
     if(this.slicesEaten < this.numberOfSlices){
         this.slicesEaten++;
         if(this.slicesEaten >= this.numberOfSlices){
           str = `You eat a slice of the ${this.Name}`
         }
     }
     return str;
    }

}