const a = [1,4,5,7,12, 19, 45, 101];

let b = a.filter((x)=>{
    let formula = (x*2)-(5-x);
    if( formula % 2 == 0 ){
        return x
    }
})

console.log(b);