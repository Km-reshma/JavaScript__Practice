function validStringParan(str){

    let stack =[];

    for (let i =0; i< str.length; i++){

    if(str[i]==="("  ||  str[i]==="["  || str[i]==="{" ){                  // opening bracket ko add krte krte raho 
        stack.push(str[i]);
    }

    else { // closing bracket jese aaye then

        if (stack.length === 0) {                                  // to chec if stack has no element means emoty

            return false ;
        }

        
        let top = stack[stack.length-1];
        if(  (str[i] === ')' && top === '(') ||                                // if match open and closing bracket then pop openinig bracket 
             (str[i] === '}' && top === '{') ||
             (str[i] === ']' && top === '[')  ){

                stack.pop();
             }

        else{
             return false;
        }     

    }

}  
        return stack.length === 0;                                     // after loop if stack empty return true 


}


console.log(validStringParan("({[()]})"));   

console.log(validStringParan("({[)]})")); 

console.log(validStringParan("({")); 

console.log(validStringParan(")]})")); 

console.log(validStringParan("((]")); 

console.log(validStringParan("()[]()")); 
