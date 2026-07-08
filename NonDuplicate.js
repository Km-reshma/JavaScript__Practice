let A=[1,1,2,2,3,4,4];

let result =0;

for (let i=0; i< A.length; i++){

    result = result ^ A[i];
}

console.log(result);
