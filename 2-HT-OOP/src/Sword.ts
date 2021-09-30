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
        /* How to increase the base damage by 25% ?? */
        /* damageModifier by adding Weapon.MODIFIER_CHANGE_RATE each time polish() is called, up to 25% of the baseDamage value */
    }
}