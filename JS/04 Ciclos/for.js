/* Ciclo For */
for(let i = 9; i >= 0; i--){
    console.log(i+1);
}
console.log("\n");


for(let i = 1; i<100; i++){
    if(i % 3 === 0){
        console.log(i);
        continue;
    }
}