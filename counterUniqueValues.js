

countUniqueValues = (arr) => {
    let i = 0;
    let j = i +1;

    while(j<= arr.length){
        if(arr[i] === arr[j]){
            j++;
        } else {
            i++;
            arr[i] = arr[j];
            j++;
        }
    }
    return i;
}

arr1 = [1,2,3,4,4,4,7,7,12,12,13];
arr2 = [1,1,1,1,1,1];
arr3 = [];
// console.log(countUniqueValues(arr1));
console.log(countUniqueValues(arr2));