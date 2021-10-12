export class Page {
    private pageNumber: number;
    private pageType:string;
    private pageMaterial:string;

    constructor(pageNumber:number,pageType:string,pageMaterial:string){
    this.PageNumber = pageNumber;
    this.PageType = pageType;
    this.PageMaterial = pageMaterial;
    }
    
    get PageNumber():number{
      return this.pageNumber;
    }

    set PageNumber(pageNumber:number){
     this.pageNumber=pageNumber
    }

    get PageType():string{
      return this.pageType;
    }

    set PageType(pageType:string){
     this.pageType=pageType
    }

    get PageMaterial():string{
        return this.pageMaterial;
    }
  
    set PageMaterial(pageMaterial:string){
       this.pageMaterial=pageMaterial;
    }

    public toString():string{
      return `here is page ${this.PageType} #${this.PageNumber} and it's material is ${this.PageMaterial}`
    }
}