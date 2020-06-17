class Node {
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
        this.freq = 0;
    }
}
class BinarySearchTree{
    constructor(){
        this.root = null;
    }

    insert(value){
        const val = new Node(value);
        if(!this.root){
            this.root = val;
            return this;
        } else {
            let current = this.root;
            while(true){
                if(value === current.value){
                    current.freq = current.freq + 1;
                    return this;
                } else if(value < current.value){
                    if(current.left === null){
                        current.left = val;
                        return this;
                    } else {
                        current = current.left;
                    }
                } else if(value > current.value){
                    if(current.right === null){
                        current.right = val;
                        return this;
                    } else {
                        current = current.right;
                    }
                }
            }
        }
    }//end of insert method

    find(value){
        let current = this.root;
            while(true){
                if(current === null){
                    return 'Value not found';
                }
                if(value === current.value){
                    return current;
                } else if(value < current.value){
                    current = current.left;
                } else if(value > current.value){
                    current = current.right;
                }
            }
    }//end of find
    dfsPreOrder(){

        let current = this.root;
        let visited = [];
    
        helper(current);

        function helper(node){
            visited.push(node.value);
            if(node.left){
                helper(node.left)
            }
            if(node.right){
                helper(node.right);
            }
        }
        return visited;

    }//end DFSPreorder

}//end of BST

 tree = new BinarySearchTree();
// tree.root= new Node(10);
// tree.root.left = new Node(7);
// tree.root.right = new Node(15);
// tree.root.left.right = new Node(9);
tree.insert(10);
tree.insert(15);
tree.insert(11);
tree.insert(17);
tree.insert(1);
tree.insert(10);
tree.insert(25);
// console.log(tree.find(17));

console.log(tree.dfsPreOrder());