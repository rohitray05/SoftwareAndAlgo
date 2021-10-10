import { Page } from "./Page";
import { Pages } from "./Pages";

class Magazines implements IterableIterator<String> {
  private pointer = 0;
  constructor(public title:string,public author:string,public pages: Pages) {}
  public next(): IteratorResult<String> {
    if (this.pointer < this.pages.length) {
      return {
        done: false,
        value: `Magazine: ${this.title} ${this.author? 'by' + this.author:''} with number of pages: ${this.pages.length},  ${this.pages[this.pointer++].toString()}`
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



