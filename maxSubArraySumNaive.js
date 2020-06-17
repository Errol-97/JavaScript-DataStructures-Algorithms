

maxSubSum = (arr, num) => {
    let max = -Infinity;
    for(let i =0 ;i <= arr.length - num; i++){
        let temp = 0;
        for(let j =0; j<num; j++){
            temp += arr[i+j];
        }

        if(temp>max){
            console.log('Old max: ' +max + ' New Max: ' + temp);
            max = temp;
        }
    }
    return max;

}

arr1 = [2,6,9,2,1,8,5,6,3];
console.log(maxSubSum(arr1,3));