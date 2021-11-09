
import {CurrencyTypes, DisplayLayout} from '../services/service'

export class DisplayTextCurrency implements DisplayLayout{
  constructor(){}
  createCurrencyLayout(callback:Function,currencyExchnageLayout:CurrencyTypes,mode:string):DocumentFragment{
    let docFrag = document.createDocumentFragment();
    currencyExchnageLayout.currencyBlock.forEach(element=>{
        let mainDiv = callback('div')
        mainDiv.setAttribute('id',currencyExchnageLayout.id)
        let h4 = callback('h4')
        h4.innerHTML = element.targetCountry
        mainDiv.appendChild(h4)
        let span = callback('span')
        let input  = callback('input')
        input.setAttribute('name','amount')
        input.setAttribute('type','number')
        input.setAttribute('id',element.targetCurrency)
        span.innerHTML = `1 ${element.baseCurrency} is `
        span.appendChild(input)
        span.appendChild(document.createTextNode(' DM'))
        let divId = callback('div')
        divId.setAttribute('id',element.id)
        mainDiv.appendChild(span)
        element.blocks.forEach(data=>{
            let div = callback('div')
            let span  = callback('span')
            span.setAttribute('id',`dis${mode}${data.id}`)
            span.innerHTML = data.currency
            let input  = callback('input')
            input.setAttribute('id',`${mode}${data.id}`)
            input.setAttribute('type','number')
            input.setAttribute('name',data.currency)
            div.appendChild(span)
            div.appendChild(input)
            divId.appendChild(div)
        })
        mainDiv.appendChild(divId)
        docFrag.appendChild(mainDiv)
    })
    return docFrag
  }
}