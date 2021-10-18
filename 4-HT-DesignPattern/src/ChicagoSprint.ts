export class ChicagoSprint{
    private letter:number = 0.42;
    private package:number = 0.20;
    getCost(weight:number):number{
      let cost  = 0
      if(weight<=15){
        cost = weight*this.letter;
      }else if(weight>=15 && weight<=160){
        cost = weight*this.package;
      }else{
        cost = 0;
      }
      return cost;  
    }

}