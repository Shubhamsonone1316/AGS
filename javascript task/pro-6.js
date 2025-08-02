function fatcroical(inputnumber)
{ 
    if(inputnumber < 0 ){
        throw new Error('invald')
    }
    let result = 1;
     for(let i = 1; i <= inputnumber; i++){
        result = result * i;
        // 1*1 = 1
        // 2*1 = 2
        // 3*2 = 6s
     }
     return result; 
}


console.log(fatcroical(-1));