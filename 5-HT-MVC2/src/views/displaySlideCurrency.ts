import { CurrencyTypes, DisplayLayout } from "../services/service";

export class DisplaySlideCurrency implements DisplayLayout{
    constructor(){}
    createCurrencyLayout(callback:Function,currencyExchnage:CurrencyTypes,mode:string):DocumentFragment{
        let docFrag = document.createDocumentFragment();
        currencyExchnage.currencyBlock.forEach(element=>{
            let mainDiv = callback('div')
            mainDiv.setAttribute('id',currencyExchnage.id)
            let h4 = callback('h4')
            h4.innerHTML = element.targetCountry
            mainDiv.appendChild(h4)
            let span = callback('span')
            span.innerHTML = `1 ${element.baseCurrency} is  2 DM`
            let divId = callback('div')
            divId.setAttribute('id',element.id)
            mainDiv.appendChild(span)
            element.blocks.forEach(data=>{
                let div = callback('div')
                let span  = callback('span')
                span.innerHTML = `${data.currency}: 0`
                span.setAttribute('id',`dis${mode}${data.id}`)
                let input  = callback('input')
                input.setAttribute('id',`${mode}${data.id}`)
                input.setAttribute('type','range')
                input.setAttribute('name',data.currency)
                input.setAttribute('min',0)
                input.setAttribute('max',10000)
                input.setAttribute('value',0)
                input.setAttribute('step',0.005)
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