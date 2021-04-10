const hourDay = (hour=undefined) => {
    if(!hour || isNaN(hour) || typeof(hour) !== "number"){
        console.log("You have to type a number as a hour.");
    }else if(hour >= 0 && hour <= 6){
        console.log("Please, let me sleep.");
    }else if(hour >= 7 && hour <= 11){
        console.log("Good morning friend.");
    }else if(hour >= 12 && hour <= 18){
        console.log("Goord after");
    }else if(hour >= 19 && hour <= 24){
        console.log("Good night");
    }else{
        console.log("The time is in format 24 hours");
    }
}

hourDay(5);
hourDay(60);

let day = new Date();
console.log(day.toUTCString());