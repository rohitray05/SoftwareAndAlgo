import { AirEastShipper } from "./AirEastShipper";
import { ChicagoSprint } from "./ChicagoSprint";
import { PacificParcel } from "./PacificParcel";


export interface Shipper{
  getCost():number;
}

export class ShipperFactory {

  static getShippingCost(fromZipCode:string,weight:number):Shipper{
    
    let startsWith = fromZipCode.charAt(0);
    if(['1','2','3'].includes(startsWith)){
      return new AirEastShipper(weight) 
    }else if(['4','5','6'].includes(startsWith)){
      return new ChicagoSprint(weight);
    }else if(['7','8','9'].includes(startsWith)){
      return new PacificParcel(weight);
    }else{
      return new AirEastShipper(weight);
    }
  }
}
/* 

If the from zip code begins with 1, 2, or 3, then the source location is in the east, 
and Air East will be used. A 4, 5, or 6 as the first digit of the from zip code means Chicago Sprint 
is the right choice. A 7, 8, or 9 will mean the western US, and therefore Pacific Parcel.
Air East charges 39 cents per ounce, as we are accustomed to paying (they are the vendor we have been 
using all along).
Chicago Sprint charges 42 cents.
Pacific Parcel charges 51 cents. Things are expensive in southern California!


*/



/* interface Shippers {
  airEastShipperCost(weight:number): number;
  chicagoSprintCost(weight:number): number;
  pacificParcelCost(weight:number): number;
} */

/* class getSipperCost implements Shippers{
  public airEastShipperCost(weight:number):number{
    return new AirEastShipper().getCost(weight);
  }
  public chicagoSprintCost(weight:number):number{
    return new ChicagoSprint().getCost(weight);
  }
  public pacificParcelCost(weight:number):number{
    return new PacificParcel().getCost(weight);
  }
} */






/* public getCost(fromZipCode:string,weight:number):number{
     let startsWith = fromZipCode.charAt(0);
     let cost  = 0;
        if(['1','2','3'].includes(startsWith)){
          cost = this.airEastShipperCost(weight) 
        }else if(['4','5','6'].includes(startsWith)){
          cost = this.chicagoSprintCost(weight);
        }else if(['7','8','9'].includes(startsWith)){
          cost = this.pacificParcelCost(weight);
        }else{
          cost = this.airEastShipperCost(weight);
        }
    return cost;
    } */