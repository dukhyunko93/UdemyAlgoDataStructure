class Node{
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BST{
    constructor(){
        this.root = null;
    }

    insert(val){
        let newNode = new Node(val)
        if(!this.root){
            this.root = newNode;
            return this;
        } else {
            let current = this.root;
            while(true){
                if(val < current.value){
                    if(current.left === null){
                        current.left = newNode;
                        return this;
                    } else {
                        current = current.left;
                    }
                } else if (val > current.value){
                    if(current.right === null){
                        current.right = newNode;
                        return this;
                    } else {
                        current = current.right;
                    }
                }
            }
        }
    }
}

let tree = new BST();


tree.insert(10)
tree.insert(5)
tree.insert(12)
tree.insert(63)
tree.insert(123)
tree.insert(2)
tree.insert(8)