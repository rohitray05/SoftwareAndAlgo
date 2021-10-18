/* 

If the from zip code begins with 1, 2, or 3, then the source location is in the east, 
and Air East will be used. A 4, 5, or 6 as the first digit of the from zip code means Chicago Sprint 
is the right choice. A 7, 8, or 9 will mean the western US, and therefore Pacific Parcel.
Air East charges 39 cents per ounce, as we are accustomed to paying (they are the vendor we have been 
using all along).
Chicago Sprint charges 42 cents.
Pacific Parcel charges 51 cents. Things are expensive in southern California!


*/

import { AirEastShipper } from "./AirEastShipper";
import { ChicagoSprint } from "./ChicagoSprint";
import { PacificParcel } from "./PacificParcel";


export class Shipper{
    constructor(){}
    
    public getCost(fromZipCode:string,weight:number):number{
     let startsWith = fromZipCode.charAt(0);
     let cost  = 0;
        if(['1','2','3'].includes(startsWith)){
          cost = new AirEastShipper(weight).getCost(); //default condition is required as well
        }else if(['4','5','6'].includes(startsWith)){
          cost = new ChicagoSprint(weight).getCost();
        }else if(['7','8','9'].includes(startsWith)){
          cost = new PacificParcel(weight).getCost();
        }else{
          cost = new AirEastShipper(weight).getCost();
        }
    return cost;
    }
}