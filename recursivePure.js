collectOddValues = (arr1) => {
    let result = [];
    
    if(arr1.length === 0) return result;

    if(arr1[0] % 2 !== 0){
        result.push(arr1[0]);
    }

    result = result.concat(collectOddValues(arr1.slice(1)));

    return result;

}

let array1 = [1,2,3,4,5,6,7,8,9,10,11,12,13];
console.log(collectOddValues(array1));