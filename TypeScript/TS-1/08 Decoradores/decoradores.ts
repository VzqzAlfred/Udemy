function Greeting(target: Function): void{
    target.prototype.greeting = function():void{
        console.log("Hi from Decoration");
    }
}

@Greeting
class Hello{
    constructor(){}
}

let hi1 = new Hello();

hi1.greeting();