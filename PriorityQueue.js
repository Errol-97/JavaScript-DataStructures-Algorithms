class Node{
    constructor(value, priority){
        this.value = value;
        this.priority = priority;
    }

}
//minHeap implementation
class PriorityQueue{
    constructor(){
        this.values = [];
    }

    enqueue(val, priority){
        let node = new Node(val, priority);
        this.values.push(node);
        this.bubbleUp();
    }

    bubbleUp(){
        let index = this.values.length -1;
        const element = this.values[index];
        while(index > 0){
            let pIndex = Math.floor((index -1)/2);
            let parent = this.values[pIndex];

            if(element.priority >= parent.priority) break;

            this.values[pIndex] = element;
            this.values[index] = parent;
            index = pIndex;
        }
    }

    dequeue(){
        const min = this.values[0];
        const end = this.values.pop();
        if(this.values.length > 0){
            this.values[0] = end;
            //sink down
            this.sinkDown();
        }
        return min;
    }

    sinkDown(){
        let index = 0;
        const length = this.values.length;
        const element = this.values[0];
        while(true){
            let lftChildIndex = 2 * index +1;
            let rtChildIndex = 2 * index +2;
            let lftChild, rtChild;
            let swap = null;

            if(lftChildIndex < length){
                lftChild = this.values[lftChildIndex];
                if(lftChild.priority < element.priority){
                    swap = lftChildIndex;
                }
            }
            if(rtChildIndex < length){
                rtChild = this.values[rtChildIndex];
                if((swap === null && rtChild.priority < element.priority) || (swap !== null && rtChild.priority < lftChild.priority)){
                    swap = rtChildIndex;
                }
            }


            if(swap === null) break;
            this.values[index] = this.values[swap];
            this.values[swap] = val;
            index = swap;
        }
    }
}//end of PriorityQueue

let ER = new PriorityQueue();
ER.enqueue("common cold", 5);
ER.enqueue("open hear surgery", 1);
ER.enqueue("flu", 2);
debugger;