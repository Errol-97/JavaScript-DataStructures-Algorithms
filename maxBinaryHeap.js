class MaxBinaryHeap{
    constructor(){
        // this.values = [];
        this.values = [41, 39, 33, 18, 27, 12];
    }

    insert(val){
        this.values.push(val);
        this.bubbleUp();
    }

    bubbleUp(){
        let index = this.values.length -1;
        const val = this.values[index];
        while(index > 0){
            let pIndex = Math.floor((index -1)/2);
            let parent = this.values[pIndex];

            if(val <= parent) break;

            this.values[pIndex] = val;
            this.values[index] = parent;
            index = pIndex;
        }
    }

    extractMax(){
        const max = this.values[0];
        const end = this.values.pop();
        if(this.values.length > 0){
            this.values[0] = end;
            //sink down
            this.sinkDown();
        }
    0.
        return max;
    }

    sinkDown(){
        let index = 0;
        const length = this.values.length;
        const val = this.values[0];
        while(true){
            let lftChildIndex = 2 * index +1;
            let rtChildIndex = 2 * index +2;
            let lftChild, rtChild;
            let swap = null;

            if(lftChildIndex < length){
                lftChild = this.values[lftChildIndex];
                if(lftChild > val){
                    swap = lftChildIndex;
                }
            }
            if(rtChildIndex < length){
                rtChild = this.values[rtChildIndex];
                if((swap === null && rtChild > val) || (swap !== null && rtChild > lftChild)){
                    swap = rtChildIndex;
                }
            }


            if(swap === null) break;
            this.values[index] = this.values[swap];
            this.values[swap] = val;
            index = swap;
        }
    }
}


let heap = new MaxBinaryHeap();
heap.insert(55);
debugger;
// [41, 39, 33, 18, 27, 12]