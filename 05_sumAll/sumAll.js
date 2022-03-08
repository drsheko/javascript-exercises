const sumAll = function getSum(a,b) {
    let sum = b ;

   
    for(let i=a ; i<b ;i++){
        
         sum+= i ;
    }
    alert(sum)
};

getSum(1,4)



// Do not edit below this line
module.exports = sumAll;
