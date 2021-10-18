export class Letter {
  getCost(service:string,weight:number):number{
      let cost = 0;
      switch(service){
         case 'AirEastShipper' : cost = weight*0.39;
         break;
         case 'ChicagoSprint'  : cost = weight*0.42;
         break;
         case 'PacificParcel' : cost = weight*0.52;
         break;
         default:cost = weight*0.39;
         break;
      }
      return cost;
  }
}


export class Package {
    getCost(service:string,weight:number):number{
        let cost = 0;
        switch(service){
           case 'AirEastShipper' : cost = weight*0.25;
           break;
           case 'ChicagoSprint'  : cost = weight*0.20;
           break;
           case 'PacificParcel' : cost = weight*0.19;
           break;
           default:cost = weight*0.25;
           break;
        }
        return cost;
    }
}


export class Oversized {
    getCost(service:string,weight:number):number{
        let cost = 0;
        switch(service){
           case 'AirEastShipper' : cost = 10 + weight*0.39;
           break;
           case 'ChicagoSprint'  : cost = 0;
           break;
           case 'PacificParcel' : cost = weight*0.52 + weight*0.02;
           break;
           default:cost = 10 + weight*0.39;
           break;
        }
        return cost;
    }
}