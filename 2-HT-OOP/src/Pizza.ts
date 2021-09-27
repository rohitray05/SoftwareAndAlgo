// your code goes here

import { Consumable } from "./Consumable";

class Pizza extends Consumable{
    numberOfSlices:number;
    slicesEaten:number;
    constructor(name:string="Pizza",value:number,weight:number,
                numberOfSlices:number,spoiled:boolean){
    super(name,value,weight,spoiled)
    this.numberOfSlices=numberOfSlices;
    }

    public eat():string{
     let str:string=""
     if(this.slicesEaten < this.numberOfSlices){
         this.slicesEaten++;
         if(this.slicesEaten >= this.numberOfSlices){
           str = `You eat a slice of the ${this.name}`
         }
     }
     return str;
    }

}