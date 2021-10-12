import { Page } from "./Page";

export class Pages extends Array<Page>{
 constructor(page:Page[]){
     super()
     this.addPage(page) 
 }
 addPage(page:Page[]){
   page.forEach(data=>this.push(data))  
 } 
}


