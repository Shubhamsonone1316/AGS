var a=10;
var b=30;
var c=34;
var re = "";
if(a > b && a>c){
     re =  a;
}
else if(b > a && b >c)
{

      re =b; 
}
else if(c >a && c>b) 
{ 
     re = c;
}

console.log(re);



value = [0,40,50]

console.log(Math.max(...value));


// using array 

var a = [40,50,70]

var max = a[0];

for(var i = 0; i < a.length; i++){
    
    if(a[i] > max){
        max = a[i];
    }
}
console.log(max)