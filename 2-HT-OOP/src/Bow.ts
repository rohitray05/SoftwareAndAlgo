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
        super(name,value,weight)
        this.BaseDamage = baseDamage;
        this.DamageModifier = damageModifier;
        this.BaseDurability = baseDurability;
        this.DurabilityModifier = durabilityModifier;
        this.Modifier_change_rate = modifier_change_rate;
        
    }

    public polish():void{
        if(this.effectiveDurability<1){
           this.DurabilityModifier+=this.Modifier_change_rate
        }
    }

}
