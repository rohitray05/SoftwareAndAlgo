import { CurrencyExchangeValue } from "../services/service";

export class Model{
   rates:CurrencyExchangeValue = null;
   constructor(){
    this.rates = {
        EUDM:1.95583,
        EUBEL:40.3399,
        EUFR:6.55957,
        EUIR:0.787564,
        EUIT:1936.27,
        EUUS:1.1561608,
        EURS:85.74
    }
   }
   
   getAmount(amt:number,exchange:string):number{
      return amt*this.rates[exchange]
   }

}