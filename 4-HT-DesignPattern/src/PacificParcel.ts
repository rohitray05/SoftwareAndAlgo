
export class PacificParcel{
    public weight:number;
    private letter:number = 0.52;
    private package:number = 0.19;

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
        cost = this.weight*this.letter + this.weight*0.02;
      }
      return cost;  
    }

}