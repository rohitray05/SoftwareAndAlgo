import { Item } from "./Item";


export class Weapon extends Item {
   
   baseDamage:number;
   damageModifier:number;
   baseDurability:number;
   durabilityModifier:number;
   effectiveDamage:number; 
   effectiveDurability:number;
   modifier_change_rate:number;
   constructor(name: string,
               value:number,
               weight:number,
               baseDamage:number,
               damageModifier:number,
               baseDurability:number,
               durabilityModifier:number,
               modifier_change_rate:number){
       super(name,value,weight);
       this.baseDamage = baseDamage;
       this.damageModifier = damageModifier;
       this.baseDurability = baseDurability;
       this.durabilityModifier = durabilityModifier;
       this.effectiveDamage = this.baseDamage+this.damageModifier;
       this.effectiveDurability = this.baseDurability+this.durabilityModifier;
       this.modifier_change_rate = modifier_change_rate;
    }

   public getDamage():number{
    return this.effectiveDamage;
   }

   public getDurability():number{
    return this.effectiveDurability; 
   }

   public toString():string{
     return `${this.name} − Value: ${this.value}, Weight : ${this.weight} , Damage : ${this.effectiveDamage} , Durability : ${(this.effectiveDurability)*100}%`;
   }

   public use():string{
     let str:string="";
     this.effectiveDurability = this.effectiveDurability-this.modifier_change_rate;
     if(this.effectiveDurability>0){
        str = `You use the ${this.name} , dealing ${this.effectiveDamage} points of damage.`;
     }else if(this.effectiveDamage==0){
        str = `You use the ${this.name} , dealing ${this.effectiveDamage} points of damage. . The ${this.name} breaks.`;
     }else{
         /* 
            “Using” a Weapon lowers (subtracts) its effective durability by Weapon.MODIFIER CHANGE RATE. If the effective durability of the Weapon hits or drops below 0, the Weapon will ”break”. If the Weapon ”breaks”, the method should output the previous String, but additionally with a newline character and the additional text “The hammer breaks.”:
             For a Weapon with the name of “hammer”, if it is “broken” (The effective durability is 0 or less), calling its use() method returns the following:
         */
     }
     
     return str;
   }

   /* 
   ●	“Using” a Weapon lowers (subtracts) its effective durability by Weapon.MODIFIER CHANGE RATE. If the effective durability of the Weapon hits or drops below 0, the Weapon will ”break”. If the Weapon ”breaks”, the method should output the previous String, but additionally with a newline character and the additional text “The hammer breaks.”:

   ”You use the hammer , dealing 34.05 points of damage . The hammer breaks.”

   ●	For a Weapon with the name of “hammer”, if it is “broken” (The effective durability is 0 or less), calling its use() method returns the following:

   ”You can't use the hammer , it is broken.”

    In this case, there is no change to durabilityModifier.

   
   */
}
