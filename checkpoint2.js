let tab1 = [1, 2, -1, -2]
let tab2 = [1, 2, 1, 2]
let total = 0

for(let i = 0; i <tab1.length; i++){
    total += tab1[i] * tab2[i]
}

if(total == 0){
    console.log("octogonal")
}else console.log("non octogonal")