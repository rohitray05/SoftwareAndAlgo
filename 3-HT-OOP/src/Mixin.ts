import { Page } from "./Page";
import { Pages } from "./Pages";

export class Mixin implements IterableIterator<String> {
    private pointer = 0;
    constructor(public title:string,public author:string,public pages: Pages,public type:string) {}
    public next(): IteratorResult<String> {
      if (this.pointer < this.pages.length) {
        return {
          done: false,
          value: `${this.type}: ${this.title} by ${this.author} with number of pages: ${this.pages.length},  ${this.pages[this.pointer++].toString()}`
        } 
      }else{
        return {
          done: true,
          value: null
        }
      } 
     
    }
  
    [Symbol.iterator](): IterableIterator<String> {
      return this;
    }
    
  }


 /*  class Book extends Mixin{
      constructor(title:string,author:string,pages: Pages){
        super(title,author,pages,'Book')
      }
  }  */

/*   const book = new Book('Harry Potter', 'J. K. Rowling', new Pages([
    new Page(1, 'with text', 'simple paper'),
    new Page(2, 'with text', 'simple paper'),
    new Page(3, 'with text', 'simple paper'),
    new Page(4, 'with text', 'simple paper')
  ]));
  
  for (const page of book) {
   console.log(page);
  } */