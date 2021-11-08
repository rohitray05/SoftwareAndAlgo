import { CurrencyTypes, RadioButton } from "../services/service"
import { DisplaySlideCurrency } from "./displaySlideCurrency"
import { DisplayTextCurrency } from "./displayTextCurrency"


export class View {
    app: HTMLElement
    radios:Array<RadioButton>
    currencyExchnage:CurrencyTypes
    constructor(){
        this.app = this.getElement('#root')
        this.app.appendChild(this.createHeader('Currency Converter',this.radios,'radio-btn'))      
    }
    
    init(radios:Array<RadioButton>,currencyExchangeLayout:CurrencyTypes):void{
      this.modeSelection(radios[0].attributes.id)
      this.displayExchange(radios[0].mode,radios,currencyExchangeLayout)
    }

    createElement(element:any){
        return document.createElement(element)
    }

    getElement(selector:any) {
        const element = document.querySelector(selector)
        return element
    }
    
    createHeader(headerName:string,radios:Array<RadioButton>,id:string):HTMLElement{
        const header = this.createElement('header')
        const h3 = this.createElement('h3')
        h3.innerHTML  = headerName
        const div  = this.createElement('div')
        div.setAttribute('id', `${id}`)
        div.setAttribute('class','radio')

        radios.forEach(element => {
           let input = this.createElement('input') 
           let label = this.createElement('label')
           label.setAttribute('for',`${element.attributes.id}`)
           label.innerHTML  = element.label
           for (const [key, value] of Object.entries(element.attributes)) {
               input.setAttribute(`${key}`,`${value}`)
          }
          div.appendChild(input)
          div.appendChild(label)
        });
        header.appendChild(h3)
        header.appendChild(div)
        return header
    }

    modeSelection(mode:string):void{
     let selectedMode = this.getElement(`#${mode}`)
     selectedMode.setAttribute('checked',true)
    }    

    checkMode(radios:Array<RadioButton>):void{
        radios.forEach(element=>{
          let currentElement = this.getElement(`#${element.mode}`)
          currentElement.addEventListener("change", ()=>{
            let id = currentElement.attributes.id.nodeValue
            this.getElement(`#mode${id}`).removeAttribute('style')
            radios.forEach(radio=>{
              if(radio.mode!=id){
                this.getElement(`#mode${radio.mode}`).style.display = "none"  
              }
            })
          });
        })
    }

    displayExchange(mode:string,radios:Array<RadioButton>,currencyExchnageLayout:CurrencyTypes):void{
      const layoutdiv = this.createElement('div')
      layoutdiv.setAttribute('id','layout')
      radios.forEach(element=>{
        const div  = this.createElement('div')
        div.setAttribute('id',`mode${element.mode}`)
        div.setAttribute('class',element.mode)
        div.style.display = "none"
        if(element.mode ==='text'){
            let layout = new DisplayTextCurrency()
            div.appendChild(layout.createCurrencyLayout(this.createElement,currencyExchnageLayout,element.mode))
        }else{
          let layout = new DisplaySlideCurrency()
          div.appendChild(layout.createCurrencyLayout(this.createElement,currencyExchnageLayout,element.mode))
        }
        layoutdiv.appendChild(div)
        this.app.appendChild(layoutdiv)
      })
      this.getElement(`#mode${mode}`).removeAttribute("style")
    }

     checkCurrencyExchange(mode:string,currencyExchangeLayout:CurrencyTypes,callback:Function):void{
      currencyExchangeLayout.currencyBlock.forEach(element=>{
          this.getElement(`#${element.targetCurrency}`).value = callback(1,`${element.baseCountry}${element.targetCurrency}`)
            this.getElement(`#${mode}${element.blocks[0].id}`).addEventListener("input", ()=>{
            this.getElement(`#${mode}${element.blocks[1].id}`).value = callback(this.getElement(`#${mode}${element.blocks[0].id}`).value,`${element.baseCountry}${element.targetCurrency}`)
          });
            this.getElement(`#${mode}${element.blocks[0].id}`).addEventListener("input", ()=>{
            this.getElement(`#dis${mode}${element.blocks[0].id}`).innerHTML = `${element.blocks[0].currency}: `+ this.getElement(`#${mode}${element.blocks[0].id}`).value
            this.getElement(`#dis${mode}${element.blocks[1].id}`).innerHTML = `${element.blocks[1].currency}: `+ callback(this.getElement(`#${mode}${element.blocks[0].id}`).value,`${element.baseCountry}${element.targetCurrency}`)
          });
        })
     }

}