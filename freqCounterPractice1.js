same = (arr1, arr2)  => {
    if(arr1.length !== arr2.length) return false;

    let freqCounter1 = {};
    let freqCounter2 = {};

    for(let val of arr1){
        freqCounter1[val] = (freqCounter1[val] || 0) + 1;
    }

    for(let val of arr2){
        freqCounter2[val]  = (freqCounter2[val] || 0) + 1;
    }

    console.log(freqCounter1);
    console.log(freqCounter2);

    for(let key in freqCounter1){
        if(!(key ** 2 in freqCounter2)){
            console.log('Sqaured value not in second array');
            return false;
        }
    }

    for(let key in freqCounter1){
        // console.log(freqCounter2[key ** 2] + ' and' + freqCounter1[key]);
        if(freqCounter2[key ** 2] !== freqCounter1[key]){
            
            console.log('frequencies are different');
            return false;
        }
    }

    return true;

}

let array1 = [ 1,2,3,5,2];
let array2 = [ 1,2,5,2];
let array3 = [ 1, 9, 25, 4, 25];
let array4 = [ 1, 4 , 25, 4];


console.log(same(array1, array3));