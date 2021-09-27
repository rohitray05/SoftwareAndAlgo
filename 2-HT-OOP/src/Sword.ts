// your code goes here
import { Weapon } from "./Weapon";

class Sword extends Weapon{
   
    constructor(
        name: string="Sword",
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
        this.damageModifier+=this.modifier_change_rate;
        /* How to increase the base damage by 25% ?? */
        /* damageModifier by adding Weapon.MODIFIER_CHANGE_RATE each time polish() is called, up to 25% of the baseDamage value */
    }
}