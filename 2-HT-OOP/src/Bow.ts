// your code goes here
import { Weapon } from "./Weapon";

class Bow extends Weapon{
   
    constructor(
        name: string="Bow",
        value:number,
        weight:number,
        baseDamage:number,
        damageModifier:number,
        baseDurability:number,
        durabilityModifier:number,
        modifier_change_rate:number
    ){
        super(name,value,weight,baseDamage,
              damageModifier,baseDurability,durabilityModifier,
              modifier_change_rate)
    }

    public polish():void{
        if(this.effectiveDurability<1){
           this.durabilityModifier+=this.modifier_change_rate
        }
    }

}
