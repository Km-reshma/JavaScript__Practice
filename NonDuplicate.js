/*
let A=[1,1,2,2,3,4,4];

let result =0;

for (let i=0; i< A.length; i++){

    result = result ^ A[i];
}

console.log(result);*/


let A= [1,1,2,2,3,4];

for(let i=0; i<A.length; i++){

    let count =0;

    for(let j =0; j<A.length; j++){

        if(A[i]==A[j]){                      

            count ++;

        }
    }
    
    if(count == 1){

        console.log(A[i]);
    }
}

/*
frequent count variable created to count the apperance of the that Element and initialized with 0(count =0)

1. outer loop i ko for loop chalega 
2. then inner loop j chalega 
3. and then compare (pick one element from i and compare with whole element of the inner loop )
4. " A[i]== A[j]" if same incremaent count    "count ++" if count is more than 2 time then duplicate
5. if count ==1 means element is appaer only one time that means not duplicat 
6. print A[i]

*/
