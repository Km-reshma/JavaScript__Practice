// ______________________Check if a number is positive, negative, or zero____________________________________________
/*
let num=-5;
if(num>0){
    console.log("Number is Positive");
}
else if(num<0){
    console.log("Number is Negative");
}
else{
    console.log("Number is zero");
}
// output : Number is Negative
*/

/*//_________________________ Check if a number is even or odd  ____________________________________

let num=121;
if(num%2==0){
    console.log("Number is Even");
}
else{
    console.log("Number is Odd");
}                                                // Number is Odd  */

/*//_____________________________Find the largest of two numbers _______________________________________

let a=25;
let b=41;
if(a>b){
    console.log("largest Number:", a);
}
else{
    console.log("largest Number:",b);
}                                                    // output is 41   */



/*//______________________________Find the largest of three numbers ______________________________________

let a = 5;
let b = 8;
let c = 4;
if((a > b) && (a > c)){
    console.log("largest Number:", a);
}
else if((b > a) && (b > c)){
     console.log("largest Number:", b);
}
else{
     console.log("largest Number:", c);
}                                                 //largest Number:  8*/


/*//___________________________Check if a character is a vowel or consonant______________________________________

let chr = "p";
if(chr == 'a' || chr == 'e' || chr == 'i' || chr == 'o' || chr == 'u' ){
    console.log(chr,"is vowels");
}
else{
    console.log(chr, "is constant");
}                                       // p is constant*/

/*
//_______________________Check if a person is eligible to vote (age ≥ 18)_____________________________________

let age = 20;

if (age >= 18) {
    console.log("Eligible to vote");
} 
else {
    console.log("Not eligible to vote");            
}                                                    // Eligible to vote



//_______________________________Grade calculation based on marks (A, B, C, etc.)_______________________________

let marks = 85;

if (marks >= 90 ){
    console.log("Grade A");
} 
else if (marks >= 80){
    console.log("Grade B");
} 
else if (marks >= 65){
    console.log("Grade C");
} 
else if (marks >= 50){
    console.log("Grade D");
} 
else if (marks >= 35){
    console.log("Grade E");
} 
else if (marks >= 0){
    console.log("Fail");
}
else{
    console.log("Invalid marks");         
}                                                     // Grade B*/


/*
//_______________________________Check if a number is divisible by 5 and 11_______________________

let num= 110;

if ((num % 5 === 0) && (num % 11 === 0)){
    console.log(num, " is divisible by 5 and 11");
}
else{
    console.log(num, " is  not divisible by 5 and 11");
}                                                                  // 110  is divisible by 5 and 11*/



//___________________Check if a character is uppercase, lowercase, digit, or special symbol________________________

let ch = "0"

if((ch >= 'A') && (ch <= 'Z')){
    console.log(ch, "is the Upppercase");
}
if((ch >= 'a') && (ch <= 'z')){
    console.log(ch, "is the Lowercase");
}
if((ch >= '0') && (ch <= '9')){
    console.log(ch, "is the Digit");
}
else{
    console.log(ch, "is the special symbol")
}                                                     // 0 is the Digit 
