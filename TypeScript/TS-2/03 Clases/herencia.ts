class Padre{
    nombre:string
    edad:number
    constructor(_nombre:string, _edad:number){
        this.nombre = _nombre;
        this.edad = _edad;
    }

    showName():void{
        console.log(`${this.nombre}`);
    }
}

class Son extends Padre{
    
    apellido:string
    constructor(_nombre:string, _edad:number, _apellido:string){
        super(_nombre, _edad);
        this.apellido = _apellido;
    }

    showNameSon():void{
        console.log(`${this.nombre} ${this.apellido}`);   
    }
}

const newSon = new Son("Billy", 35, "Buttler");

newSon.showNameSon();