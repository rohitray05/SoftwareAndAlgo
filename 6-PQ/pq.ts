import {Heap} from './heap'
import { Job } from './task-interface';

export class PriorityQueue extends Heap{
    constructor(iterable = [], comparator = (a:Job, b:Job) => a.priority - b.priority) {
        super(comparator);
        Array.from(iterable).forEach((el) => this.add(el));
    }
    enqueue(value:Job):void{
        super.add(value);
    }
    dequeue():string{
        return super.remove().title;
    }
}

