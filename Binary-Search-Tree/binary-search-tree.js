class Node{
    constructor(val){
        this.val = val;
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
                if(val === current.val) return undefined;
                if(val < current.val){
                    if(current.left === null){
                        current.left = newNode;
                        return this;
                    } else {
                        current = current.left;
                    }
                } else if (val > current.val){
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

    find(val){
        if(!this.root) return false;
        let current = this.root, found = false;
        while(current && !found){
            if(val < current.val){
                current = current.left;
            } else if (val > current.val){
                current = current.right;
            } else {
                found = true;
            }
        }
        if(!found) return undefined;
        return current;
    }

    contains(val){
        if(!this.root) return false;
        let current = this.root, found = false;
        while(current && !found){
            if(val < current.val){
                current = current.left;
            } else if (val > current.val){
                current = current.right;
            } else {
                return true;
            }
        }
        return false;;
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