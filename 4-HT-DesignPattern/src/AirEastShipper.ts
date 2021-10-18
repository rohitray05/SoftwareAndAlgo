import { Shipper } from "./Shipper";

export class AirEastShipper implements Shipper{
    private letter = 0.39;
    private package = 0.25;
    public weight:number;
    constructor(weight:number){
    this.weight = weight;
    }
    getCost( ):number{
      let cost  = 0;
      if(this.weight<=15){
        cost = this.weight*this.letter;
      }else if(this.weight>=15 && this.weight<=160){
        cost = this.weight*this.package;
      }else {
        cost = 10+(this.weight*this.letter);
      }
      return cost;  
    }

}


