export interface CurrencyExchangeValue {
    EUDM?:number,
    EUBEL?:number,
    EUFR?:number,
    EUIR?:number,
    EUIT?:number,
    EUUS?:number,
    EURS?:number
}

export interface RadioButton{
    mode:string,
    label:string,
    attributes:{
        type:string,
        id:string,
        name:string,
        value:string
    }
}

export interface Currency{
    currency:string,
    id:string,
}

interface CurrencyPacket{
    baseCountry:string,
    baseCurrency:string,
    targetCurrency:string,
    targetCountry:string,
    id:string,
    blocks:Array<Currency>
}


export interface CurrencyTypes {
    id:string,
    currencyBlock:Array<CurrencyPacket>
}

export interface DisplayLayout{
    createCurrencyLayout(callback:Function,currencyExchnage:CurrencyTypes,mode:string):DocumentFragment

}



