

collectOddValues = (arr) => {
    result = [];
    helper = (arr1) => {
        if(arr1.length === 0) return;

        if(arr1[0] % 2 !== 0){
            result.push(arr1[0]);
        }

        helper(arr1.slice(1));
    }

    helper(arr);

    return result;

}

array1 = [1,2,3,4,5,6,7,8,9,10,11,12,13];
console.log(collectOddValues(array1));