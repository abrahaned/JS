function sum(...theArgs){
    let total = 0;
    for(const arg of theArgs){
        total += arg;
    }

    return total;
}

let total = sum(1,2,3);

console.log(total);