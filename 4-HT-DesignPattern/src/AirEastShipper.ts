export class AirEastShipper{
    private letter = 0.39;
    private package = 0.25;
    getCost(weight:number):number{
      let cost  = 0;
      if(weight<=15){
        cost = weight*this.letter;
      }else if(weight>=15 && weight<=160){
        cost = weight*this.package;
      }else {
        cost = 10+(weight*this.letter);
      }
      return cost;  
    }

}


