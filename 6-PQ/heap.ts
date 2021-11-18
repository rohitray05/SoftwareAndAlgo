import { Job } from "./task-interface";


/* Create Heap Class with heap as the storage or array representation 
of Heap */

export class Heap {
    heap:Array<Job>
    comparator:Function
    constructor(comparator:Function) {
      this.heap = [];
      /* Comparator Function is passed as to decide the priority */
      this.comparator = (j1:number, j2:number) => {
        const value = comparator(this.heap[j1], this.heap[j2]);
        return value;
      }
    }
    
    /* Value Adding to Heap */
    add(value:Job):void{
        this.heap.push(value);
        /*Heapify Up to check if new node added is according to min Heap  */
        this.heapifyUp();
    }

    remove(index = 0):Job{
        if (!this.size) return null;
        /* Swap the node with the last element and then traverse down */
        this.swap(index, this.size - 1); 
        const value = this.heap.pop();
        this.heapifyDown(index);
        return value;
    }

    get size() {
        return this.heap.length;
    }

    heapifyUp() {
        let index = this.size - 1;
        const parent = (i:number) => Math.ceil(i / 2 - 1);
        /* Iterate the loop till the lowest is on top or root or parent node should be small */
        while (parent(index) >= 0 && this.comparator(parent(index), index) > 0) {
          this.swap(parent(index), index);
          index = parent(index);
        }
    }

    heapifyDown(index = 0) {
        let curr = index;
        /* Left child Index and Right Child Index calculation */
        const LeftIndex = (i:number) => 2 * i + 1;
        const RightIndex = (i:number) => 2 * i + 2;
        const getTopChild = (i:number) => (RightIndex(i) < this.size
          && this.comparator(LeftIndex(i), RightIndex(i)) > 0 ? RightIndex(i) : LeftIndex(i));
        /* This checks while removing the value from Heap and then replacing the root with smallest priority number */
        while (LeftIndex(curr) < this.size && this.comparator(curr, getTopChild(curr)) > 0) {
          const next = getTopChild(curr);
          this.swap(curr, next);
          curr = next;
        }
    }

    /* Simple Swap function  */
    swap(j1:number, j2:number) {
        [this.heap[j1], this.heap[j2]] = [this.heap[j2], this.heap[j1]];
    }
}