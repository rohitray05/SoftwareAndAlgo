// your code goes here

import { Item } from "./Item";
import { ItemComparator } from "./ItemComparator";

class Inventory{

    items:Array<Item>
    
    constructor(){}

    public addItem(item:Item):void{
     this.items.push(item);
    }
    
    public sort(comparator?: ItemComparator):void{
    if(comparator){
        this.items.sort((item1,item2)=>{
            return item1.weight - item2.weight;
        })
    }else{
        this.items.sort((item1,item2)=>{
            return item1.value - item2.value;
        }) 
    }
    }
    
    public toString():string{
     return `${this.items.toString()}`
    }

    
    
}