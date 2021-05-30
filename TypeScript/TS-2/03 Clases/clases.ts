class Vehiculo{

    marca:string
    fecha:string
    puertas:number
    
    constructor(marca_:string, fecha_:string, puertas_:number){
        this.marca = marca_;
        this.fecha = fecha_;
        this.puertas = puertas_;
    }

    acelerar():void{
        console.log(this.marca + " " + "Acelerando...");
        
    }

    frenar():void{
        console.log("Frenando...");
        
    }
}

const coche = new Vehiculo("Volkswagen", "12/01/1925", 4);

coche.acelerar();