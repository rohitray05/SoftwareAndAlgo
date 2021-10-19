import { Shipment, State } from "./Shipment";

interface GUI {
  state: State;
  marking:string;
}

function Marking(specialCode: SpecialCode<any>) {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        let originalMethod = descriptor.value;
        descriptor.value = function (...args: any[]) {
            let result = originalMethod.apply(this, args);
            specialCode.onMethodInvoked(result);
            return result;
        }
    }
}

interface SpecialCode<T> {
    onMethodInvoked(result: T): void;
}

class Mark implements SpecialCode<any> {
    onMethodInvoked(specialCode: string): void {
        console.log(`**${specialCode}**`);
    }
}

export class Client{
    shippingResult:string;
    
    constructor(gui:GUI){
     this.onShip(new Shipment(gui.state),gui.marking)
    }
    
    onShip(shipment:Shipment,marking:String){
     this.shippingResult = shipment.ship();
     this.display(marking);
    }
    
    @Marking(new Mark())
    display(marking:String):any{
     console.log(this.shippingResult)
     return `${marking}`
    }
    
}


/* 
●	Air East: Based in Atlanta
●	Chicago Sprint: Based in a suburb of Chicago
●	Pacific Parcel: Based in San Diego
*/