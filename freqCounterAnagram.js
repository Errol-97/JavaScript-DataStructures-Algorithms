isAnagram = (str1,str2) => {

    if(str1.length !== str2.length) return false;

    let freqCounter1 = {};
    let freqCounter2 = {};

    for(let char in str1){
        freqCounter1[str1.charAt(char)] = (freqCounter1[str1.charAt(char)] || 0) + 1;
    }

    for(let char in str2){
        freqCounter2[str2.charAt(char)] = (freqCounter2[str2.charAt(char)] || 0) + 1;
    }

    console.log(freqCounter1);
    console.log(freqCounter2);

    for(let char in freqCounter1){
        if(!(char in freqCounter2)){
            console.log('Character not in second string');
            return false;
        }
    }

    for(let char in freqCounter1){
        console.log(freqCounter1[char] + ' and ' + freqCounter2[char]);
        if(freqCounter1[char] !== freqCounter2[char]){
            console.log('Character frequencies are not the same');
            return false;
        } 
    }

    return true;


}





let string1 =  'aaz';
let string2 = 'zza';

console.log(isAnagram(string1, string2));