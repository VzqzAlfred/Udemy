class Person{
    private name:string;

    constructor(name:string){
        this.name = name;
    }

    getName():string{
        return this.name;
    }

    static metodoEstatico():number{
        return 10;
    }
}

let person1 = new Person("Billy");
console.log(person1.getName());
console.log(Person.metodoEstatico());
