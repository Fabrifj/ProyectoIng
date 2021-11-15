export class Vehicle {
    public Id: number;
    public Nombre: string;
    public Desc: string;


  
    constructor(id:number,name: string, desc: string) {
      this.Id = id;
      this.Nombre = name;
      this.Desc = desc;
    
    }
  }