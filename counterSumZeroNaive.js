
sumZero = (arr1) => {
    // let result= [];
    for(let i =0; i <arr1.length-1; i++){
        for(let j = i +1; j < arr1.length; j++){
            if(arr1[i] + arr1[j] === 0){
                // result.push(arr1[i], arr1[j]);
                // return result;
                return [arr1[i], arr1[j]];
            }
        }
    }
    return undefined;
}

let array1 =  [-3, -2, -1, 0, 1, 2, 3];
let array2 = [-2, 0, 1, 3]
console.log(sumZero(array2));