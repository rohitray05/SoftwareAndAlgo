import { Item } from "./Item";


export class Weapon extends Item {
   
   private baseDamage:number;
   private damageModifier:number;
   private baseDurability:number;
   private durabilityModifier:number;
   public effectiveDamage:number; 
   public effectiveDurability:number;
   private modifier_change_rate:number;
   constructor(name:string,weight:number,value:number){
       super();
       this.Name = name;
       this.Weight = weight;
       this.Value = value;  
    }
   
   public get BaseDamage():number{
    return this.baseDamage;
   }

   public set BaseDamage(baseDamage:number){
    this.baseDamage=baseDamage;
   }

   public get DamageModifier():number{
      return this.damageModifier;
   }
  
   public set DamageModifier(damageModifier:number){
      this.damageModifier=damageModifier;
   }
   
   public get DaseDurability():number{
      return this.baseDurability;
   }
  
   public set BaseDurability(baseDurability:number){
      this.baseDurability=baseDurability;
   }

   public get DurabilityModifier():number{
      return this.durabilityModifier;
   }
  
   public set DurabilityModifier(durabilityModifier:number){
      this.durabilityModifier=durabilityModifier;
   }

   public get Modifier_change_rate():number{
      return this.modifier_change_rate;
   }
  
   public set Modifier_change_rate(modifier_change_rate:number){
      this.modifier_change_rate=modifier_change_rate;
   }

   public getDamage():number{
    this.effectiveDamage = this.baseDamage+this.damageModifier;
    return this.effectiveDamage;
   }

   public getDurability():number{
    this.effectiveDurability = this.baseDurability+this.durabilityModifier;
    return this.effectiveDurability; 
   }

   public toString():string{
     
     return `${this.Name} − Value: ${this.Value}, Weight : ${this.Weight} , Damage : ${this.getDamage()} , Durability : ${(this.getDurability())*100}%`;
   }

   public use():string{
     let str:string="";
     this.effectiveDurability = this.getDurability()-this.modifier_change_rate;
     if(this.effectiveDurability>0){
        str = `You use the ${this.Name} , dealing ${this.effectiveDamage} points of damage.`;
     }else if(this.effectiveDamage==0){
        str = `You use the ${this.Name} , dealing ${this.effectiveDamage} points of damage. . The ${this.Name} breaks.`;
     }else{
      str = `You can't use the hammer , it is broken.`

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
