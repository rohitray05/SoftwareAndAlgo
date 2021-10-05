// your code goes here

import { Item } from "./Item";
import { ItemComparator } from "./ItemComparator";

export class Inventory{

    
    items:Array<Item>
    
    constructor(){}

    public addItem(item:Item):void{
     this.items.push(item);
    }
    
    public sort(comparator?: ItemComparator):void{
    if(comparator){
        this.items.sort((item1,item2)=>{
            return item1.Weight - item2.Weight;
        })
    }else{
        this.items.sort((item1,item2)=>{
            return item1.Value - item2.Value;
        }) 
    }
    }
    
    public toString():string{
     return `${this.items.toString()}`
    }

    
    
}