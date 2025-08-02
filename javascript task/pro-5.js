// write a function revere string 
function reverstrsing(inputstring){

    let result = ""
    for(let i = inputstring.length -1; i >= 0;  i--){
         console.log(inputstring[i]);

         result =  result +  inputstring[i];

 }
        return result;
}


    
    console.log(reverstrsing('Avi'));


   
function reverdemo(demo){
    ddd = demo.split('');
   const vaa = ddd.reverse();
   const vaa1 = vaa.join('');
   console.log(vaa1);
}
console.log(reverdemo('deva'));