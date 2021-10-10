
  class Controller{  
     constructor(view,model){
     this.view = view
     this.model = model
     this.initializeView()
     this.checkChange()
     }
     
     initializeView(){
        this.view.initialLoad(this)
        this.view.checkMode()
     }
     
     checkChange(){
        this.view.checkInput(this)
        this.view.checkValue(this)
     }
     
     getAmt(currency,amt){
        return this.model.getExchangeAmount(currency,amt)
     }
     

  }

  class Model{
    exchangeRates = {
        EUDM:1.95583,
        EUBEL:40.3399,
        EUFR:6.55957,
        EUIR:0.787564,
        EUIT:1936.27,
        EUUS:1.1561608
      }
      constructor(){}
      getExchangeAmount(currency,amt){
        return  amt * this.exchangeRates[currency]
      }
  }

  class View {
    constructor() {}

    initialLoad(callback){
     document.getElementById("text").checked = true;
     document.getElementById("mode2").style.display = "none"
     document.querySelector("#dm").value = callback.getAmt('EUDM',1)
     document.querySelector("#belfranc").value = callback.getAmt('EUBEL',1)
     document.querySelector("#franzfranc").value =callback.getAmt('EUFR',1)
     document.querySelector("#irPfund").value = callback.getAmt('EUIR',1)
     document.querySelector("#italLira").value = callback.getAmt('EUIT',1)
     document.querySelector("#usDollar").value = callback.getAmt('EUUS',1)
     document.querySelector("#mode2-dm").innerHTML = `1 Euro is ${callback.getAmt('EUDM',1)} DM`
     document.querySelector("#mode2-us").innerHTML = `1 Euro is ${callback.getAmt('EUUS',1)} US Dollar`
     document.querySelector("#mode2-EUDM").innerHTML = `Euro: ${0}`
     document.querySelector("#mode2-DMEU").innerHTML = `DM: ${0.0}`
     document.querySelector("#mode2-EUUS").innerHTML = `Euro: ${0}`
     document.querySelector("#mode2-USEU").innerHTML = `US: ${0.0}`
    }

     
    checkInput(callback){
        /* document.body.onmouseup = function (event) {
            var target = event.target || event.toElement;
            console.log(target.nodeName.toLowerCase())
            console.log(target.childNodes)
        }; */
        document.getElementById("EUDM").addEventListener("input", ()=>{
            document.getElementById("DMEU").value = callback.getAmt('EUDM',document.getElementById("EUDM").value)
        });
        document.getElementById("EUBEL").addEventListener("input", ()=>{
            document.getElementById("BELEU").value = callback.getAmt('EUBEL',document.getElementById("EUBEL").value)
        });
        document.getElementById("EUFR").addEventListener("input", ()=>{
            document.getElementById("FREU").value = callback.getAmt('EUFR',document.getElementById("EUFR").value)
        });
        document.getElementById("EUIR").addEventListener("input", ()=>{
            document.getElementById("IREU").value = callback.getAmt('EUIR',document.getElementById("EUIR").value)
        });
        document.getElementById("EUIT").addEventListener("input", ()=>{
            document.getElementById("ITEU").value = callback.getAmt('EUIT',document.getElementById("EUIT").value)
        });
        document.getElementById("EUUS").addEventListener("input", ()=>{
            document.getElementById("USEU").value = callback.getAmt('EUUS',document.getElementById("EUUS").value)
        });
    }

    checkMode(){
        document.getElementById("text").addEventListener("change", ()=>{
            document.getElementById("mode2").style.display = "none"
            document.getElementById("mode1").removeAttribute("style");
        });
        document.getElementById("slide").addEventListener("change", ()=>{
            document.getElementById("mode1").style.display = "none"
            document.getElementById("mode2").removeAttribute("style");
        });
    }
    
    /* oninput="document.getElementById('mode2-EUDM').innerHTML = 'Euro: '+ this.value" */
    checkValue(callback){
        document.getElementById("mode2-REUDM").addEventListener("input", ()=>{
            document.getElementById('mode2-EUDM').innerHTML = 'Euro: '+ document.getElementById("mode2-REUDM").value
            document.getElementById('mode2-DMEU').innerHTML = `DM: ${callback.getAmt("EUDM",document.getElementById("mode2-REUDM").value)}`
            document.getElementById('mode2-RDMEU').value = callback.getAmt("EUDM",document.getElementById("mode2-REUDM").value)
        });
        document.getElementById("mode2-REUUS").addEventListener("input", ()=>{
            document.getElementById('mode2-EUUS').innerHTML = 'Euro: '+ document.getElementById("mode2-REUUS").value
            document.getElementById('mode2-USEU').innerHTML = `US: ${callback.getAmt("EUUS",document.getElementById("mode2-REUUS").value)}`
            document.getElementById('mode2-RUSEU').value = callback.getAmt("EUUS",document.getElementById("mode2-REUUS").value)
        });
    }

  }
  
  
new Controller(new View(),new Model())