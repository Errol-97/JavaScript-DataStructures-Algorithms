class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }

}

class singlyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;

    }

    push(e){
        let n = new Node(e);
        if(this.length === 0){
            this.head = n;
            this.tail = n;
            
        } else {
            this.tail.next = n;
            this.tail = n;        
        }
        this.length++;
        return this;
    }

    pop(){
        if(!this.head) {
            throw new RangeError('Empty list');
        } else if(this.head === this.tail){
            this.head = null;
            this.tail = this.head;
            this.length --;
        } else {
            let current = this.head;
            while(current.next){
                if(current.next === this.tail){
                    let temp = current.next;
                    current.next = null;
                    this.tail = current;
                    this.length --;
                    return temp;          
                } else {
                    current= current.next;
                }
            }
        }   
    }

    shift(){
        let temp = new Node();
        if(!this.head){
            throw new RangeError('Empty list');
        } else if(this.head === this.tail){
            temp = this.head;
            this.head = null;
            this.tail = null;
        } else {
            temp = this.head;
            this.head = this.head.next;
        }
        this.length--;
        temp.next = null;
        return temp;
    }
    unshift(d){
        let n = new Node(d);
        if(!this.head){
            this.head = n;
            this.tail = this.head;
        } else {
            n.next = this.head;
            this.head = n;
        }
        this.length++;
        return this;
    }
    get(index){
       if (index <0 || index >= this.length){
            throw new RangeError('index out of bounds');
        } else {
            let counter = 0;
            let current = this.head;
            while(counter != index){
                counter++;
                current = current.next;
            }
            return current;
        }
    }
    set(d, index){
        if (index <0 || index >= this.length){
            throw new RangeError('index out of bounds');
        } else {
            let counter = 0;
            let current = this.head;
            while(counter != index){
                counter++;
                current = current.next;
            }
            current.data = d;
            return current;
        }
    }
    insert(d, index){
        let n = new Node(d);
        if (index <0 || index > this.length){
            throw new RangeError('index out of bounds');
        }else if(index === 0){
            // n.next = this.head;
            // this.head = n;
            return !!this.unshift(d);
        }else if(index === this.length){
            // this.tail.next = n;
            // this.tail = n;
            return !!this.push(d);
        } else {
            // let counter = 0;
            // let current = this.head;
            // while(counter != index-1){
            //     counter++;
            //     current = current.next;
            // }
            let prev = this.get(index -1);
            let temp = prev.next;
            prev.next = n;
            n.next = temp;   
        }
        this.length++;
        return true;
    }
    remove(index){
        if (index <0 || index >= this.length){
            throw new RangeError('index out of bounds');
        } else if(index === 0){
            return this.shift();
        } else if(index === this.length -1){
            return this.pop();
        } else {
            let prev = this.get(index-1);
            let newNext = prev.next.next;
            prev.next.next = null;
            let oldNext = prev.next;
            prev.next = newNext;
            this.length --;
            return oldNext;
        }
    }
    reverse(){
        if(this.length === 0){
            throw new RangeError('Empty list');
        } else if (this.head=== this.tail){
            return this;
        } else {
            let current = this.head;
            this.head = this.tail;
            this.tail = current;
            let prev = null;
            let next;
            for(let i =0; i<this.length; i++){
                next = current.next;
                current.next = prev;
                prev = current;
                current = next;
            }
        }
    }

}

let list = new singlyLinkedList;
list.push(50);
list.push(100);
list.push(200);
list.push(500);

console.log(list);
// console.log(list.pop());
// console.log(list.shift());
// list.unshift(25);
// console.log(list.get(2));
// console.log(list.set(2000, 1))
// list.insert(75, 4);
// console.log(list.remove(1));
list.reverse();
console.log(list);