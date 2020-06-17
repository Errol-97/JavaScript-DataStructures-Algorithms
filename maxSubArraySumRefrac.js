

maxSubSum = (arr, num) => {
    if(arr.length < num  || arr.length ===0 ) return null;
    
    let tempMax = 0;
    let sumMax = 0;

    for(let i=0; i < num; i++){
        tempMax += arr[i];
    }

    sumMax = tempMax;

    for(let i=num; i < arr.length; i++){
        tempMax += arr[i] - arr[i-num];
        sumMax = Math.max(sumMax, tempMax);
    }

    return sumMax;
}

arr1 = [2,6,9,2,1,8,5,6,3];
console.log(maxSubSum(arr1,3));