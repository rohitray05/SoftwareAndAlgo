import { Letter, Oversized, Package } from "./Type";

export class PacificParcel{
    public weight:number;
    constructor(weight:number){
    this.weight = weight;
    }
    
    getCost():number{
      let cost  = 0
      if(this.weight<=15){
        cost = new Letter().getCost('PacificParcel',this.weight)
      }else if(this.weight>=15 && this.weight<=160){
        cost = new Package().getCost('PacificParcel',this.weight)
      }else{
        cost = new Oversized().getCost('PacificParcel',this.weight)
      }
      return cost;  
    }

}