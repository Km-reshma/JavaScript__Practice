// to check a string is palindrome or not?

let str= "madam";
rev_str ="";

for(let i =str.length-1; i>=0; i--){

    rev_str += str[i];
}

if(str === rev_str){

    console.log("str is palindrome");
        
    }
 else{
     console.log("str is not palindrome");
    
 }                                              // str is plindrome