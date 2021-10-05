import { Item } from './Item';
import { ItemComparator } from './ItemComparator';

export class ItemWeightComparator implements ItemComparator {

    public compare(first: Item, second: Item) {
        // your code goes here
        let val:number=0;
        if(first.Weight > second.Weight){
            val = 1;
        }else if(first.Weight < second.Weight){
            val = -1;
        }else{
           val = first.compareTo(second);
        }
        return val;
    }
    
}
