function calcluatesum(inputnumber){
      const convertstring = inputnumber.toString();
      const dividenumber = convertstring.split('');
      let sum = 0;
      dividenumber.forEach(num =>{
               
        sum = sum + parseInt(num); 
      });

      return sum;
}
console.log(calcluatesum(33));