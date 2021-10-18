import { Shipper } from "./Shipper";

export class ChicagoSprint implements Shipper{
    private letter:number = 0.42;
    private package:number = 0.20;
    public weight:number;
    constructor(weight:number){
    this.weight = weight;
    }
    getCost():number{
      let cost  = 0
      if(this.weight<=15){
        cost = this.weight*this.letter;
      }else if(this.weight>=15 && this.weight<=160){
        cost = this.weight*this.package;
      }else{
        cost = 0;
      }
      return cost;  
    }

}