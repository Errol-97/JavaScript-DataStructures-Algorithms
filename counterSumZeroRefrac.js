
sumZero = (arr1) => {
    let left = 0;
    let right = arr1.length -1;
    while(left<right){
        if(arr1[left] + arr1[right] > 0){
            right--;
        } else if(arr1[left] + arr1[right] < 0){
            left++;
        } else {
            return [arr1[left], arr1[right]];
        }
    }

    return undefined;

}

let array1 =  [-3, -2, -1, 0, 1, 2, 3];
let array2 = [-2, 0, 1, 3]
console.log(sumZero(array1));