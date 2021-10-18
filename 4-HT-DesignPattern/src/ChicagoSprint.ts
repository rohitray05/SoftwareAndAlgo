import { Letter, Oversized, Package } from "./Type";

export class ChicagoSprint{
    public weight:number;
    constructor(weight:number){
    this.weight = weight;
    }
    
    getCost():number{
      let cost  = 0
      if(this.weight<=15){
        cost = new Letter().getCost('ChicagoSprint',this.weight)
      }else if(this.weight>=15 && this.weight<=160){
        cost = new Package().getCost('ChicagoSprint',this.weight)
      }else{
        cost = new Oversized().getCost('ChicagoSprint',this.weight)
      }
      return cost;  
    }

}