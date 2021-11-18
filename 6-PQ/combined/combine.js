class Heap {
    heap
    comparator
    constructor(comparator) {
      this.heap = [];
      this.comparator = (j1, j2) => {
        const value = comparator(this.heap[j1], this.heap[j2]);
        return value;
      }
    }

    add(value){
        this.heap.push(value);
        this.heapifyUp();
    }

    peek() {
        return this.heap[0];
    }

    remove(index = 0){
        if (!this.size) return null;
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
        const parent = (i) => Math.ceil(i / 2 - 1);
        while (parent(index) >= 0 && this.comparator(parent(index), index) > 0) {
          this.swap(parent(index), index);
          index = parent(index);
        }
        /* for(let i = 0;i<this.heap.length;i++){
            console.log(this.heap[i].priority + ' index: ' + i)
        } */
    }

    heapifyDown(index = 0) {
        let curr = index;
        const LeftIndex = (i) => 2 * i + 1;
        const RightIndex = (i) => 2 * i + 2;
        const getTopChild = (i) => (RightIndex(i) < this.size
          && this.comparator(LeftIndex(i), RightIndex(i)) > 0 ? RightIndex(i) : LeftIndex(i));
    
        while (LeftIndex(curr) < this.size && this.comparator(curr, getTopChild(curr)) > 0) {
          const next = getTopChild(curr);
          this.swap(curr, next);
          curr = next;
        }
    }

    swap(i1, i2) {
        [this.heap[i1], this.heap[i2]] = [this.heap[i2], this.heap[i1]];
    }
}



class PriorityQueue extends Heap{
    constructor(iterable = [], comparator = (a, b) => a.priority - b.priority) {
        super(comparator);
        Array.from(iterable).forEach((el) => {
            //console.log(el.title + ' with Priority ' + el.priority)
            this.add(el)
        });
    }

    enqueue(value){
        super.add(value);
    }

    dequeue(){
        let obj = super.remove()
        console.log(obj.title + ' with Priority as ' + obj.priority);
    }
}

class Runner {
    jobs = []
    constructor(){
     this.generateJobs()
     let queue = new PriorityQueue(this.jobs,(x, y) => (x.priority-y.priority))
     this.executeJobs(queue)
    }
    
    generateJobs(){
     for(let i=0;i<10;i++){
         let obj = {
             title:`Job${i}`,
             priority:this.randomPriorityGenerator()
         }
        this.jobs.push(obj)
     }
    }

    randomPriorityGenerator(){
        return Math.floor(Math.random()*1000)
    }

    executeJobs(queue){
        console.log('----Output----')
        for(let i=0;i<10;i++){
            queue.dequeue()
        }
    }
}


const newJob = new Runner()