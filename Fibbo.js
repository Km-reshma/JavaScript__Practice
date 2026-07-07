/* 

function fibonacci(n) {
    let a = 0, b = 1;                     // base case 

    for (let i = 1; i <= n; i++) {
        console.log(a);
        let c = a + b;
        a = b;
        b = c;
    }
}

fibonacci(47);  */


// number limitations condition in fibbo series
/*
let n = Number(prompt("Enter the limit:"));

let a = 0;
let b = 1;
let ans =" ";

while (a <= n) {

    ans += a + " ";

    let c = a + b;
    a = b;
    b = c;
}

 console.log(ans);*/

// ##########  Star Patterns ##############

/*let row =5;

for (let i =1;i<=5;i++){
    console.log("*");
}*/

//Right angle Triangle Star Pattern ............................................ 

/*           *
             * *
             * * *
             * * * *
             * * * * *


let row =5;

for (let i =1;i<=5;i++){  // outer loop for row to print the star pattern
    let str = " ";
    
    for(let j=1; j<=i; j++){ // inner loop for column we use j<=i bcz jitna row hoga utna hi column hoga
        
        str += " * "
    }
 
    console.log(str);
}

*/

// print inverted right angle triangle star pattern 
/*        * * * *
          * * *
          * *
          *
*/

let row =5;

for(let i=1; i<row; i++){
     
    let str= " ";
    for(let j=row; j>=i; j--){      
        str += " * "
    }

    console.log(str);
     

}

//explanation how we can print the inverted right angle triangle star pattern:
//if row = 4 then we have to print 4 rows and 4 columns in first row, 3 columns in second row, 2 columns in third row and 1 column in last row. so we can use outer loop for row and inner loop for column. outer loop will run from i=1 to i<row and inner loop will run from j=row to j>=i. so the output will be like this:
/*
i       j
1       4
2       3
3       2
4       1
*/

//we see that inner loop is decreasing from ror (4) to 1 and outer loop is increasing from 1 to row (4). so we can use this logic to print the inverted right angle triangle star pattern.

//so we use  j-- and j is initilized with row and use the condition j>=i.
//#"jab tak j ki value i se badi ya barabar h, tab tak inner loop chalega aur jab j ki value i se choti ho jayegi to inner loop ruk jayega. 


 