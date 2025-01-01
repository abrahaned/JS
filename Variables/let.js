let x = 22;
console.log(window.x);  //undefined

if(x == 22){
    let x = 23;
    console.log(x);//23
}

console.log(x);//22

let y = "y";
console.log(y);//y
if(y == "y"){
    y = "z"
}

console.log(y);//z