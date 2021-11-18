import { PriorityQueue } from "./pq"
import { Job } from "./task-interface"

class JobRunner {
    jobs:Array<Job> = []
    numberOfJobs:number;
    constructor(numberOfJobs:number){
     this.numberOfJobs = numberOfJobs
     this.init()
    }
    init(){
     this.generateJobs()
     let queue = new PriorityQueue(this.jobs,(x:Job, y:Job) => (x.priority-y.priority))
     this.executeJobs(queue)
    }

    generateJobs():void{
     for(let i=0;i<this.numberOfJobs;i++){
         let obj = {
             title:`Job#${i}`,
             priority:this.randomPriorityGenerator()
         }
        this.jobs.push(obj)
     }
    }

    randomPriorityGenerator():number{
        return Math.floor(Math.random()*this.numberOfJobs)
    }

    executeJobs(queue:PriorityQueue):void{
        for(let i=0;i<this.numberOfJobs;i++){
            queue.dequeue()
        }
    }
}

const job = new JobRunner(1000)

