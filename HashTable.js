class HashTable{
    constructor(size){
        this.keyMap = new Array(size);
        this.size = size;
    }

    set(key, val){
        //hash key
        let index = this.hash(key);
        if(!this.keyMap[index]) this.keyMap[index] = [];
        this.keyMap[index].push([key, val]);
    }//END OF SET

    hash(key){
        let total = 0;
        let PRIME = 31
        for(let i = 0; i < Math.min(key.length, 100); i++){
            let char = key[i]
            let value = char.charCodeAt(0) - 96;
            total = (total*(PRIME) + value) % this.size;
        }
        return total;
    }//END OF HASH


    get(key){
        //get index
        let index = this.hash(key);
        if(this.keyMap[index]){
            for(let i = 0; i< this.keyMap[index].length; i++){
                if(this.keyMap[index][i][0] === key){
                    return this.keyMap[index][i][1];
                }
            }
        }
    }//END OF GET

    values(){
        let valuesArr = [];
        for(let i =0; i< this.size; i++){
            if(this.keyMap[i]){
                for(let j =0; j<this.keyMap[i].length; j++){
                    if(!valuesArr.includes(this.keyMap[i][j][1])){
                        valuesArr.push(this.keyMap[i][j][1]);
                    }//END OF IF             
                }//END OF INNER LOOP
            }//END OF IF
        }//END OF OUTER LOOP
        return valuesArr;
    }//END OF VALUES

    keys(){
        let keysArr = [];
        for(let i =0; i< this.size; i++){
            if(this.keyMap[i]){
                for(let j = 0; j < this.keyMap[i].length; j++){
                    if(!keysArr.includes(this.keyMap[i][j][0])){
                        keysArr.push(this.keyMap[i][j][0]);
                    }//END OF IF             
                }//END OF INNER LOOP
            }//END OF IF
        }//END OF OUTER LOOP
        return keysArr;
    }//END OF KEYS
}



let ht = new HashTable(13);
ht.set("akdjid", "Errol");
ht.set("geegid", "Kalisha");
ht.set("poipioid", "Kenzie");
ht.set("nmvuoeu", "Rob");
ht.set("vauvefv", "Ish");
ht.set("bnboeb", "Tre");
let word = ht.get("akdjid");
ht.keys();
debugger;
