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
/*
let row =5;

for(let i=1; i<row; i++){
     
    let str= " ";
    for(let j=row; j>=i; j--){      
        str += " * "
    }

    console.log(str);
     

} */

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



               // ######## Print Pyramid Star Pattern #########
              
/*            *                  1 
            * * *                3
          * * * * *              5
        * * * * * * *            7
          
*/

let row = 5;

for (let i =1; i<=row; i++){          // outer loop for row to print the star pattern
    //console.log(i);
    let str ="";

    for(let j =1;j<=row-i;j++){  // space print karta hai , for space we use row-i bcz we have to print space in first row 4, second row 3, third row 2, fourth row 1 and fifth row 0. so we can use row-i.
         //console.log(i,j);
         str += " ";
    }

    for (let k=1;k<=2*i-1;k++){  // star print ke liye ,for star we use 2*i-1 bcz we have to print star in first row 1, second row 3, third row 5, fourth row 7 and fifth row 9. so we can use 2*i-1.
         // console.log(i,k);    // number of stars in each row is 2*i-1. so we can use 2*i-1.
         str += "*";
    }
    console.log(str);
}

explanation how we can print the pyramid star pattern:

Row                            Space          star

1       - - - *                  4             1 
2       - - * * *                3             3
3       - * * * * *              2             5
4       * * * * * * *            1             7

//##### Space = total row -current row  means space = row - i
    5-1 = 4
    5-2 = 3
    5-3 = 2
    5-4 = 1

//##### Star = 2*current row -1 means star = 2*i-1
    2*1-1 = 1
    2*2-1 = 3
    2*3-1 = 5
    2*4-1 = 7


          

     




 