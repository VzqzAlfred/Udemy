class Animal{
    public nombre:string;
    public tamanio:number;

    public constructor(_nombre:string, _tamanio:number){
        this.nombre = _nombre;
        this.tamanio = _tamanio;
    }

    public moverse():void{
        console.log("Me estoy moviendo");
    }
}

const anim = new Animal("Serpiente", 3);
anim.moverse();
anim.nombre;
anim.tamanio





class Animales{
    private nombre:string;
    private tamanio:number;

    public constructor(_nombre:string, _tamanio:number){
        this.nombre = _nombre;
        this.tamanio = _tamanio;
    }

    public moverse():void{
        console.log("Me estoy moviendo");
    }
}

const a = new Animales("Ratón", 0.5);
a.moverse();