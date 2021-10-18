import { Shipper } from "./Shipper";

export interface State {
    shipmentId: number;
    toAddress: string;
    fromAddress: string;
    toZipCode: string;
    fromzipCode: string;
    weight: number;
    marks: Array<string>;
}

export class Shipment{
    private _shipmentId: number;
    private _toAddress: string;
    private _fromAddress: string;
    private _toZipCode: string;
    private _fromzipCode: string;
    private _weight: number;
    private _marks: Array<string>;
    private _cost:number;

    constructor(state:State){
        this.toAddress = state.toAddress;
        this.fromAddress = state.fromAddress;
        this.toZipCode = state.toZipCode;
        this.fromzipCode = state.fromzipCode;
        this.weight = state.weight;
        this.marks = state.marks;
        this.shipmentId= state.shipmentId;
    }
    public get shipmentId(): number {
        return this._shipmentId;
    }
    public set shipmentId(value: number) {
        if(!value){
            this._shipmentId=Math.floor(Math.random() * 100);
        }
    }
  
    public get toAddress(): string {
        return this._toAddress;
    }
    public set toAddress(value: string) {
        this._toAddress = value;
    }
  
    public get fromAddress(): string {
        return this._fromAddress;
    }
    public set fromAddress(value: string) {
        this._fromAddress = value;
    }
  
    public get toZipCode(): string {
        return this._toZipCode;
    }
    public set toZipCode(value: string) {
      let max_chars = 5;
      if(value.length > max_chars) {
        this._toZipCode = value.substr(0, max_chars);
      }else{
        this._toZipCode = value;
      }
    }
  
    public get fromzipCode(): string {
        return this._fromzipCode;
    }
    public set fromzipCode(value: string) {
        let max_chars = 5;
      if(value.length > max_chars) {
        this._fromzipCode = value.substr(0, max_chars);
      }else{
        this._fromzipCode = value;
      }
    }
  
    public get weight(): number {
        return this._weight;
    }
    public set weight(value: number) {
        this._weight = value;
        this._cost = value * 0.39 ;
    }
  
    public get marks(): Array<string> {
        return this._marks;
    }
    public set marks(value: Array<string>) {
        this._marks = value;
    }
  
    public ship():string{
        this._cost = new Shipper().getCost(this._fromzipCode,this._weight)
        return `the shipment ID : ${this.shipmentId}, item sent from ${this.fromAddress}, it is going ${this.toAddress}, and how much the cost is ${this._cost}`
    }
}