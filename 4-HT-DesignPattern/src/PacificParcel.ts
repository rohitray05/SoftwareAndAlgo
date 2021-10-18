export class PacificParcel{
    private letter:number = 0.52;
    private package:number = 0.19;
    getCost(weight:number):number{
      let cost  = 0
      if(weight<=15){
        cost = weight*this.letter;
      }else if(weight>=15 && weight<=160){
        cost = weight*this.package;
      }else{
        cost = weight*this.letter + weight*0.02;
      }
      return cost;  
    }
}