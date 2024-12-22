const arry = [10, 20, 30, 40];
const newArry = [];

for(let a = 0; a < arry.length; a++){
    const val = arry[a] * 2;
    if(val > 50){
        newArry.push(arry[a]* 99);
    }
    
}

console.log(newArry);

const newArry2 = arry.map((zol) => {
    return zol * 2 ;
});

// const newArry2 = arry.map(val => val * 2).filter(val => val > 50);
// const newArry3 = newArry2.filter(val => val > 50);
console.log(newArry2);
