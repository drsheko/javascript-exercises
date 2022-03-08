let string = 'shady';
const reverseString = function(string) { 
    
    
    let newstring= "" ;
      for( let i=1 ; i<=string.length ; i++){
          newstring += string[string.length-i] ;
 
        
 }
      alert(newstring)
}

// Do not edit below this line
module.exports = reverseString;
