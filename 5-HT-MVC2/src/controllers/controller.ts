import { Model } from "../models/model"
import { CurrencyTypes, RadioButton } from "../services/service"
import { View } from "../views/view"


export class Controller{
   model:Model
   view:View
   radios:Array<RadioButton>
   currencyExchnage:CurrencyTypes
   constructor(model:Model,view:View){
       this.model = model
       this.view = view
       this.radios =  [
        {
            mode:'text',
            label:'Text Input',
            attributes:{
                type:'radio',
                id:'text',
                name:'mode',
                value:'text'
            }
        },
        {
            mode:'slide',
            label:'Slide Input',
            attributes:{
                type:'radio',
                id:'slide',
                name:'mode',
                value:'slide'
            }
        }
     ]

     this.currencyExchnage = {
        id:'Currency',
        currencyBlock:[
            {
              baseCountry:'EU',
              baseCurrency:'EURO',
              targetCurrency:'DM',
              targetCountry:'GER',
              id:'rate',
              blocks:[
                  {
                    currency:'EURO',
                    id:'EUDM',
                  },
                  {
                    currency:'DM',
                    id:'DMEU',
                  }
              ]
            },
            {
                baseCountry:'EU',
                baseCurrency:'EURO',
                targetCurrency:'RS',
                targetCountry:'IND',
                id:'rate',
                blocks:[
                    {
                      currency:'EURO',
                      id:'EURS',
                    },
                    {
                      currency:'RS',
                      id:'RSEU',
                    }
                ]
              }
           ]
        
        }
    this.init()
    this.checkChange()
   }

   init():void{
      this.view.init(this.radios,this.currencyExchnage)
   }

   checkChange():void{
    this.radios.forEach(element=>{
        this.view.checkCurrencyExchange(element.mode,this.currencyExchnage,this.model.getAmount)
    })
    this.view.checkMode(this.radios)
   }
}