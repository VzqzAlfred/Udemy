let time = 3000,
    timeCurrent = 0,
    IntervalTime = 50,
    porcien = 0;


const porcent = p => {
    process.stdout.clearLine();
    process.stdout.cursorTo(0);
    process.stdout.write("Porcent: " +p+"%");
}

const interval = setInterval(() => {
    timeCurrent += IntervalTime;
    porcien = Math.floor((timeCurrent/time)*100);

    porcent(porcien)
    const day = new Date().toLocaleTimeString();
    
    // console.log(day);
}, IntervalTime);

setTimeout(() => {
   clearInterval(interval);
   porcent(100); 
   console.log("\n End! \n");
}, time);

porcent(porcien);