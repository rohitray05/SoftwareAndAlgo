/* if(document.getElementById('gender_Male').checked) {
  //Male radio button is checked
}else if(document.getElementById('gender_Female').checked) {
  //Female radio button is checked
} */

const exchangeRates = {
  DEM:1.95583,
  BelgFranc:40.3399,
  FranzFranc:6.55957,
  IrPfund:0.787564,
  ItalLira:1936.27,
  USDollar:1.1561608
}

class View {
  constructor() {
   //this.initExchangeRate()
  }

  initExchangeRate(){
    console.log(((document.getElementById("dmamount") as HTMLInputElement).value))
  }

}

new View().initExchangeRate()