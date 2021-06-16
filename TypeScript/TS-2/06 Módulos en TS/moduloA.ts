export const nombre:string = 'Billy';


class Person{
    name:string
    surname:string
    age:number

    constructor(name, surname, age){
        this.name = name
        this.surname = surname
        this.age = age
    }

    info():void{
        console.log(this.name);
    }
}

export interface Human{
    name:string
}

export const show = ():void => {
    console.log('Showing')
}



export default Person;