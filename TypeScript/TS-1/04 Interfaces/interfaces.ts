interface User{
    nameUser:string;
    password:string;
    confirmPassword?:string;    // '?' indica que es opcional
}

let user1:User = {nameUser: 'John', password: "123", confirmPassword: "123"}

console.log(user1);
console.log(user1.nameUser);

interface Abordar{
    abordarTransporte():void;
}

let avion:Abordar = {
    abordarTransporte: function(){
        console.log("Abordando");
    }
}

avion.abordarTransporte();