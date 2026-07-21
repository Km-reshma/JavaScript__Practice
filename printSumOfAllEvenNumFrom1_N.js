/*let n = 5000;

let sum =0;

for(let i=1; i<=n; i++){

    if(i%2 === 0){

        sum += i;
    }
}

console.log(sum);    */                                      // complexity : O(n)



// optimal solution without loop - O(1)

let n =5000;

let k = n/2;

let sum = k * (k+ 1);

console.log(sum);