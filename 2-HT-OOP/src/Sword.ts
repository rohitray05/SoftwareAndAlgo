// your code goes here
import { Weapon } from "./Weapon";

export class Sword extends Weapon{
   
    constructor(
        value:number,
        weight:number,
        baseDamage:number,
        baseDurability:number,
    ){   
        super("Sword",weight,value)
        this.BaseDurability = baseDurability;
        this.BaseDamage = baseDamage;
        
    }

    public polish():void{
        this.Modifier_change_rate+=this.Modifier_change_rate;
        if(this.getDamage()<1){
         this.BaseDamage += this.BaseDamage * 0.25
        }
    }
    
}