// to check a string is palindrome or not?
/*
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
*/

 // while using two pointers

 function isPalindrome(str){

 let left  = 0 ;
 let right = str.length-1;

 while(left < right)
    {

    if(str[left] !== str[right])
    {

      return false;
    }

     left++;
     right--;
    } 

    return true;

}

console.log(isPalindrome("madam"));        // return true
console.log(isPalindrome("toot"));        // return true
console.log(isPalindrome("ten"));        // return false