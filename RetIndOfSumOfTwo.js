//Problem Statment:

//Given an integer Array- arr=[0,2,3,5,7]; and 
//integer targer , taret =8;
//return the index of two number whose sum is equal to the Target.


//we use this problem by using "Two Pointer Approach"


function twoSum(arr, target){

    let left =0;
    let right = arr.length -1;

    while(left < right){

        let sum =arr[left]+arr[right];

        if(sum === target){
            return [left, right];
        }
        else if(sum < target){

            left ++;
        }
        else{
            
            right --;
        }
    }
    return [  ];
}

let arr = [0, 2, 3, 5, 7];
let target = 8;

console.log(twoSum(arr, target));
