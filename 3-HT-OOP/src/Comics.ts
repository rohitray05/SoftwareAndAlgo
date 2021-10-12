import { Mixin } from "./Mixin";
import { Pages } from "./Pages";

class Comics extends Mixin{
    constructor(title:string,author:string,pages: Pages){
      super(title,author,pages,'Comics')
    }
  } 
